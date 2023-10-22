import { useDispatch } from "react-redux";
import { addFavorite } from "../utils/favoritesSlice";
import useFormattedDate from "../utils/useFormattedDate";
import useGetEmailDetails from "../utils/useGetEmailDetails";

const EmailView = ({ emailDetails }) => {
    const body=useGetEmailDetails(emailDetails.id)
    console.log(body);
  const formattedDate = useFormattedDate(emailDetails.date);
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    // Dispatch the addFavorite action with the email data
    dispatch(addFavorite(email));
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
          className=" text-white font-semibold text-sm bg-[#e54065] px-2 py-2 rounded-full">Mark as Favorites</button>
        </div>
      </header>
      <main>
        {/* body string here */}
        <div dangerouslySetInnerHTML={{ __html: body.body }} />
      </main>
    </section>
  );
};

export default EmailView;
