const title = 'Thien Tran'
const description = 'Full Stack Web Developer'

const SEO = {
  title: title,
  description: description,
  canonical: '',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://thien.me',
    title: title,
    description: description,
    images: [
      {
        url: 'https://thien.me/thien-logo.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@thien_io',
    site: '@thienjs',
    cardType: 'summary_large_image',
  },
}

export default SEO
