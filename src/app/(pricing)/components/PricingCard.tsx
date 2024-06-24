import { Box, Button, createSvgIcon, Typography, useTheme } from "@mui/material";

interface PricingCardProps {
  title: string;
  price?: number;
  features: {
    label: string;
    icon: 'check' | 'plus' | 'arrow'
  }[];
  isPrimary?: boolean;
  quote?: boolean;
  description?: string;
}

export default function PricingCard({ title, price, features, isPrimary, quote, description }: PricingCardProps) {
  const theme = useTheme();
  return (
    <Box sx={{
      backgroundColor: isPrimary ? '#f0f3ff' : 'white',
      border: '2px solid',
      padding: '40px 20px',
      borderRadius: '7px',
      borderColor: isPrimary ? theme.palette.primary.main : '#e1e1e2',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      height: isPrimary ? '100%' : '90%',
      position: 'relative',
      color: isPrimary ? theme.palette.primary.main : 'black',
      fontSize: '14px'
    }}>
      {isPrimary && <BookmarkIcon sx={{ fontSize: "60px", position: 'absolute', top: '-23px', right: '8px' }} color="primary" />}
      <Typography variant="h2">{title}</Typography>
      {price && <Typography variant="h3" style={{ fontSize: isPrimary ? '40px' : '30px' }}>{price}€</Typography>}
      {quote && <BuildingsIcon sx={{ fontSize: "60px" }} />}
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '13px', alignSelf: 'start', color: 'black' }}>
        {features.map(({ label, icon }) => {
          return (<li key={label} style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            {icon === 'check' && <CheckIcon />}
            {icon === 'plus' && <PlusIcon color="secondary" />}
            {icon === 'arrow' && <ArrowIcon />}
            {label}
          </li>)
        })}
      </ul>
      {description && <p>{description}</p>}
      <Button sx={{
        fontWeight: 'bold',
        fontSize: '17px',
        width: '60%',
        color: isPrimary ? 'white' : 'black',
        backgroundColor: isPrimary ? theme.palette.secondary.main : 'white',
        textTransform: 'none',
        border: '2px solid #5500a4',
        boxShadow: '6px 4px 0px 0px #5500a4',
      }}>{quote ? 'Demander un Devis' : 'Je sélectionne cette offre'}</Button>
    </Box>
  );

}

// https://www.iconbolt.com/iconsets/phosphor-regular/plus-circle
const PlusIcon = createSvgIcon(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16" /><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="128" y1="88" x2="128" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>, 'Plus');

// https://www.iconbolt.com/iconsets/phosphor-regular/check
const CheckIcon = createSvgIcon(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><polyline points="40 144 96 200 224 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>, 'Check');

// https://www.iconbolt.com/iconsets/phosphor-regular/arrow-circle
const ArrowIcon = createSvgIcon(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>, 'Arrow');

// https://www.iconbolt.com/iconsets/phosphor-bold/buildings
const BuildingsIcon = createSvgIcon(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M160,88h48a8,8,0,0,1,8,8V216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" /><line x1="16" y1="216" x2="240" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" /><line x1="120" y1="112" x2="120" y2="124" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" /><line x1="80" y1="112" x2="80" y2="124" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" /><line x1="80" y1="164" x2="80" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" /><line x1="120" y1="164" x2="120" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" /><path d="M40,216V80.55a8,8,0,0,1,4.61-7.25l104-48.54A8,8,0,0,1,160,32V216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" /></svg>, 'Buildings');

// https://www.iconbolt.com/iconsets/phosphor-regular/bookmark-simple
const BookmarkIcon = createSvgIcon(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Z" fill="currentColor" /></svg>, 'Bookmark');