import { Box, styled, Typography } from "@mui/material";

const Title = styled('span')(({ theme }) => ({
  position: 'relative',
  color: theme.palette.primary.main,
  transition: 'all 0.3s ease',

  ':before': {
    content: '"+++"',
    position: 'absolute',
    top: '-16px',
    right: '10px',
    fontSize: '17px',
    letterSpacing: '5px',
    transform: 'rotate(-6deg)',
    transformOrigin: 'center',
  },

  ':after': {
    content: '""',
    transition: 'all 0.3s ease',
    
    position: 'absolute',
    top: '-2px',
    bottom: '-7px',
    left: '-10px',
    right: '-10px',
    transform: 'rotate(-6deg)',

    border: '2px solid',
    borderColor: theme.palette.primary.main,
    borderRadius: '50%',
  },

  ':hover': {
    ':after': {
      transform: 'rotate(-3deg)',
    }
  }
}));

export default function PricingHeader() {
  return (
    <Box sx={{ width: '33%', textAlign: 'center' }}>
      <Typography variant="h1">Découvrez <Title>nos offres</Title></Typography>
      Trouvez le plan parfait pour votre entreprise parmi nos différentes options d&apos;abonnement mensuel, trimestriel, semestriel, annuel et biennal.
    </Box>
  );
}