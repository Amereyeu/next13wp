import { ApolloWrapper } from "../lib/apollo-wrapper";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "./styles.scss";

export const metadata = {
  title: "Next13 demo",
  description: "next13 + scss",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <ApolloWrapper>{children}</ApolloWrapper>
        <Footer />
      </body>
    </html>
  );
}

