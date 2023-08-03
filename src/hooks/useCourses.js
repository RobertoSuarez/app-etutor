import { useState } from 'react';
import { BASE_URL } from '../config';
import { useEffect } from 'react';

export default function useCourses(input) {
  const [courses, setCourses] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCourses = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/api/course`);
      const data = await response.json();
      setCourses(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, [input]);

  return {
    courses,
    isLoading,
    error,
  };
}
