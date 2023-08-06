import { useEffect } from 'react';
import { useState } from 'react';

// useSearchPage esta enfocado a hacer una busqueda de pagina en la aplicación
// esto debe retornar un array con todas las paginas encontradas en base
// al input que nos pasaran
export const useSearchPage = (input = '') => {
  const appPages = [
    {
      label: 'Cerrar sesión',
      url: '/login',
    },
    {
      label: 'Configuraciones',
      url: '/courses',
    },
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Todos los cursos',
      url: '/courses',
    },

    {
      label: 'Mis avances',
      url: '/contact',
    },
  ];

  const [pages, setPages] = useState([]);

  const searchPages = () => {
    const result = appPages.filter((p) => {
      if (input === '') return false;
      return p.label.includes(input);
    });

    return result;
  };

  useEffect(() => {
    const filter = searchPages();
    setPages(filter);
  }, [input]);

  return {
    pages,
  };
};
