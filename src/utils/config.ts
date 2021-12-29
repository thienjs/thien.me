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
    discordId: '925893331291086880',
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
