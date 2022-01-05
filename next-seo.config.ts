const title = 'Thien Tran'
const description = 'Full Stack Web Developer'

const SEO = {
  title,
  description,
  canonical: '',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://thien.me',
    title,
    description,
    images: [
      {
        url: '',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@thientsx',
    site: '@thienjs',
    cardType: 'summary_large_image',
  },
}

export default SEO
