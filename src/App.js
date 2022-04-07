import './App.css';
import React, { useState } from 'react'
import { Button, ButtonGroup, Checkbox, Container, CssBaseline, FormControlLabel, TextField, Typography } from '@material-ui/core';

import { Delete, Save } from '@material-ui/icons';

import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'
import { orange, green } from '@material-ui/core/colors'

import Paper from '@material-ui/core/Paper'
import Grid  from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import 'fontsource-roboto'

const styles = makeStyles({
   root: {
      background : 'linear-gradient(45deg, #fe6b8b, #ff8e53)',
      marginBottom : '20px',
      border : 2,
      borderRadius : 15,
      color : 'white',
      padding : '5px 30px'
   }
})

const theme = createTheme({
   typography: {
      h4: {
         fontSize : 24 
      }
   },
   // palette: {
   //    primary: {
   //       main : orange[200]
   //    },
   //    secondary: {
   //       main : green[200]
   //    }
   // }
})

function ButtonStyled(){
   const classes = styles()
   return <Button className={classes.root}>Test Styled Button</Button>
}

function App() {
   const [checked, setChecked] = useState(true)
   console.log(checked)
   return (
      <ThemeProvider theme={theme}>
         <Container>
         <div className="App">
            <AppBar color='secondary'>
               <Toolbar>
                  <IconButton>
                     <MenuIcon />
                  </IconButton>
                  <Typography variant='h6'>
                     MUI Theming 
                  </Typography>
                  <Button>
                     Login
                  </Button>
               </Toolbar>
            </AppBar>
            <Typography variant='h2'>
               Welcome To MUI 4
            </Typography>
            <Typography variant='h4'>
               Learn how to use Material UI
            </Typography>

            <ButtonStyled/>

            <Grid container spacing={3} justify='center'>
               <Grid item xs={3} sm={6}>
                  <Paper style={{ height : 75, width : '100%' }} />
               </Grid>
               <Grid item xs={3} sm={6}>
                  <Paper style={{ height : 75, width : '100%' }} />
               </Grid>
               <Grid item xs={3} sm={6}>
                  <Paper style={{ height : 75, width : '100%' }} />
               </Grid>
            </Grid>

            <TextField
               variant='filled'
               type='email'
               label='Time'
               placeholder='text@test.com'
            />
            <FormControlLabel
               control={<Checkbox
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  inputProps={{
                     'aria-label' : 'secondary checkbox'
                  }}
               />}
               label='Testing CheckBox'
            />
            
            <CssBaseline/>
            <ButtonGroup>
               <Button
                  startIcon={<Save />}
                  variant='contained'
                  color='primary'
               >
                  Save
               </Button>
               <Button
                  color='secondary'
                  variant='contained'
                  endIcon={<Delete />}
               >
                  Delete
               </Button>
            </ButtonGroup>
         </div>
         </Container>
      </ThemeProvider>
   );
}

export default App;
