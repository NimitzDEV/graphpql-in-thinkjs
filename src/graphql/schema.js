const types = `
type Movie {
  name: String!
  desc: String!
  ratings: String!
  score: Float!
  cover: String!
  actors: [Actor]
}

type Actor {
  name: String!
  desc: String!
  dob: String!
  photo: String!
  movies: [Movie]
}

type Query {
  movie(name: String!): Movie
  actor(name: String!): [Actor]
}
`;

module.exports = [types];
