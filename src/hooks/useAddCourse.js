import { useState } from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import { db } from '../firebase';
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

export const useAddCourse = () => {
  const [loading, setLoading] = useState(false);

  const { user } = useUserAuth();

  const handleSaveCourse = async (course) => {
    setLoading(true);
    const { name, category } = course;

    // Transacción que se debe hacer para registrar un curso
    // 1. Se debe registrar el cusro con toda la estructura ya definida.
    // 2. Se debe registrar el curso el un campo en la parte de usuario,
    // para saber cuales son los cursos del usuario.

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
      comments: [],
    };

    // registramos los datos en firestore
    const courseRef = await addDoc(collection(db, 'courses'), courseStruct);

    console.log(`El curso se registro con el ID ${courseRef.id}`);

    // Se registra el curso en el usuario.
    const userDataRef = doc(db, 'users', user.uid);
    const userDataSnap = await getDoc(userDataRef);

    const cursoDetalles = {
      cursoID: courseRef.id,
      title: courseStruct.basics.title,
      photoURL: courseStruct.basics.photoURL,
      public: courseStruct.basics.public,
    };

    if (userDataSnap.exists()) {
      const userData = userDataSnap.data();
      setDoc(
        userDataRef,
        {
          cursos: [...(userData.cursos ? userData.cursos : []), cursoDetalles],
        },
        { merge: true }
      );
    }

    setLoading(false);
    return courseRef;
  };

  return {
    loading,
    handleSaveCourse,
  };
};
