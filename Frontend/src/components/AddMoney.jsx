import React, { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
const AddMoney = ({
  AddMoneyBox,
  name,
  date,
  things,
  time,
  totalMoney,
  split,
  setName,
  setSplit,
  setDate,
  setThings,
  setTime,
  setTotalMoney,
  setPerson,
  person,
}) => {

  const [moneyStatus, setMoneyStatus] = useState(0);

  const save = async () => {
    const newPerson = {
      name: name,
      totalAmount: totalMoney,
      date: date,
      thingName: things,
      time: time,
      split: split,
      status:moneyStatus,
    };
    fetch(`http://localhost:3000/user/newEntry?_id=123`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setName("");
          setDate("");
          setThings("");
          setTime("");
          setTotalMoney("");
          setSplit("");
          AddMoneyBox();
        }
      });
  };


  const now = new Date();
  const day = now.getDate().toString().padStart(2, "0");
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;
  setDate(formattedDate);

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const currentTime = `${hours}:${minutes}:${seconds}`;
  setTime(currentTime);
  console.log(moneyStatus);
  return (
    <div className="h-[62.5vh] flex justify-center flex-col absolute bg-[#96469c] items-center w-[100vw]">
      <div className="h-[50vh] flex flex-col gap-8  w-full px-2 py-6 ">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="name"
            value={name}
            className="py-1 px-2"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="date"
            value={date}
            className="py-1 px-2 w-[30vw]"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="things"
            value={things}
            className="py-1 px-2"
            onChange={(e) => setThings(e.target.value)}
          />
          <input
            type="text"
            placeholder="time"
            value={time}
            className="py-1 px-2 w-[30vw]"
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="total money"
            value={totalMoney}
            className="py-1 px-2"
            onChange={(e) => setTotalMoney(e.target.value)}
          />
          <input
            type="text"
            placeholder="split"
            value={split}
            className="py-1 px-2 w-[30vw]"
            onChange={(e) => setSplit(e.target.value)}
          />
        </div>
        {!name && (
          <>
            <p className="text-[#ffffff]">Please Enter all fields</p>
          </>
        )}

        <div className="flex gap-3  justify-center">
          <button
            className={` ${moneyStatus === 1 ? "bg-red-500 " :"bg-red-800"} px-5 rounded-full  py-[6px] text-[1.1rem] `}
            onClick={() => setMoneyStatus(1)}
          >
            dena hai
          </button>
          <button
            className={` ${moneyStatus === 2 ? "bg-green-500 " :"bg-green-800"}  px-5 rounded-full  py-[6px] text-[1.1rem] `}
            onClick={() => setMoneyStatus(2)}
          >
            Lena hai
          </button>
        </div>
      </div>

      <button
        disabled={!name || !date || !things || !time || !totalMoney}
        className={`bg-white px-5 rounded-full  py-[6px] text-[1.1rem] `}
        onClick={() => {
          save();
        }}
      >
        save
      </button>

      <button
        className="   px-5 bg-purple-600 text-white absolute top-[-1vh]  rounded-full   py-[6px] text-[1.1rem] "
        onClick={() => {
          AddMoneyBox();
        }}
      >
        <IoMdArrowDropdownCircle size={24} />
      </button>
    </div>
  );
};

export default AddMoney;
