import { ThemeProvider } from "@/context/ThemeContext";
import { getServerSession } from "next-auth";
import { ApolloWrapper } from "../lib/apollo-wrapper";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation/Navigation";
import SecondaryNavigation from "./components/Navigation/SecondaryNavigation";
import SessionProvider from "./providers/sessionProvider";
import "./styles.scss";

export default async function RootLayout({ children }) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navigation />
          <SessionProvider session={session}>
            <ApolloWrapper>{children}</ApolloWrapper>
          </SessionProvider>
          <Footer />
          <SecondaryNavigation />
        </ThemeProvider>
      </body>
    </html>
  );
}

