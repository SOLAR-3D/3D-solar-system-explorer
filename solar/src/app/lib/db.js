import mongoose from 'mongoose';

async function connectDB() {
  try {
    if (process.env.NODE_ENV.MONGO_URI) {
      await mongoose.connect(process.env.NODE_ENV.MONGO_URI, {});
      console.log('MongoDB Connected.');
    } else {
      console.error('MONGO_URI environment variable is not defined');
      process.exit(1);
    }
  } catch (error){
    console.error(err.message);
    process.exit(1);
  }
}

export default connectDB;
