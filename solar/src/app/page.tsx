'use client'

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ChakraProvider } from '@chakra-ui/react';
import App from './app';
import { SessionProvider } from "next-auth/react";
import { nextauthOptions } from "../app/api/auth/[...nextauth]/nextauth-options";
import { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";



export default  function Home() {
 
  return (
 
      <Provider store={store}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Provider>
  
  )
}
