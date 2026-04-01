// env.ts
import * as dotenv from 'dotenv';
dotenv.config();

export const env = {
  LOGIN_USER: process.env.LOGIN_USER || '',
  LOGIN_PASS: process.env.LOGIN_PASS || '',
};

if (!env.LOGIN_USER || !env.LOGIN_PASS) {
  throw new Error('Missing LOGIN_USER or LOGIN_PASS environment variables');
}