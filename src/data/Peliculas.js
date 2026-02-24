// src/data/Peliculas.js

// Películas que estaban en cartelera AHORA serán las DESTACADAS (en el home)
export const PELICULAS_DESTACADAS = [
  {
    id: 1,
    title: "La ventajas de ser invisible",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/0bf85f45dd8a43abe54307d0c9b0668c075c044b958407b4a95683949adc3860.jpg",
    genre: "Drama",
    duration: "2h 45min",
    rating: "8.2",
    destacada: true,
  },
  {
    id: 2,
    title: "El diablo viste a la moda",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2ZkNDEwYzgtMjk5OS00ODYwLTlhN2EtOGM4Y2ViNGI1NjhlXkEyXkFqcGc@._V1_.jpg",
    genre: "Drama",
    duration: "1h 40min",
    rating: "7.5",
    destacada: true,
  },
  {
    id: 3,
    title: "Imagine Me & You",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTViMGNiNDItMDFiMC00YzYyLThjYTgtNDY3Mzg0ZDE4ZmU1XkEyXkFqcGc@._V1_.jpg",
    genre: "Romántica",
    duration: "1h 50min",
    rating: "7.8",
    destacada: true,
  },
  {
    id: 4,
    title: "Ready Player One",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzVkMTgzODQtMWIwZC00NzE4LTgzZjYtMzAwM2I5OGZhNjE4XkEyXkFqcGc@._V1_.jpg",
    genre: "Acción",
    duration: "2h 28min",
    rating: "7.4",
    destacada: true,
  },
];

// Nuevas películas para la cartelera (las que NO aparecerán en el home)
export const PELICULAS_CARTELERA = [
  {
    id: 5,
    title: "Oppenheimer",
    image: "https://pics.filmaffinity.com/Oppenheimer-487312908-large.jpg",
    genre: "Drama",
    duration: "3h",
    rating: "8.5",
    destacada: false,
  },
  {
    id: 6,
    title: "Barbie",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjI3NDU0ZGYtYjA2YS00Y2RlLTgwZDAtYTE2YTM5ZjE1M2JlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genre: "Comedia",
    duration: "1h 54min",
    rating: "7.0",
    destacada: false,
  },
  {
    id: 7,
    title: "Dune: Parte Dos",
    image: "https://pics.filmaffinity.com/Dune_Parte_Dos-802143593-large.jpg",
    genre: "Ciencia Ficción",
    duration: "2h 46min",
    rating: "8.7",
    destacada: false,
  },
  {
    id: 8,
    title: "Kung Fu Panda 4",
    image:
      "https://play-lh.googleusercontent.com/mLxdJWJu6-48Jh6bv4yuo2hChH6TmRbBTsYYwgu_cYdxGHa19HfaF-q6Ri2SFnr6OaG3oQarJjv3Y1ccEQoK",
    genre: "Animación",
    duration: "1h 34min",
    rating: "6.7",
    destacada: false,
  },
  {
    id: 9,
    title: "Godzilla y Kong: El nuevo imperio",
    image:
      "https://play-lh.googleusercontent.com/W6HjfNo9I4UF4hTK2AE5ALRAUnR4mSOMsZAKb6WDiavnlSLHi6pDqmvL1hcKnPg9KamImKPIpb4DFq9jYA",
    genre: "Acción",
    duration: "1h 55min",
    rating: "6.5",
    destacada: false,
  },
  {
    id: 10,
    title: "Intensamente 2",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/image003_f84f5388.jpeg?region=0,0,901,1330",
    genre: "Animación",
    duration: "1h 36min",
    rating: "8.4",
    destacada: false,
  },
];

export const PELICULAS = [...PELICULAS_DESTACADAS, ...PELICULAS_CARTELERA];

export const FILTROS = [
  "Todos",
  "Drama",
  "Romántica",
  "Acción",
  "Comedia",
  "Ciencia Ficción",
  "Animación",
  "Aventura",
];
