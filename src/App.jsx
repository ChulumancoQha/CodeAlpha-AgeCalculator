import { Typography, Container } from '@mui/material';
import AgeCalculatorForm from './components/agecalcutorform.jsx';
function App() {

  return (
    <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw'}}>
        <Typography variant="h1" component="h2" align='center' >
          Age Calculator
        </Typography>
       <AgeCalculatorForm />
    </Container>
  )
}

export default App
