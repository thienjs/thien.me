import service from "~/data/service-account.enc.js";
import useSWR from 'swr'
import axios from 'axios';

const fetchWithData = (url, encrypt) => axios.post(url, { data: encrypt }).then(res => res.data);

export default function Home() {
  const { data, error } = useSWR(['/api/decrypt', service.encrypted], fetchWithData);
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
      <h2>Saving large environment variables</h2>
      <h3>Auth-uri: {data.auth_uri}</h3>
    </div>
  )
}