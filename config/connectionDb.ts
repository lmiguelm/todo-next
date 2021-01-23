import mongoose from 'mongoose';

export default async function connectToDatabase() {

  // verificando se já existe uma conexão ativa com o banco.
  if(mongoose.connection.readyState >= 1) {
    return;
  }

  const url = `mongodb+srv://root:${process.env.MONGODB_PASSWORD}@cluster0.z8fug.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology : true, useCreateIndex: true});
  return mongoose;
}