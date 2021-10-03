/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import atomicLabsBD from '../api/atomicLabsBD';


export const usePersonas = () => {
  const [personas, setPersonas] = useState();

  useEffect(() => {
    getPersonas();
  }, []);

  const getPersonas = async () => {
    const resp = await atomicLabsBD.get('/names/');
    setPersonas(resp);
  };
  return {
    personas,
  };
};

