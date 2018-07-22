const resolverMap = {
  Query: {
    movie(prev, args, context) {
      const movie = new context.db.Movie();
      return movie.getMovie(args.name);
    },
    actor(prev, args, context) {
      const actor = new context.db.Actor();
      return actor.getActor(args.name);
    }
  },
  Actor: {
    movies(prev, args, context) {
      const movie = new context.db.Movie();
      return Promise.all(
        prev.movies.map(id => {
          return movie.getMovieById(id);
        })
      );
    }
  },
  Movie: {
    actors(prev, args, context) {
      const actor = new context.db.Actor();
      return Promise.all(
        prev.actors.map(id => {
          return actor.getActorById(id);
        })
      );
    }
  }
};

module.exports = resolverMap;
