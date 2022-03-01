import axios from 'axios'
import { config } from '../utils/config'

export const fetchRepository = async () => {
  return await axios.get(config.github.repo.endpoint)
}

export const fetchUser = async () => {
  return await axios.get(config.github.user.endpoint)
}
