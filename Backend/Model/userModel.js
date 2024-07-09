import mongoose from "mongoose";

const Userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: [true, "email already exist "],

      required: [true, "please enter email"],
    },

    _id: {
      type: String,
      required: true,
    },
    totalMoney: {
      type: Number,
    },
    persons: {
      type: Array,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", Userschema);
