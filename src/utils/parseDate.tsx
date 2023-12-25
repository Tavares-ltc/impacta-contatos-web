export function parseDate(input: string) {
    const parts = input.split('/');
    if (parts.length !== 3) {
      throw new Error('Formato inválido de data. Use DD/MM/AAAA.');
    }
  
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
  
    const date = new Date(year, month, day);
    return date;
  }
  