import NextAuth from 'next-auth';
import { IUser } from '../app/utils/types';

declare module 'next-auth' {
  interface Session {
    user: IUser;
  }
}