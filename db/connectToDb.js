import { connect } from "mongoose";

export const connectToDb = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("database connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
