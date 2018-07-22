module.exports = class extends think.Mongoose {
  get schema() {
    return {
      name: String,
      desc: String,
      ratings: String,
      score: Number,
      release: String,
      cover: String,
      actors: [
        {
          type: think.Mongoose.Schema.Types.ObjectId,
          ref: 'actor'
        }
      ]
    };
  }
};
