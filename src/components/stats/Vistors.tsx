import { fetcher } from '~/lib/fetcher';
import useSWR from 'swr';
import StatsCard from 'components/stats/StatsCard'
export function Visitors() {
  const { data: liveVisitors } = useSWR<any>(
    '/api/statistics/visitors',
    fetcher
  );
  const link = 'https://github.com/thienjs'
  return (

    <StatsCard
    header="Current Visitors"
    link={link}
    stat={liveVisitors ? liveVisitors?.visitors : '--'}
    isCurrency={false}
  />
  );
}