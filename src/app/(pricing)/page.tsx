"use client";

import { Box, Grid } from "@mui/material";
import { useState } from "react";
import BillingCycleSelection from "./components/BillingCycleSelection";
import PricingCard from "./components/PricingCard";
import PricingHeader from "./components/PricingHeader";

export default function Home() {

  const [billingCycle, setBillingCycle] = useState("1");

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '50px 20px' }}>

      {/* PRICING HEADER */}
      <PricingHeader />

      {/* BILLING CYCLE SELECTION */}
      <BillingCycleSelection billingCycle={billingCycle} setBillingCycle={setBillingCycle} />

      {/* PRICING CARDS */}
      <Grid container spacing={3} mt={6} maxWidth='1300px'>

        {/* STANDARD PRICING */}
        <Grid item xs={4} margin="auto">
          <PricingCard
            title="Standard"
            price={169}
            features={[
              { label: 'Accès aux jeux en version non personnalisés', icon: 'check' },
              { label: '3 actions disponibles', icon: 'check' },
              { label: "Sélection de l'ordre de priorité des actions", icon: 'check' },
              { label: 'Sélection des cadeaux', icon: 'check' },
              { label: 'Choix limité de pictogrammes pour vos jeux', icon: 'check' },
              { label: 'Accès au tableau de bord pour suivre vos activités', icon: 'check' },
            ]}
          />
        </Grid>

        {/* PREMIUM PRICING */}
        <Grid item xs={4}>
          <PricingCard
            title="Premium"
            price={199}
            isPrimary={true}
            features={[
              { label: '3 actions disponibles', icon: 'check' },
              { label: "Sélection de l'ordre de priorité des actions", icon: 'check' },
              { label: 'Sélection des cadeaux', icon: 'check' },
              { label: 'Accès au tableau de bord pour suivre vos activités', icon: 'check' },
              { label: 'Accès aux jeux en version personnalisés', icon: 'plus' },
              { label: 'Intégration de vos couleurs dans les jeux', icon: 'plus' },
              { label: 'Intégration de votre logo dans les jeux', icon: 'plus' },
              { label: 'Intégration de vos pictogrammes dans les jeux', icon: 'plus' },
            ]}
          />
        </Grid>

        {/* QUOTE PRICING */}
        <Grid item xs={4} margin="auto">
          <PricingCard
            title="Sur Devis"
            quote={true}
            features={[
              { label: 'Vous avez plusieurs établissements ?', icon: 'arrow' },
              { label: "Vous souhaitez un jeu sur mesure à l'effigie de votre marque ?", icon: 'arrow' },
              { label: 'Vous souhaitez une intégration caisse ?', icon: 'arrow' },
            ]}
            description="Un devis sur mesure est nécessaire pour répondre avec précision aux besoins spécifiques de votre réseau d'établissements et assurer une intégration harmonieuse."
          />
        </Grid>

      </Grid>
    </Box>
  );

}
