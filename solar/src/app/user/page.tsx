
// pages/userinfo.js

import { getSession } from 'next-auth/react';
import IUser from '../utils/IUser'; 
 import { nextauthOptions } from "../api/auth/[...nextauth]/nextauth-options";
 import { NextAuthOptions } from "next-auth";
 import { getServerSession } from "next-auth";
import UserInfo from '../../components/UserInfo';
//import { SessionWrapper } from '../SessionWrapper';
export default async function page(user: IUser) {
  const session = await getServerSession(nextauthOptions);

  return (
    
    <>
    
    {session ? (
      <UserInfo user={session?.user}/>
    ) : (
      <h1 className="text-5xl">You Shall Not Pass!</h1>
    )}
    
  </>
    
  );
}
