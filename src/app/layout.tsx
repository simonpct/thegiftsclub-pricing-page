import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import "./globals.css";

import { Roboto } from 'next/font/google';
const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

import type { Metadata } from "next";
import { Avatar } from '@mui/material';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Tarifs - TheGiftsClub",
  description: "Trouvez le plan parfait pour votre entreprise parmi nos différentes options d'abonnement mensuel, trimestriel, semestriel, annuel et biennal.",
  icons: ['LogoOfficialTGC-V1-1.png']
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
          <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
            
            {/* MY AVATAR */}
            <Link href="https://github.com/simonpct">
              <Avatar src="https://avatars.githubusercontent.com/u/94762919?size=40" sx={{ position: 'absolute', bottom: '20px', right: '20px', boxShadow: '1px 1px 3px 0px #000000', transition: 'all 0.2s ease-in-out', ':hover': { transform: 'translate(-3px, -3px)' } }} />
            </Link>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
