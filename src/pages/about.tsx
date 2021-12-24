import About from '~/components/About'
import Layout from '~/components/ui/Layout'
export default function AboutPage() {
    return (
      <Layout>
        <h1 className="text-5xl font-bold py-4 text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-pink-500">
          About
        </h1>
        <p className="">This is where i gather my thoughts</p>
        <About />
      </Layout>
    )
}
