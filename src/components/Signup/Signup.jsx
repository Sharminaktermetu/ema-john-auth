import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../providers/AuthProvider';

const Signup = () => {
    const {createUser}= useContext(AuthContext)
    const handleSubmit=event=>{
        event.preventDefault();
        const form= event.target;
        const name= form.name.value;
        const email= form.email.value;
        const password= form.password.value;
       
        createUser(email, password)
        .then(result=>{
            const loggedUser= result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div className='w-50 m-auto container p-5'>
        <Form className='w-75' onSubmit={handleSubmit}>
        <Form.Label>Your name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter name" />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
 
        <Form.Control type="email" name='email' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </div>
    );
};

export default Signup;