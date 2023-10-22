import React, { useState } from "react";
import EmailCard from "./EmailCard";
import useGetEmailFromDB from "../utils/useGetEmailFromDB";
import { useSelector } from "react-redux";
import EmailView from "./EmailView";
import Loading from "./Loading";

const EmailList = () => {
  useGetEmailFromDB();
  const allEmail = useSelector((store) => store.email);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  return (
    <div className="w-full">
      <nav className="flex justify-start items-center w-full p-4 font-semibold">
        <label className="mr-4">Filter by:</label>
        <button onClick={() => setSelectedFilter("unread")} className="mr-4">
          Unread
        </button>
        <button onClick={() => setSelectedFilter("read")} className="mr-4">
          Read
        </button>
        <button onClick={() => setSelectedFilter("favorites")} className="mr-4">
          Favorites
        </button>
      </nav>
      <main className="flex ">
        <section className={` ${selectedEmail ? 'w-[200%]' : 'w-full'}`}>
          {allEmail.list ? (
            allEmail.list.map((data) => (
              <a key={data.id} onClick={() => handleEmailClick(data)}>
                <EmailCard key={data.id} email={data} />
              </a>
            ))
          ) : (
            <Loading/>
          )}
        </section>
        <section
          className={`m-5 bg-white transform transition-all duration-300 ${
            selectedEmail ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          {selectedEmail && <EmailView emailDetails={selectedEmail} />}
        </section>
      </main>
    </div>
  );
};

export default EmailList;
