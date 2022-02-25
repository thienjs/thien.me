import { age } from './time'

export const config = {
  github: {
    user: {
      endpoint: 'https://api.github.com/users/thienjs',
    },
    repo: {
      endpoint: 'https://api.github.com/users/thienjs/repos',
    },
  },
  game: {
    discordId: '925868267690672208',
    title: {
      hearthstone: 'Hearthstone',
    },
  },
  socket: {
    type: {
      init: 'INIT_STATE',
      update: 'PRESENCE_UPDATE',
    },
  },
}
const dev = process.env.NODE_ENV !== 'production'
export const basePath = dev
  ? 'http://localhost:3000'
  : process.env.PRODUCTION_URL
