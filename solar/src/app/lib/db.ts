import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();
async function connectDB() {
  try {
    // To BE CHANGED BY ENVIRONMENT VARIABLE
      await mongoose.connect('mongodb+srv://mongodb_admin:mongodb_admin@devcluster.gbjglor.mongodb.net', {});
     console.log('MongoDB Connected.');
    // if (process.env.NEXT_PUBLIC_MONGO_URI) {
    //   await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, {});
    //   console.log('MongoDB Connected.');
    // } else {
    //   console.error('MONGO_URI environment variable is not defined');
    //   process.exit(1);
    // }
  } catch (error){
    console.error(err.message);
    process.exit(1);
  }
}

export default connectDB;
