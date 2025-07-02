import { Track, Playlist, Album, Artist } from '../types';

export const dummyTracks: Track[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:20',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '2',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    album: 'Fine Line',
    duration: '2:54',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '3',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: '3:23',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '4',
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    duration: '2:58',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '5',
    title: 'Stay',
    artist: 'The Kid LAROI & Justin Bieber',
    album: 'F*CK LOVE 3: OVER YOU',
    duration: '2:21',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '6',
    title: 'Industry Baby',
    artist: 'Lil Nas X & Jack Harlow',
    album: 'MONTERO',
    duration: '3:32',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export const dummyPlaylists: Playlist[] = [
  {
    id: '1',
    name: 'Today\'s Top Hits',
    description: 'The biggest hits right now',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
    tracks: dummyTracks.slice(0, 3)
  },
  {
    id: '2',
    name: 'Chill Vibes',
    description: 'Relax and unwind with these chill tracks',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300',
    tracks: dummyTracks.slice(2, 5)
  },
  {
    id: '3',
    name: 'Workout Mix',
    description: 'High energy tracks for your workout',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
    tracks: dummyTracks.slice(1, 4)
  },
  {
    id: '4',
    name: 'Party Playlist',
    description: 'Get the party started',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300',
    tracks: dummyTracks.slice(3, 6)
  },
  {
    id: '5',
    name: 'Focus Flow',
    description: 'Music to help you concentrate',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
    tracks: dummyTracks.slice(0, 2)
  },
  {
    id: '6',
    name: 'Road Trip',
    description: 'Perfect songs for your next adventure',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300',
    tracks: dummyTracks.slice(4, 6)
  }
];

export const quickAccessPlaylists = dummyPlaylists.slice(0, 6);

export const trendingAlbums: Album[] = [
  {
    id: '1',
    name: 'After Hours',
    artist: 'The Weeknd',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2020,
    tracks: [dummyTracks[0]]
  },
  {
    id: '2',
    name: 'Future Nostalgia',
    artist: 'Dua Lipa',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2020,
    tracks: [dummyTracks[2]]
  },
  {
    id: '3',
    name: 'SOUR',
    artist: 'Olivia Rodrigo',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2021,
    tracks: [dummyTracks[3]]
  },
  {
    id: '4',
    name: 'Fine Line',
    artist: 'Harry Styles',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2019,
    tracks: [dummyTracks[1]]
  }
];

export const featuredArtists: Artist[] = [
  {
    id: '1',
    name: 'The Weeknd',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
    followers: 85000000
  },
  {
    id: '2',
    name: 'Dua Lipa',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300',
    followers: 75000000
  },
  {
    id: '3',
    name: 'Harry Styles',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
    followers: 65000000
  },
  {
    id: '4',
    name: 'Olivia Rodrigo',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300',
    followers: 45000000
  }
];