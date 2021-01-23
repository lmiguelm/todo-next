import mongoose from 'mongoose';

export default async function connectToDatabase() {

  // verificando se já existe uma conexão ativa com o banco.
  if(mongoose.connection.readyState >= 1) {
    return;
  }
  
  mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology : true, useCreateIndex: true});
  return mongoose;
}