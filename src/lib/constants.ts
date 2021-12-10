export const navigation = {
    categories: [
      {
        id: 'menu',
        name: 'Menu',
        featured: [
          {
            name: 'React Review',
            href: '#',
            imageSrc: 'https://unsplash.com/photos/Agx5_TLsIf4',
            imageAlt: 'React Cheatsheet',
          },
          {
            name: 'Javascript Alogorithm',
            href: '#',
            imageSrc: 'https://unsplash.com/photos/XEB8y0nRRP4',
            imageAlt: 'Javascript Data Structures',
          },
        ],
        sections: [
          {
            id: 'blog',
            name: 'Blog',
            items: [
              { name: 'Article 1', href: '#' },
              { name: 'Article 2', href: '#' },
              { name: 'Article 3', href: '#' },
            ],
          },
          {
            id: 'tags',
            name: 'Tags',
            items: [
              { name: 'css', href: '#' },
              { name: 'react', href: '#' },
              { name: 'nextjs', href: '#' },
              { name: 'jamstack', href: '#' },
              { name: 'tailwindcss', href: '#' },
            ],
          },
          {
            id: 'other',
            name: 'Other',
            items: [
              { name: 'Loki', href: '#' },
              { name: 'Tennis', href: '#' },
              { name: 'Watches', href: '#' },
              { name: 'Tech Setup', href: '#' },
            ],
          },
        ],
      },
      {
        id: 'projects',
        name: 'Projects',
        featured: [
          {
            name: 'Recent work',
            href: '#',
            imageSrc: 'https://unsplash.com/photos/xt9tb6oa42o',
            imageAlt: 'project1',
          },
          {
            name: 'Current work',
            href: '#',
            imageSrc: 'https://unsplash.com/photos/95YRwf6CNw8',
            imageAlt:
              'project 2',
          },
        ],
        sections: [
          {
            id: 'Games',
            name: 'games',
            items: [
              { name: 'pong', href: '#' },
              { name: 'tic tac toe', href: '#' },
              { name: 'react', href: '#' },
            ],
          },
          {
            id: 'extra',
            name: 'Extras',
            items: [
              { name: 'about', href: '/about' },
              { name: 'art', href: '#' },
              { name: 'todo', href: '#' },
              { name: 'clock', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
          {
            id: 'Socials',
            name: 'Socials',
            items: [
              { name: 'github', href: '#' },
              { name: 'linkedin', href: '#' },
              { name: 'twitter', href: '#' },
              { name: 'discord', href: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Guestbook', href: '#' },
      { name: 'Dashboard', href: '#' },
    ],
  }




// show customised outline when an element has focus (but only if the user is
// using the keyboard)
export const FOCUS_VISIBLE_OUTLINE = `focus:text-sky-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 focus-visible:ring-opacity-60 focus-visible:outline-none focus:outline-none  rounded`

export const baseUrl = "https://thien.me"