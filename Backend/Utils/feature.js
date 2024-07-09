import mongoose from "mongoose";

const uri = "mongodb+srv://dilippurohit204:dilip1234@moneymanagement.nky8nds.mongodb.net/?retryWrites=true&w=majority&appName=moneymanagement";

export const connectDb = () => {
  mongoose
    .connect(uri, {
      dbName: "moneymanagement",
    })
    .then((c) => console.log(`DB connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
};
