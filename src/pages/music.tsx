import NowPlaying from "~/components/music/NowPlaying"
import TopTracks from "~/components/music/TopTracks"
import Layout from "~/components/ui/Layout"
import Title from '~/components/ui/typography/Title'
export default function MusicPage() {
    return (
        <Layout>
            <Title>Music</Title>

            <h2 className="text-2xl font-semibold mb-2 ">Currently listening to:</h2>
            <NowPlaying/>
            <h2 className="text-2xl font-semibold">My Top 10 recently:</h2>

            <TopTracks/>

        </Layout>
    )
}
