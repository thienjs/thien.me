import { ReactNode } from 'react'
import { config } from '../utils/config'

export interface Presence {
  active_on_discord_mobile: boolean
  active_on_discord_desktop: boolean
  listening_to_spotify: boolean
  spotify: Spotify
  discord_user: DiscordUser
  discord_status: string
  activities: Activity[]
  kv: Kv
}
export interface Kv {
  location: string
  instagram: string
  discord: string
}
export interface Activity {
  type: number
  timestamps: Timestamps
  sync_id?: string
  state: string
  session_id?: string
  party?: Party
  name: string
  id: string
  flags?: number
  details: string
  created_at: number
  assets: Assets
  application_id?: number
}

export interface Assets {
  large_text: string
  large_image: string
  small_text?: string
  small_image?: string
}

export interface Party {
  id: string
}

export interface Timestamps {
  start: number
  end?: number
}

export interface DiscordUser {
  username: string
  public_flags: number
  id: string
  discriminator: string
  avatar: string
}

export interface Spotify {
  track_id: string
  timestamps: Timestamps
  song: string
  artist: string
  album_art_url: string
  album: string
}
export const discordId = config.game.discordId

export type Repository = {
  list: number
  id: number
  name: string
  description: string
  svn_url: string
  stargazers_count: number
  watchers_count: number
  forks_count: number
  language: string
  default_branch: string
}

export type Items = {
  items: Repository[]
}

export type IMetaProps = {
  title: string
  description: string
  canonical?: string
}

export type User = {
  avatar_url: string
  url: string
  html_url: string
  login: string
  location: string
}

export type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

export type Song = {
  songUrl: string
  artist: string
  title: string
  ranking: number
  album: string
  albumArtUrl: string
}

export type TopTracks = {
  tracks: Song[]
}

export type Streamer = {
  _id: string
  login: string
  display_name: string
  type: string
  broadcaster_type: string
  description: string
  profile_image_url: string
  offline_image_url: string
  view_count: number
  followers: number

  created_at: string
}

export type Streams = {
  streams: Streamer[]
}

export interface IAnimations {
  title?: string
  editLink: string
  playgroundLink?: string
  source: JSX.Element
  animation?: string
}

export interface Todo {
  id: string
  created: string
  text: string
  completed: boolean
}

export enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

export type FormState = {
  state: Form
  message?: string
}
export type ProjectCard = {
  slug: string
  title: string
  publishedAt: string
  lastUpdated?: string
  description: string
  category?: string
  techs: string
  banner: string
  link?: string
  github?: string
  youtube?: string
}

export interface Results {
  accuracy: number;
  cpm: number;
  wpm: number;
  error: number;
}

export interface AccuracyMetrics {
  correctChars: number;
  incorrectChars: number;
  accuracy: number;
}

export interface HistoryType {
  wordHistory: string;
  typedHistory: string;
}

export interface Theme {
  name: string;
  background: {
    primary: string;
    secondary: string;
  };
  text: {
    primary: string;
    secondary: string;
    title: string;
    accent: string;
  };
}
