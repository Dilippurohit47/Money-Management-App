import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useLocation, useParams } from "react-router";

const DetailPage = () => {
  const [singlePerson, setSinglePerson] = useState([]);
  const {names}  = useParams();

console.log(names)

  useEffect(() => {
    fetch(`http://localhost:3000/user/allMembers?_id=123`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSinglePerson(data.allMembers);
        } else {
          console.error("Error:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredPersons = singlePerson.filter(
    (item) => item.name?.trim().toLowerCase() == names?.trim().toLowerCase()
  );

  console.log(singlePerson[1]?.name);
  console.log("filter", filteredPersons);

  const deleteEntry = (id) => {
    fetch(`http://localhost:3000/user/deleteEntries?_id=123`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Update the state to remove the deleted entry
          setSinglePerson((prevState) =>
            prevState.filter((item) => item.id !== id)
          );
        } else {
          console.error("Error:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      {filteredPersons.map((item, index) => (
        <div
          key={index}
          className="bg-white mb-1 h-[4rem] w-full px-2 flex items-center justify-between"
        >
          <p>
            {item.name} <span>({item.thingName}) lol</span>
          </p>
          <div className=" flex gap-3 ">
            <p className="text-green-500 font-medium">+{item.split}</p>
            <MdDelete
              size={22}
              className="text-red-500 mt-[2px]"
              onClick={() => deleteEntry(item.id)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default DetailPage;
