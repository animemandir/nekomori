export const GRAPHQL_API = "https://graphql.anilist.co";

export const GET_ANIME_QUERY = `
query {
  Page(page: 1, perPage: 15) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media(season: SPRING,type: ANIME, seasonYear: 2021, sort: POPULARITY_DESC) {
      id
      status
      coverImage {
        large
        color
      }
      studios {
        edges {
          id
          isMain @include(if: true)
          node {
            name
          }
        }
      }
      source
      description
      nextAiringEpisode {
        id
        episode
        timeUntilAiring
      }
      title {
        english
        romaji
      }
      startDate {
        year
        month
        day
      }
      genres
    }
  }
}
`;
