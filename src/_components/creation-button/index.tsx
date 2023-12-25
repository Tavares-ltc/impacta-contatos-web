'use client';

import style from '@/_components/creation-button/layout.module.css';
import { Modal } from '../modal';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useContactContext } from '@/context.tsx/ContactContext';
import { IContactData } from '@/interfaces/IContact';
import { PageTitle } from '../page-title';

export function CreationButton() {
  const { setSelectedContact, selectedContact, setActualPage } = useContactContext();
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<IContactData>({
    mode: 'onChange' // Para validar ao mudar o campo
  });
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (selectedContact) {
      Object.keys(selectedContact).forEach((key) => {
        setValue(key as keyof IContactData, selectedContact[key as keyof IContactData]);
      });
    } else {
      reset();
    }
  }, [selectedContact, reset, setValue]);

  const openCreationModal = () => {
    setIsModalVisible(true);
    setSelectedContact(undefined);
  };

  type PartialContactData = Omit<IContactData, 'image'> & { image?: string };

const onSubmit = (data: PartialContactData) => {
  if (!data.image) {
    data.image = 'https://lippianfamilydentistry.net/wp-content/uploads/2015/11/user-default.png';
  }
  if (selectedContact) {
    editContact(data as IContactData);
  } else {
    postContact(data as IContactData);
  }
};

  const editContact = (contact: IContactData) => {
    fetch(`${API_URL}/contact`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao atualizar contato');
        }

        setSelectedContact(undefined);
        setActualPage(1);
        setIsModalVisible(false);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  };

  const postContact = (contact: IContactData) => {
    fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao criar o contato');
        }

        setSelectedContact(undefined);
        setActualPage(1);
        setIsModalVisible(false);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  };

  return (
    <div className={style.container}>
      <Modal isVisible={isModalVisible || !!selectedContact} setIsVisible={setIsModalVisible} onCloseFunction={() => { setSelectedContact(undefined) }}>
        <section>
          <PageTitle>
            <h1>Impacta Contatos</h1>
            <h2>Criação de contatos</h2>
          </PageTitle>
        </section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='name'>Nome</label>
          <input type='text' id='name' {...register('name', { required: 'Este campo é obrigatório' })} />
          {errors.name && <span>{errors.name.message}</span>}

          <label htmlFor='tel'>Número de telefone</label>
          <input type='text' id='tel' {...register('phone', {
            required: 'Este campo é obrigatório',
            pattern: {
              value: /^\d+$/,
              message: 'Digite um número de telefone válido'
            }
          })} />
          {errors.phone && <span>{errors.phone.message}</span>}

          <label htmlFor='email'>E-mail</label>
          <input type='text' id='email' {...register('email', {
            required: 'Este campo é obrigatório',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Digite um e-mail válido'
            }
          })} />
          {errors.email && <span>{errors.email.message}</span>}

          <label htmlFor='type'>Especialização profissional</label>
          <input type='text' id='type' {...register('legalField', { required: 'Este campo é obrigatório' })} />
          {errors.legalField && <span>{errors.legalField.message}</span>}

          <label htmlFor='image'>URL de imagem</label>
          <input type='text' id='image' {...register('image', {
            pattern: {
              value: /^(ftp|http|https):\/\/[^ "]+$/,
              message: 'Digite uma URL válida'
            }
          })} />
          {errors.image && <span>{errors.image.message}</span>}

          <label htmlFor='description'>Descrição do contato</label>
          <textarea id='description' {...register('description', { required: 'Este campo é obrigatório' })} />
          {errors.description && <span>{errors.description.message}</span>}

          <button type='submit'>{selectedContact ? 'Editar contato' : 'Criar contato'}</button>
        </form>
      </Modal>
      <button className={style.creationButton} onClick={openCreationModal}>+</button>
    </div>
  );
}
