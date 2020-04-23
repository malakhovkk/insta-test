import React, { useState } from 'react';
import { Button, Segment, Form, Radio,Checkbox  } from 'semantic-ui-react'
import './App.css';
function Login() {

  return (


    <div className="App">

    <Form>
<Form.Field>
  <label>E-mail</label>
  <input placeholder='E-mail' />
</Form.Field>
<Form.Field>
  <label>Пароль</label>
  <input type='password'/>
</Form.Field>
<Button type='submit'>Войти</Button>
</Form>
    </div>
  );
}

export default Login;
