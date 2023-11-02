// import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "type your username",
        },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials, req) {
        const user = {
          id: "1",
          username: process.env.NEXT_PROTECTED_USERNAME,
          email: process.env.NEXT_PROTECTED_SECRET,
        };

        if (
          credentials?.username === process.env.NEXT_PROTECTED_USERNAME &&
          credentials.password === process.env.NEXT_PROTECTED_SECRET
        ) {
          return user;
        } else {
          return null;
        }
        // if (
        //   credentials?.username === process.env.NEXT_PROTECTED_USERNAME &&
        //   credentials.password === process.env.NEXT_PROTECTED_SECRET
        // ) {
        //   return {
        //     id: "1",
        //     email: "test@test.com",
        //     user: "test",
        //   };
        // }

        // return null;
      },
    }),
  ],
};

// import GitHubProvider from "next-auth/providers/github";

// export const authOptions = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID ?? "",
//       clientSecret: process.env.GITHUB_SECRET ?? "",
//     }),
//   ],
// };

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

