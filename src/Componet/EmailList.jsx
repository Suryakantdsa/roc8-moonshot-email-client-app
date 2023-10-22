import React, { useState, useEffect } from "react";
import EmailCard from "./EmailCard";
import useGetEmailFromDB from "../utils/useGetEmailFromDB";
import { useDispatch, useSelector } from "react-redux";
import EmailView from "./EmailView";
import Loading from "./Loading";
import { addRead } from "../utils/readEmailSlice";

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  useGetEmailFromDB();
  const allEmail = useSelector((store) => store.email);
  const readEmails = useSelector((state) => state.read);
  const dispatch=useDispatch()
  const favoriteEmails = useSelector((state) => state.favorites);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);


  useEffect(() => {
    // Update the emails state when allEmail changes
    if (allEmail.list) {
      setEmails(allEmail.list);
    }
  }, [allEmail]);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
    dispatch(addRead(email))
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);

  };

  return (
    <div className="w-full">
      <nav className="flex justify-start items-center w-full p-4 font-semibold">
        <label className="mr-4">Filter by:</label>
        <button
          onClick={() => handleFilterClick("unread")}
          className={`mr-4 px-3 py-1 rounded-full ${
            selectedFilter === "unread" ? "bg-[#e1e4ea]" : ""
          }`}>
          Unread
        </button>
        <button
          onClick={() => handleFilterClick("read")}
          className={`mr-4 px-3 py-1 rounded-full ${
            selectedFilter === "read" ? "bg-[#e1e4ea]" : ""
          }`}>
          Read
        </button>
        <button
          onClick={() => handleFilterClick("favorites")}
          className={`mr-4 px-3 py-1 rounded-full ${
            selectedFilter === "favorites" ? "bg-[#e1e4ea]" : ""
          }`}>
          Favorites
        </button>
      </nav>
      <main className="flex ">
        <section className={` ${selectedEmail ? "w-[200%]" : "w-full"}`}>
          {emails ? (
            emails.map((data) => (
              <a key={data.id} onClick={() => handleEmailClick(data)}>
                <EmailCard key={data.id} email={data} />
              </a>
            ))
          ) : (
            <Loading />
          )}
        </section>
        <section
          className={`m-5 bg-white transform transition-all duration-300 ${
            selectedEmail
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}>
          {selectedEmail && <EmailView emailDetails={selectedEmail} />}
        </section>
      </main>
    </div>
  );
};

export default EmailList;
