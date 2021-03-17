

import { ADD, DELETE, GET_USER } from "../const/actionTypes";
import axios from 'axios'

export const getUsers = () => async (dispatch) => {
    try {
      const res = await axios.get("http://dummy.restapiexample.com/api/v1/employees");
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const addUser = (user) => {
  return {
    type: ADD,
    payload: { id: Math.ceil(Math.random() * 100),  employee_name: user.name, employee_salary: user.salary, employee_age: user.age },
  };
};

export const deleteUser = (userId) => {
  return {
    type: DELETE,
    payload: userId,
  };
};
