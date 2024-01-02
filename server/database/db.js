import mongoose from 'mongoose'

const DBConnection = async () => {
  const MONGODB_URL = `mongodb+srv://aslam:dzrp78m*@cluster0.pjmvhij.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONGODB_URL, { useNewURLParser: true });
    console.log("Database Connected Successfully");

  } catch (error) {
    console.error('Error while connecting with database ', error.message);
  }
}

export default DBConnection;