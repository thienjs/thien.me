import NowPlaying from "~/components/music/NowPlaying"
import TopTracks from "~/components/music/TopTracks"
import Layout from "~/components/ui/Layout"
import Title from '~/components/ui/typography/Title'
export default function MusicPage() {
    return (
        <Layout>
            <Title>Music</Title>

            <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-sm">Currently listening to:</p>
            <NowPlaying/>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-sm">My Top 10 recently:</p>

            <TopTracks/>

        </Layout>
    )
}
