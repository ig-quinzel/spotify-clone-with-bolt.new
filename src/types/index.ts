export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  image: string;
  isExplicit?: boolean;
}

export interface Playlist {
  id: string;
  name: string;
  description?: string;
  image: string;
  tracks: Track[];
  isLiked?: boolean;
}

export interface Album {
  id: string;
  name: string;
  artist: string;
  image: string;
  year: number;
  tracks: Track[];
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  followers: number;
  isFollowed?: boolean;
}

export interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isShuffle: boolean;
  isRepeat: boolean;
}