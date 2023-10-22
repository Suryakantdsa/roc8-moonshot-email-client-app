import React, { useState } from "react";
import useFormattedDate from "../utils/useFormattedDate";
import { useDispatch } from "react-redux";
import { addFavorite } from "../utils/favoritesSlice";
import useCheckIsRead from "../utils/useCheckIsRead";

const EmailCard = ({ email }) => {
//   console.log(email);
  const { id, from, subject, short_description, date } = email;
  const formattedDate = useFormattedDate(date);
  const [isRead, setIsRead] = useState(useCheckIsRead(id));
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    // Dispatch the addFavorite action with the email data
    alert("This email is added as favorite 👍")
    dispatch(addFavorite(email));
  };
  const handleCardClick = () => {
    // Update the isRead status when the card is clicked
    setIsRead(true);
  };


  return (
    <section className={`w-full my-4 border-[#cfd2cd] p-4 border rounded-xl flex cursor-pointer ${
        isRead ? "bg-[#f2f2f2]" : "bg-white"
      }`}
      onClick={handleCardClick}
      >
      <div className="w-[35px] h-[35px] mr-6 mt-1 text-white text-xl bg-[#e54065] font-bold rounded-full flex justify-center items-center">
        {from.name[0]}
      </div>
      <div>
        <p className="">
          From{" "}
          <span className="font-semibold">
            {from.name} {"<"}
            {from.email}
            {">"}
          </span>
        </p>
        <p className="">
          Subject: <span className="font-semibold">{subject}</span>
        </p>
        <p className="py-2">{short_description.slice(0, 45) + '...'}</p>
        <p className="">
          <span>{formattedDate}</span>
          <span>
            <button
              onClick={handleFavoriteClick}
              className="text-[#e54065] font-semibold ml-6">
              Favorite
            </button>
          </span>
        </p>
      </div>
    </section>
  );
};

export default EmailCard;
