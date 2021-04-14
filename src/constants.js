export const GRAPHQL_API = "https://graphql.anilist.co";

export default function getQuery(year, season, status) {
  switch (status) {
    case (status = null):
      return `query {
    Page(page: 1, perPage: 15) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(season: ${season},type: ANIME, seasonYear: ${year}, sort: POPULARITY_DESC) {
        id
        status
        episodes
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
  }`;
    case (status = "NOT_YET_RELEASED"):
      return `query {
      Page(page: 1, perPage: 30) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media(status:NOT_YET_RELEASED, sort: POPULARITY_DESC) {
          id
          status
          episodes
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
    }`;
    case (status = "RELEASING"):
      return `query {
        Page(page: 1, perPage: 30) {
          pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
          }
          media(status:RELEASING, type: ANIME, sort: POPULARITY_DESC) {
            id
            status
            episodes
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
      }`;
    default:
      return;
  }
}

export const REVIEW_QUERY = `query {
  Page(page: 1, perPage: 15) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    reviews(sort: CREATED_AT_DESC) {
      id
      mediaType
      mediaId
      summary
      user{
        name
      }
      rating
      ratingAmount
      score
      body(asHtml: true)
      media {
        id
        status
        episodes
        coverImage {
          large
          color
        }
        genres
        staff {
          edges {
            id
            node {
              id
              name {
                first
                middle
                last
                full
                native
              }
            }
          }
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
}

`;
