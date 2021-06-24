const mongoose = require('mongoose');

exports.connect = async (app) => {
  const url = 'mongodb://localhost:27017/redux-saga';
  const PORT = 5000;
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  await app.listen(
    PORT,
    () => console.log(`Server has been started on port ${PORT}`),
  );
};
