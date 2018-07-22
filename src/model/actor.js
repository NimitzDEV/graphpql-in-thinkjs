module.exports = class extends think.Mongoose {
  get schema() {
    return {
      name: String,
      desc: String,
      dob: String,
      photo: String,
      addr: String,
      movies: [
        {
          type: think.Mongoose.Schema.Types.ObjectId,
          ref: 'movie'
        }
      ]
    };
  }
};
