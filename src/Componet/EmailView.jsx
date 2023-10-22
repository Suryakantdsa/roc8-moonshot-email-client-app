import React from "react";
import { useDispatch } from "react-redux";
import { addFavorite } from "../utils/favoritesSlice";
import useFormattedDate from "../utils/useFormattedDate";
import useGetEmailDetails from "../utils/useGetEmailDetails";

const EmailView = ({ emailDetails }) => {
  const body = useGetEmailDetails(emailDetails.id);
  const formattedDate = useFormattedDate(emailDetails.date);
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    dispatch(addFavorite(emailDetails)); 
    alert("This email is added as favorite 👍")
  };

  return (
    <section className="h-full p-4 border border-[#cfd2cd] rounded-lg">
      <header className="flex w-full mb-4 items-start ">
        <div className="w-[35px] h-[35px] mr-6 mt-1 text-white text-xl bg-[#e54065] font-bold rounded-full flex justify-center items-center">
          {emailDetails.from.name[0]}
        </div>
        <div className="flex justify-between w-[90%] items-start">
          <section>
            <p className="">
              <span className="font-bold text-3xl">{emailDetails.subject}</span>
            </p>
            <p className="my-2">
              <span>{formattedDate}</span>
            </p>
          </section>
          <button
            onClick={handleFavoriteClick}
            className="text-white font-semibold text-sm bg-[#e54065] px-2 py-2 rounded-full"
          >
            Mark as Favorites
          </button>
        </div>
      </header>
      <main>
        {/* Conditionally render the email body */}
        {body ? (
          <div dangerouslySetInnerHTML={{ __html: body.body }} />
        ) : (
          <p>Loading email body...</p>
        )}
      </main>
    </section>
  );
};

export default EmailView;
