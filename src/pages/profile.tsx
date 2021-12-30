import Link from 'next/link'
import Layout from '~/components/ui/Layout'

const ProfilePage = ({}) => {
    return (
        <Layout>
            <div className="h-screen flex flex-col justify-center items-center relative">
                <h2 className="text-3xl my-4">Howdie, Explorer!</h2>
                <small className="mb-2">You've landed on a protected page. Please <Link href="/">log in</Link> to view the page's full content </small>
                <div>
                    <button className="border bg-gray-500 border-gray-600 text-white px-3 py-2 rounded w-full text-center transition duration-150 shadow-lg">Sign Out</button>
                </div>
            </div>
        </Layout>
    )
}

export default ProfilePage