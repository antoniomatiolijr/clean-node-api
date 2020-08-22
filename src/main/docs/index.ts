import paths from './paths'
import schemas from './schemas'
import components from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node APi',
    description: 'API para realizar enquetes',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://opensource.org/licenses/gpl-3.0.html'
  },
  servers: [
    {
      url: '/api'
    }
  ],
  tags: [
    {
      name: 'Login'
    },
    {
      name: 'Enquete'
    }
  ],
  paths,
  schemas,
  components
}
