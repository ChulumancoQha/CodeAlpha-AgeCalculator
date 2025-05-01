import { Typography, Container } from '@mui/material';
import AgeCalculatorForm from './components/agecalcutorform.jsx';
import AgeResults from './components/ageresults.jsx';
import { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const age = today.getFullYear() - birthDateObj.getFullYear();
    setAge(age);
    console.log(age);
  
  }
  return (
    <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw'}}>
        <Typography variant="h1" component="h2" align='center' >
          Age Calculator
        </Typography>
       <AgeCalculatorForm calculateAge={calculateAge}/>
       {age && <AgeResults age={age} />}
    </Container>
  )
}

export default App
