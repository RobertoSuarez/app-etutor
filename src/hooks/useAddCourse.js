import { useState } from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import { db } from '../firebase';
import { Timestamp, addDoc, collection } from 'firebase/firestore';

export const useAddCourse = () => {
  const [loading, setLoading] = useState(false);

  const { user } = useUserAuth();

  const handleSaveCourse = async (course) => {
    setLoading(true);
    const { name, category } = course;

    // Definimos la estructura inicial que tendra el curso.
    const courseStruct = {
      userID: user.uid,
      basics: {
        title: name,
        subTitle: '',
        category: category,
        description: '',
        date: Timestamp.now(), // fecha de creación
        videoURL: '',
        photoURL: '',
        public: false,
      },
      goals: {
        learningObjectives: ['Define tu primero objetivo para el curso'], // Objetivos de aprendisaje del curso.
        studentRequirements: ['Requisito para tomar el curso'], // requisitos minimos de estudiantes para tomar este curso.
      },
      program: {
        sections: [], // se define las secciones del curso, los videos y objetivos por clases
      },
    };

    // registramos los datos en firestore
    const docRef = await addDoc(collection(db, 'courses'), courseStruct);

    setLoading(false);
    return docRef;
  };

  return {
    loading,
    handleSaveCourse,
  };
};
