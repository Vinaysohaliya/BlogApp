import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Denied from './Denied';
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

const RequiredAuth = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();

      const unsubscribe = onAuthStateChanged(auth, (user) => {  
        if (user) {
          setIsUserLoggedIn(true); // User is signed in
        } else {
          setIsUserLoggedIn(false); // No user is signed in
        }
      });

    return () => {
      unsubscribe();
    };
  }, []);

  return isUserLoggedIn ? <Outlet /> : <Denied />;
};

export default RequiredAuth;
