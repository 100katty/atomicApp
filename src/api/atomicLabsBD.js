/* eslint-disable prettier/prettier */
import axios from 'axios';

const atomicLabsDB = axios.create({
  baseURL: 'https://morning-hamlet-18619.herokuapp.com/api/v1',
});

export default atomicLabsDB;
