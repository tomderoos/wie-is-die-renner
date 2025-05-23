import { useState } from 'react';
import { 
  Container, 
  TextField, 
  Card, 
  CardContent, 
  Typography, 
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Chip
} from '@mui/material';
import { riders } from './data/riders';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e10600', // Giro roze
    },
  },
});

function App() {
  const [number, setNumber] = useState('');
  const rider = riders.find(r => r.number === parseInt(number));

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Alleen toestaan als het leeg is of maximaal 3 cijfers bevat
    if (value === '' || /^\d{1,3}$/.test(value)) {
      setNumber(value);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Giro d'Italia Rugnummerzoeker
          </Typography>
          <TextField
            fullWidth
            label="Voer rugnummer in"
            variant="outlined"
            type="number"
            value={number}
            onChange={handleNumberChange}
            inputProps={{ 
              inputMode: 'numeric', 
              pattern: '[0-9]*',
              maxLength: 3
            }}
            sx={{ mb: 3 }}
          />
        </Box>

        {rider && (
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {rider.name}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Chip 
                  label={`Rugnummer: ${rider.number}`} 
                  color="primary" 
                  sx={{ mr: 1, mb: 1 }} 
                />
                <Chip 
                  label={rider.nationality} 
                  variant="outlined" 
                  sx={{ mr: 1, mb: 1 }} 
                />
              </Box>
              <Typography color="text.secondary" gutterBottom>
                Ploeg: {rider.team}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App; 