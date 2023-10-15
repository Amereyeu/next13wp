import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password" },
      },
      authorize(credentials, req) {
        if (
          credentials?.email === "test@test.com" &&
          credentials.password === "test"
        ) {
          return {
            id: "1",
            email: "test@test.com",
          };
        }

        return null;
      },
    }),
  ],
};

