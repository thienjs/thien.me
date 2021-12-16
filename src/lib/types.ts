export type Views = {
  total: number;
};

  export type Song = {
    songUrl: string;
    artist: string;
    title: string;
  };
  
  export type NowPlayingSong = {
    album: string;
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    songUrl: string;
    title: string;
  };
  
  export type TopTracks = {
    tracks: Song[];
  };

  
  export type GitHub = {
    stars: number;
  };
  
  export type Article = {
    title: string;
    tags?: string[];
    coverImage: string;
    summary: string;
    publishedDate?: any;
    lastUpdatedDate?: any;
  };
  export type Snippet = {
    title: string;
    tags?: string[];
    coverImage: string;
    summary: string;
    publishedDate?: any;
    lastUpdatedDate?: any;
  };
  
  export type Language =
  | 'markup'
  | 'bash'
  | 'clike'
  | 'c'
  | 'cpp'
  | 'css'
  | 'javascript'
  | 'jsx'
  | 'coffeescript'
  | 'actionscript'
  | 'css-extr'
  | 'diff'
  | 'git'
  | 'go'
  | 'graphql'
  | 'handlebars'
  | 'json'
  | 'less'
  | 'makefile'
  | 'markdown'
  | 'objectivec'
  | 'ocaml'
  | 'python'
  | 'reason'
  | 'sass'
  | 'scss'
  | 'sql'
  | 'stylus'
  | 'tsx'
  | 'typescript'
  | 'wasm'
  | 'yaml';


