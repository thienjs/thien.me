/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server';
import type { NextApiRequest } from 'next';
import { jsonResponse } from '~/lib/utils';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextApiRequest) {
  if (req.method === 'POST') {
    const session = await getToken({
      req,
      secret: process.env.NEXT_AUTH_SECRET,
      secureCookie:
        process.env.NEXTAUTH_URL?.startsWith('https://') ??
        !!process.env.VERCEL_URL
    });

    return session
      ? NextResponse.next()
      : jsonResponse(403, { success: false, message: 'Unauthorized' });
  }
}