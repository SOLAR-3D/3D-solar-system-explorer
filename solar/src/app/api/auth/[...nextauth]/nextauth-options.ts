import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import  connectDB  from "../../../lib/db";
import User from "@/app/lib/models/user.model";
import bcrypt from "bcrypt";

export const nextauthOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin", // app/signin
    error: "/error", // app/error
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true }
      },
      async authorize(credentials) {
         console.log(credentials)
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        console.log("email: ", credentials?.email);
        const email = credentials?.email;
        const password = credentials?.password;
        return getUserByEmail(email, password);  
      }
    })
  ],
  // callbacks: {
  //   async signIn({ account, profile }) {
  //     // console.log({account, profile})
  //     if (account?.type === "oauth" && profile) {
  //       return await signInWithOauth({account, profile})
  //     }
  //     return true
  //   },
  //   async jwt({ token, trigger, session }) {
  //     // console.log({token})
  //     // console.log({trigger, session})
  //     if (trigger === "update") {
  //       token.name = session.name
  //     } else {
  //       if (token.email) {
  //         const user = await getUserByEmail({email: token.email})
  //         // console.log({user})
  //         token.name = user.name
  //         token._id = user._id
  //         token.role = user.role
  //         token.provider = user.provider
  //       }
  //     }
  //     return token
  //   },
  //   async session({ session, token }) {
  //     // console.log({session, token})
  //     return {
  //       ...session,
  //       user: {
  //         ...session.user,
  //         name: token.name,
  //         _id: token._id,
  //         role: token.role,
  //         provider: token.provider
  //       }
  //     }
  //   }
  // }
}

 async function getUserByEmail(email : string, password : string) {
  connectDB();
  const user = await User.findOne({ email });
  console.log("user: ", user);
  if (!user) {
    return null;
  }
  // write regular expression th sanitize email
  const sanitizedPassword = password.replace(/[$/(){}]/g, '');
  const passwordsMatch = await bcrypt.compare(sanitizedPassword, user.password);
  if (!passwordsMatch) {
    console.log("Passwords do not match");
    return null;
  }
  return user;
}
