const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

async function connectDB() {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error('❌ A variável MONGO_URI não está definida no .env');
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('✅ Conectado ao MongoDB Atlas');
  } catch (err) {
    console.error('❌ Erro ao conectar no MongoDB:', err);
    process.exit(1);
  }
}

module.exports = connectDB;
