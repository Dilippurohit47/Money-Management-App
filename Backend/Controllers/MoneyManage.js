import { User } from "../Model/userModel.js";

export const newUser = async (req, res) => {
  const { name, email, _id } = req.body;

  let user = await User.findById(_id);
  if (user)
    return res.status(200).json({
      success: true,
      message: `Welcome again ,${user.name}`,
      user,
    });

  if (!_id || !name || !email)
    return res.status(400).json({
      success: false,
      message: "Please enter all fields",
    });

  try {
    user = await User.create({
      name,
      email,
      _id,
    });
    return res.status(200).json({
      success: true,
      message: ` welcome ${name} `,
      user,
    });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      // Duplicate email error
      return res.status(400).json({
        success: false,
        error: "Duplicate email",
        message: "Email already exists",
      });
    }

    return res.status(500).json({
      success: false,
      error: "Error in user creation",
      message: error.message,
    });
  }
};

export const newEntry = async (req, res) => {
  const { _id } = req.query;
  const { name, totalAmount, date, thingName, time, split, status} = req.body;

  try {
    if (!name || !totalAmount || !thingName || !date || !time || !split) {
      return res.status(400).json({
        success: false,
        message: "Please enter all fields",
      });
    }
    let user = await User.findById(_id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Please provide id or login to continue",
      });
    }
    let id = user.persons.length;
    let newEntry = {
      id: id + 1,
      name: name,
      totalAamount: totalAmount,
      thingName: thingName,
      date: date,
      time: time,
      split: split,
      status:status
    };
    user.persons.push(newEntry);

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Entry done successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
  }
};

export const allMembers = async (req, res) => {
  try {
    const { _id } = req.query;
    let user = await User.findById(_id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Please provide id or login to continue",
      });
    }

    let allMembers = user.persons;
    console.log(allMembers)
    let totalDueAmounts = {};

    allMembers.map((item, index) => {
      const trimmedName = item.name.trim().toLowerCase(); // Trim and convert to lowercase
      if (totalDueAmounts[trimmedName]) {
        totalDueAmounts[trimmedName] += parseFloat(item.split);
      } else {
        totalDueAmounts[trimmedName] = parseFloat(item.split);
      }
    });
    return res.status(200).json({
      success: true,
      message: "Members find Successfully",
      totalDueAmounts,
      allMembers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error in  finding all members",
    });
  }
};

export const deleteEntries = async (req, res) => {
  try {
    const { _id } = req.query;
    const { id } = req.body;

    let user = await User.findById(_id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Please provide id or login to continue",
      });
    }

    // Find the index of the entry to delete
    const entryIndex = user.persons.findIndex((person) => person.id === id);
    if (entryIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Entry not found",
      });
    }
    // Remove the entry
    user.persons.splice(entryIndex, 1);
    // Save the updated user
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Entry deleted successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error,
    });
  }
};
