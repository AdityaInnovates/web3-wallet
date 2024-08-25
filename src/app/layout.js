import "./globals.css";
import { CoinFlipProvider } from "@/context/CoinFlip";
export const metadata = {
  title: "Web3 wallet",
  description: "Web3 wallet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Alegreya+Sans&family=Barlow:ital,wght@1,600&family=Berkshire+Swash&family=Dosis&family=Exo+2:wght@300&family=Josefin+Sans&family=Kanit&family=Lato&family=Poppins:wght@300&family=Roboto+Condensed:wght@300&family=Rubik&family=Staatliches&family=Ubuntu&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
      </head>
      <body>
        <CoinFlipProvider>{children}</CoinFlipProvider>
      </body>
    </html>
  );
}
