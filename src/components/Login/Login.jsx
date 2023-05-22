import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [show, setShow]=useState(false)
    const {logIn}=useContext(AuthContext)
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const handleLogin=event=>{
        event.preventDefault();
        const form= event.target;
        const email= form.email.value;
        const password= form.password.value;
        console.log(email,password);
        logIn(email,password)
        .then(result=>{
            const loggedInUser= result.user;
            console.log(loggedInUser);
            form.reset()
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className='w-50 m-auto container p-5'>
        <Form className='w-75' onSubmit={handleLogin}>
           <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
 
        <Form.Control type="email" name='email' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type={show?"text":"password"} name='password' placeholder="Password" />
        <p onClick={()=>setShow(!show)}>
         <b> {show?<span>Hide</span>:<span>Show</span>}</b>
          
          </p>
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

export default Login;