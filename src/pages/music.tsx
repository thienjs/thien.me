import NowPlaying from "~/components/music/NowPlaying"
import TopTracks from "~/components/music/TopTracks"
import Layout from "~/components/ui/Layout"
export default function MusicPage() {
    return (
        <Layout>
            <h1 className='text-5xl font-semibold py-2 mb-4 '>Music</h1>

            <h2 className="text-2xl font-semibold mb-3 ">Currently listening to:</h2>
            <NowPlaying/>
            <h2 className="text-2xl font-semibold">My Top 10 recently:</h2>

            <TopTracks/>

        </Layout>
    )
}
