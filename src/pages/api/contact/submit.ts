import type { NextApiRequest, NextApiResponse } from 'next'
import {google} from "googleapis";


import service from "~/data/service-account.enc.js";
import useSWR from 'swr'
import axios from 'axios';

const fetchWithData = (url, encrypt) => axios.post(url, { data: encrypt }).then(res => res.data);

type SheetForm = {
    name: string
    email: string
    phone: string
    message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' })
  }

  const body = req.body as SheetForm

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    })

    const sheets = google.sheets({
      auth,
      version: 'v4',
    })

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1:D1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[body.name, body.email, body.phone, body.message]],
      },
    })

    return res.status(201).json({
      data: response.data,
    })
  } catch (e) {
    return res.status(e.code).send({ message: e.message })
  }
}
