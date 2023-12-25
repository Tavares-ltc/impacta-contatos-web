type Endpoint = 'list' | 'find' | 'search' | 'findByDate';

  export interface IGetRoute {
    route: Endpoint,
    queryParams: {
        field?: string,
        value?: string,
        searchString?: string,
        findByDate?: string
    }
  }
  