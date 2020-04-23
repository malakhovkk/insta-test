import React, { useState } from 'react';
import { Button, Segment, Form, Radio,Input  } from 'semantic-ui-react'
import './App.css';
function Registration() {
  const [state, setState] = useState({value:'',passcodeError:''});
const handleChange = (e, { value }) => setState( {...state, value })
//const checkIsCorrect = (e) =>
//{
//  console.log(e.target.value);
//  e.target.value = '';
  //console.log(e.target);
//  if (e.target.value === "1"){
    //setState  ({...state, passcodeError:'Please enter a valid email address'});
//    e.target.setAttribute("error","Error");
//  }
//  else {
//    e.target.removeAttribute("error")
  //setState  ({...state, passcodeError:''});
//  }
//}
  return (


    <div className="App">


     <Form>
       <Form.Field>
         Кто Вы? <b>{state.value}</b>
       </Form.Field>
       <Form.Field>
         <Radio
           label='Рекламодатель'
           name='radioGroup'
           value='Рекламодатель'
           checked={state.value === 'Рекламодатель'}
           onChange={handleChange}
         />
       </Form.Field>
       <Form.Field>
         <Radio
           label='Блогер'
           name='radioGroup'
           value='Блогер'
           checked={state.value === 'Блогер'}
           onChange={handleChange}
         />
       </Form.Field>
       <Form.Input label='Пароль' type='password' />
       <Form.Input label='Подтверждение пароля' type='password' />
       <Form.Field
      id='form-input-control-error-email'
      control={Input}
    //  error="error"
    //  error={state.passcodeError}
    //  onBlur={checkIsCorrect}
      label='Email'
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Зарегистрироваться'
    />
     </Form>
    </div>
  );
}

export default Registration;
