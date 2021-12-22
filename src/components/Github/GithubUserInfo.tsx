import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';

import { IGithubUser } from '~/lib/types';
import { fetcher } from '~/lib/fetcher';

export default function GithubUserInfo(props:IGithubUser) {
    const {
        login,
        avatar_url,
        html_url,
        name,
        company,
        blog,
        location,
        email,
        bio,
        public_repos,
        followers,
        totalStarsAndForks: { stars, forks },
      } = props;
    return (
        <div>
            
        </div>
    )
}
