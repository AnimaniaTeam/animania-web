import { AnimeData } from '../@types/AnimeData'

export function useAnimeData() {
  const sampleAnime: AnimeData = {
    id: 1,
    title: 'One Piece',
    image_url: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
    genres: ['Aventura', 'Fantasia', 'Ação'],
    whereToWatch: 'Crunchyroll',
    numberOfEpisodes: 1062,
    releaseDate: '20/10/1999',
    numberOfSeasons: 13,
    likes: 1000000,
    dislikes: 100,
  }

  const data = {
    sunday: [
      sampleAnime,
      sampleAnime,
      sampleAnime,
      sampleAnime,
      sampleAnime,
      sampleAnime,
      sampleAnime,
      sampleAnime,
    ],
    monday: [sampleAnime, sampleAnime],
    tuesday: [sampleAnime, sampleAnime, sampleAnime, sampleAnime],
    wednesday: [
      sampleAnime,
      sampleAnime,
      sampleAnime,
      sampleAnime,
      sampleAnime,
      sampleAnime,
    ],
    thursday: [sampleAnime, sampleAnime],
    friday: [sampleAnime, sampleAnime, sampleAnime, sampleAnime, sampleAnime],
    saturday: [sampleAnime, sampleAnime, sampleAnime],
  }

  return data
}
