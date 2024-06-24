import { styled, ToggleButton, ToggleButtonGroup } from "@mui/material";

const months = [
  { value: 1, label: '1 Mois', discount: 0 },
  { value: 2, label: '3 Mois', discount: 20 },
  { value: 6, label: '6 Mois', discount: 30 },
  { value: 12, label: '12 Mois', discount: 40 },
  { value: 24, label: '24 Mois', discount: 50 },
];

export default function BillingCycleSelection({ billingCycle, setBillingCycle }: { billingCycle: string, setBillingCycle: (billingCycle: string) => void }) {

  const MonthButton = styled(ToggleButton)(({ theme }) => ({
    border: 'none',
    width: '200px',
    fontSize: '20px',
    textTransform: 'none',
    fontWeight: 'bold',
    opacity: 0.5,
    color: theme.palette.primary.main,
    '&.Mui-selected': {
      color: theme.palette.primary.main,
      opacity: 1,
      backgroundColor: 'transparent',
      borderLeft: 'none',
      borderBottom: 'solid 8px',
      marginBottom: '-3px',
      borderColor: theme.palette.primary.main,
    },
    ':after': {
      content: " '-' attr(data-discount) '% / mois'",
      position: 'absolute',
      top: '70px',
      right: '10px',
      left: '10px',
      fontSize: '13px',
      color: '#939393',
      fontWeight: '400',
    }
  }));

  return (
    <ToggleButtonGroup
      value={billingCycle}
      exclusive
      onChange={(event, value) => setBillingCycle(value)}
    >
      {months.map(({ value, label, discount }) => (
        <MonthButton key={value} value={value.toString()} aria-label={label} data-discount={discount}>
          {label}
        </MonthButton>
      ))}
    </ToggleButtonGroup>
  )
};