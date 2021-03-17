import React from "react";
import './Card.css'
import { useDispatch } from "react-redux";
import { deleteUser } from "../JS/actions/appActions";
import {Button} from 'reactstrap';

function User({ user }) {

    const dispatch = useDispatch();
  return (
      <div>
    <div className='userCard'>
     <div class="card">
    <div class="column_one">
        <div class="text">
            <h6 style={{width:'250px'}}> Mr./Mrs. <span>{user.employee_name} </span></h6>
            <div class="line"></div>
            <p>Age : {user.employee_age}</p>
            <p>Salary : {user.employee_salary}</p>
            <Button  color="secondary" onClick={()=>dispatch(deleteUser(user.id))}>Delete Employee</Button>
        </div>
        <div class="title">DATAHORIZON</div>
    </div>
    <div class="column_two">
        <img src="https://lh3.googleusercontent.com/proxy/miarJ4Ewoe8EFKUvIlNCOWOY3tnDU9l63TcRwNoEqPDCe9YjQDvcGiFrBK5Ss1uKIoP-3BcEs8dl18WhilavZTzF3ryVT-9aXJreLLvy73NhYP0BlWHwr5cluIY" alt='profile image'/>
    </div>
</div>
    </div>
    </div>
  );
}

export default User;

