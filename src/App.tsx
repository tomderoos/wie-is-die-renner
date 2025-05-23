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
  Chip,
  Link
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { riders } from './data/riders';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e10600', // Giro roze
    },
    background: {
      default: '#fec7d7', // Nieuwe achtergrondkleur
    },
  },
  typography: {
    fontFamily: '"Bebas Neue", sans-serif',
    h4: {
      fontSize: '2.5rem',
      letterSpacing: '0.05em',
    },
    h5: {
      fontSize: '1.8rem',
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            fontSize: '20rem',
            fontFamily: '"Bebas Neue", sans-serif',
            letterSpacing: '0.1em',
            textAlign: 'center',
            padding: '1rem',
            height: '1.2em',
            lineHeight: '1',
          },
          '& .MuiInputLabel-root': {
            fontSize: '1.2rem',
            fontFamily: '"Bebas Neue", sans-serif',
            letterSpacing: '0.05em',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontFamily: '"Bebas Neue", sans-serif',
          letterSpacing: '0.05em',
          height: '2rem',
        },
      },
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
            variant="standard"
            type="number"
            value={number}
            onChange={handleNumberChange}
            inputProps={{ 
              inputMode: 'numeric', 
              pattern: '[0-9]*',
              maxLength: 3,
              style: { textAlign: 'center' }
            }}
            sx={{ 
              mb: 3,
              '& .MuiInputBase-root': {
                backgroundColor: 'white',
                '&:before, &:after': {
                  display: 'none'
                }
              },
              '& .MuiInputBase-input': {
                color: 'black',
              },
            }}
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
              {rider.pcsUrl && (
                <Link 
                  href={rider.pcsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 0.5,
                    mt: 2,
                    color: 'primary.main',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Bekijk renner op Procyclingstats
                  <OpenInNewIcon fontSize="small" />
                </Link>
              )}
            </CardContent>
          </Card>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App; 