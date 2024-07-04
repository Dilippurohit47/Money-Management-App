import React from "react";

const Person = ({ person }) => {
  console.log(person);
  return (
    <>
      {person.map((item, index) => (
        <div key={index} className="bg-white mb-1 h-[4rem] w-full px-2 flex items-center  justify-between">
          <p> {item?.name}</p>
          <p className="text-green-500 font-medium">+{item?.money}</p>
        </div>
      ))}
    </>
  );
};

export default Person;
