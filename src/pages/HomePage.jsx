import React, { useState } from "react";
import Person from "../components/Person";
import AddMoney from "../components/AddMoney";

const HomePage = () => {
  const [person, setPerson] = useState([
    {
      id: 1,
      name: "dilip",
      money: "400",
    },
    {
      id: 1,
      name: "dilip",
      money: "400",
    },
    {
      id: 1,
      name: "dilip",
      money: "400",
    },
  ]);

  const [add, setAdd] = useState(false);

  const AddMoneyBox = () => {
    setAdd((prev) => !prev);
  };

  const [name,setName] = useState("don")
  const [date,setDate] = useState("")
  const [things,setThings] = useState("")
  const [time,setTime] = useState("")
  const [totalMoney,setTotalMoney] = useState(0)
  const [split,setSplit] = useState(0)
  return (
    <div className=" h-[100vh] relative  overflow-hidden  ">
      <h1>Home Page</h1>
      <div className="bg-[#80808090] h-[90vh] w-[100vw] py-2">
        <Person person={person} />
        <div
          className="bg-red-500 flex justify-center relative items-center top-44 left-32  hover:bg-red-600  h-16 w-16 rounded-full text-white"
          onClick={AddMoneyBox}
        >
          <span className="text-[3rem] leading-3 absolute top-5 left-4   ">
            +
          </span>
        </div>

        <div
          className={` bg-green-500 absolute transition-all ease-in-out duration-[0.5s]  ${
            add ? "translate-y-[-5vh]" : "translate-y-[60vh]"
          }   `}
        >
          <AddMoney AddMoneyBox={AddMoneyBox} {...name} date={date} things={things} time={time} totalMoney={totalMoney} split={split} {...setName}  />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
