import NowPlaying from "~/components/music/NowPlaying"
import TopTracks from "~/components/music/TopTracks"
import Layout from "~/components/ui/Layout"
import { getNowPlaying } from "~/lib/spotify"
export default function MusicPage() {
    return (
        <Layout>
            <NowPlaying/>
            <TopTracks/>

        </Layout>
    )
}
