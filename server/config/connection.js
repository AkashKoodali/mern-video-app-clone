import mongoose from "mongoose";

export const connect = async () => {
    mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true, 
      useUnifiedTopology: true,
      family: 4,
      })
      .then(() => {
        console.log("Connected to DB");
      })
      .catch((err) => {
        throw err;
      });
  };