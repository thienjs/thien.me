import service from '~/data/service-account.enc.js'
import useSWR from 'swr'
import axios from 'axios'
import { datacatalog } from 'googleapis/build/src/apis/datacatalog'

const fetchWithData = (url, encrypt) =>
  axios.post(url, { data: encrypt }).then((res) => res.data)

export default function GoogleSheets() {
  const { data, error } = useSWR(
    ['/api/decrypt', service.encrypted],
    fetchWithData
  )

  return data.private_key
}
