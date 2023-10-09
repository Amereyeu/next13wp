import { ApolloProvider } from "@apollo/client/react";
import client from "../lib/apollo";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ApolloProvider client={client}>{children}</ApolloProvider>
        <Footer />
      </body>
    </html>
  );
}

