import React, { useState } from 'react';
import { Button, Segment, Form, Radio,Checkbox, Grid, Image } from 'semantic-ui-react'
import './App.css';
function Login() {

  return (


    <div className="App">

    <Grid columns={3} divided>
     <Grid.Row>
       <Grid.Column className="item">
        <Image avatar="true" size="tiny"  src='/image.jpg' />
         <p>Блогер</p>
       </Grid.Column>
       <Grid.Column>
         <p>Блогер</p>
       </Grid.Column>
       <Grid.Column>
         <p>Блогер</p>
       </Grid.Column>
     </Grid.Row>

     <Grid.Row>
       <Grid.Column>
         <p>Блогер</p>
       </Grid.Column>
       <Grid.Column>
         <p>Блогер</p>
       </Grid.Column>
       <Grid.Column>
         <p>Блогер</p>
       </Grid.Column>
     </Grid.Row>
   </Grid>
    </div>
  );
}

export default Login;
