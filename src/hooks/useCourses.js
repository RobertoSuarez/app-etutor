import { useState } from 'react';
import { BASE_URL } from '../config';
import { useEffect } from 'react';

export default function useCourses(input) {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCourses = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/api/course`);
      const data = await response.json();
      // console.log(data.courses);
      let { courses } = data;
      // filtramos los cursos desde el cliente
      courses = courses.filter((curso) => curso.title.includes(input));
      setCourses(courses);
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
