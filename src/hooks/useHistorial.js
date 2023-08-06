import { useEffect, useState } from 'react';

export const useHistorial = (input = '') => {
  const apiHistorial = [
    'Configuracion de Golang',
    'Analisis de datos con python',
    'Desarrollo de API REST con Node.js y express',
    'De Cero a 100 con R',
  ];

  const [historial, setHistorial] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const searchHistorial = () => {
    const result = apiHistorial.filter((h) => {
      if (input === '') return false;
      return h.includes(input);
    });

    return result;
  };

  useEffect(() => {
    const historialFilter = searchHistorial();
    setHistorial(historialFilter);
    console.log(historialFilter);
    setIsLoading(false);
  }, [input]);

  return {
    isLoading,
    historial,
  };
};
