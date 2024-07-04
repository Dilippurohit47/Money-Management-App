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

  ]);

  const [add, setAdd] = useState(false);

  console.log(person);
  const AddMoneyBox = () => {
    setAdd((prev) => !prev);
  };

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [things, setThings] = useState("");
  const [time, setTime] = useState("");
  const [totalMoney, setTotalMoney] = useState("");
  const [split, setSplit] = useState("");
  console.log("name", name);
  console.log("time", time);
  console.log("tm", totalMoney);
  console.log("t", things);
  console.log("s", split);
  console.log("d", date);

  return (
    <div className=" h-[100vh] relative  overflow-hidden  ">
      <h1>Money Management</h1>
      <div className="bg-[#80808090] h-[100vh] w-[100vw] py-2">
        <Person person={person} />
        <div
          className="bg-red-500 flex justify-center fixed items-center top-[70vh] left-32  hover:bg-red-600  h-16 w-16 rounded-full text-white"
          onClick={AddMoneyBox}
        >
          <span className="text-[3rem] leading-3  absolute top-5 left-4 ">
            +
          </span>
        </div>
      </div>

      <div
        className={` bg-green-500 absolute z-50 transition-all ease-in-out duration-[0.5s]  ${
          add ? "translate-y-[-65vh]" : "translate-y-[60vh]"
        }   `}
      >
        <AddMoney
          AddMoneyBox={AddMoneyBox}
          name={name}
          date={date}
          things={things}
          time={time}
          totalMoney={totalMoney}
          split={split}
          setName={setName}
          setDate={setDate}
          setPerson={setPerson}
          setTime={setTime}
          setTotalMoney={setTotalMoney}
          setThings={setThings}
          setSplit={setSplit}
          person={person}
        />
      </div>
    </div>
  );
};

export default HomePage;
