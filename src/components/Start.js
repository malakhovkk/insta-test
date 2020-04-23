import React from 'react';
import { Button, Segment } from 'semantic-ui-react'
import './App.css';
function Start(props) {

  const goToLogin = () => {
    props.history.push('/login')
  }
  const goToReg = () => {
    props.history.push('/registration')
  }
  return (


    <div className="App">
      <Button onClick={goToLogin} inverted color='orange'>
        Войти
      </Button>
      <a onClick={goToReg} >Зарегистрироваться</a>
    </div>
  );
}

export default Start;
