import React from "react";
import { useNavigate } from "react-router";
const Person = ({ person }) => {
  console.log(person)


  const navigate = useNavigate();

  const detailPageMove =(names)=>{
    console.log("yes ")
    navigate(`/detailpage/${names}`)
  }



  return (
    <>

      {person.map((item, index) => (
        <div
          key={index}
          className="bg-white mb-1 h-[4rem] w-full px-2 flex items-center justify-between"
       onClick={()=>detailPageMove(item.name)} >
          <p>{item.name}</p>
          <div className=" flex gap-3 ">
            <p className={`text-green-500  font-medium`}>+{item.split}</p>
      
          </div>
        </div>
      ))}
    </>
  );
};

export default Person;
