import { useState } from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

export const useAddCourse = () => {
  const [loading, setLoading] = useState(false);

  const { user } = useUserAuth();

  const handleSaveCourse = async (course) => {
    setLoading(true);
    const docRef = await addDoc(collection(db, 'courses'), {
      ...course,
      userID: user.uid,
    });

    setLoading(false);
    return docRef;
  };

  return {
    loading,
    handleSaveCourse,
  };
};
