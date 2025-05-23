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
  CssBaseline
} from '@mui/material';

// Voorbeeld data - in een echte app zou dit van een API komen
const riders = [
  { number: 1, name: "Tadej Pogačar", team: "UAE Team Emirates", nationality: "Slovenië" },
  { number: 2, name: "Primož Roglič", team: "Bora-Hansgrohe", nationality: "Slovenië" },
  { number: 3, name: "Jonas Vingegaard", team: "Visma-Lease a Bike", nationality: "Denemarken" },
];

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
            onChange={(e) => setNumber(e.target.value)}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            sx={{ mb: 3 }}
          />
        </Box>

        {rider && (
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {rider.name}
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Rugnummer: {rider.number}
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Ploeg: {rider.team}
              </Typography>
              <Typography color="text.secondary">
                Nationaliteit: {rider.nationality}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App; 