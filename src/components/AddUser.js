import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import {addUser} from '../JS/actions/appActions'

const AddUser = (props) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    salary: "",
    age: "",
  });

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleConfim = () => {
    dispatch(addUser(formData));
  };

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
      style={{backgroundColor: '#4263EB', borderRadius:'30px', height:'50px', width:'220px'}}
        color="primary"
        onClick={toggle}
      >
        Add Employee
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Employee</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name Of Employee</Label>
              <Input
                onChange={handleFormChange}
                type="text"
                name="name"
                id="name"
                placeholder="Enter the name ...."
              />
            </FormGroup>
            <FormGroup>
              <Label for="salary">Salary</Label>
              <Input
                onChange={handleFormChange}
                type="text"
                name="salary"
                id="salary"
                placeholder="Enter the salary ...."
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                onChange={handleFormChange}
                type="text"
                name="age"
                id="age"
                placeholder="Enter teh age..."
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              handleConfim();
              toggle();
            }}
          >
            Confirm
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddUser;