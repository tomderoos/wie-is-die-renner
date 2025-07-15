// Trigger nieuwe build voor Github Pages
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
import { OpenInNew as OpenInNewIcon, Favorite as FavoriteIcon } from '@mui/icons-material';
import { riders } from './data/riders';
import { GB, NL, BE, FR, DE, ES, IT, DK, NO, SE, CH, AT, PL, CZ, SK, SI, HR, RS, UA, KZ, AQ, AU, NZ, US, CA, CO, EC, VE, ZA } from 'country-flag-icons/react/3x2';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e10600', // Giro roze
    },
    background: {
      default: '#FFF200', // Tour de France geel
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

const getFlagComponent = (country: string) => {
  const flagMap: { [key: string]: any } = {
    'GBR': GB,
    'NED': NL,
    'BEL': BE,
    'FRA': FR,
    'GER': DE,
    'ESP': ES,
    'ITA': IT,
    'DEN': DK,
    'NOR': NO,
    'SWE': SE,
    'SUI': CH,
    'AUT': AT,
    'POL': PL,
    'CZE': CZ,
    'SVK': SK,
    'SLO': SI,
    'CRO': HR,
    'SRB': RS,
    'UKR': UA,
    'KAZ': KZ,
    'ARG': AQ,
    'AUS': AU,
    'NZL': NZ,
    'USA': US,
    'CAN': CA,
    'COL': CO,
    'ECU': EC,
    'VEN': VE,
    'RSA': ZA
  };

  const FlagComponent = flagMap[country];
  return FlagComponent ? <FlagComponent style={{ width: '24px', height: '24px' }} /> : <Box sx={{ width: '24px', height: '24px' }} />;
};

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
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Container maxWidth="sm" sx={{ py: 4, flex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                mb: 1 
              }}
            >
              Wie is die renner?
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, fontWeight: 700 }}>
              Tour de France 2025
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
                style: { textAlign: 'center', fontWeight: 900 }
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
                  fontSize: { xs: '3rem', sm: '4rem', md: '10rem' },
                  fontFamily: '"Bebas Neue", sans-serif',
                  letterSpacing: '0.1em',
                  textAlign: 'center',
                  padding: '1rem',
                  height: '1.2em',
                  lineHeight: '1',
                  fontWeight: 900,
                  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                    '-webkit-appearance': 'none',
                    margin: 0
                  },
                  '&[type=number]': {
                    '-moz-appearance': 'textfield'
                  }
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
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', mr: 1, mb: 1 }}>
                    {getFlagComponent(rider.country)}
                    <Typography sx={{ ml: 1 }}>{rider.country}</Typography>
                  </Box>
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
        <Box 
          component="footer" 
          sx={{ 
            mt: 4, 
            textAlign: 'center',
            color: 'white',
            fontSize: '0.75rem',
            py: 2,
            background: 'black',
            width: '100%'
          }}
        >
          <Typography>
            Made with <FavoriteIcon sx={{ fontSize: '1rem', verticalAlign: 'middle', color: 'white' }} /> by{' '}
            <Link 
              href="http://www.tomderoos.nl" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ 
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Tom de Roos
            </Link>
            {' • '}
            <Link
              href="https://unsplash.com/photos/group-of-people-watching-cyclist-racing-cOfR4XmEzd8"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              background image via Unsplash
            </Link>
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App; 