import { Favorite, Song } from '../utils/types'

export const mockSong = (options: Partial<Song> = {}): Song => ({
  id: '6153ee081aaf5ad29d232672',
  title: 'Mock song name',
  artist: 'Mock artist name',
  images:
    'https://d3mzlbmn9ukddk.cloudfront.net/web-assignment/artists/images/70b75daa-eb02-4dd8-8763-116dd88cda7f.png',
  level: 15,
  search: 'Aloe Blacc I Need A Dollar',
  ...options,
})

export const mockFavorite = (options: Partial<Favorite> = {}): Favorite => ({
  songId: '5b8e4745b3984c68ed819287',
  id: 'SdzwMem',
  ...options,
})
