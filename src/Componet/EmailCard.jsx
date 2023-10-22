import React, { useState } from "react";
import useFormattedDate from "../utils/useFormattedDate";
import { useDispatch } from "react-redux";

const EmailCard = ({ email }) => {
  console.log(email);
  const { id, from, subject, desc, date } = email;
  const formattedDate = useFormattedDate(date);

  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    // Dispatch the addFavorite action with the email data
    dispatch(addFavorite(email));
  };

  return (
    <section className="w-full my-4 bg-white p-4 border border-[#cfd2cd] rounded-xl flex cursor-pointer ">
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
        <p className="py-1">{desc}</p>
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
