import React, { useState } from "react";
import EmailCard from "./EmailCard";
import useGetEmailFromDB from "../utils/useGetEmailFromDB";
import { useSelector } from "react-redux";
import EmailView from "./EmailView"; // Import the EmailView component

const EmailList = () => {
  useGetEmailFromDB();
  const allEmail = useSelector((store) => store.email);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleEmailClick = (email) => {
    setSelectedEmail(email); 
  };

  return (
    <>
      <nav className="flex justify-start align-middle">
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
      {/* Email cards based on the selected filter */}
      {allEmail.list ? (
        allEmail.list.map((data) => {
          console.log(data);
          return (
            <EmailCard
              key={data.id}
              email={data}
              onClick={() => handleEmailClick(data)} // Pass the click handler to EmailCard
            />
          );
        })
      ) : (
        <p>No emails to display</p>
      )}
      {/* Render the EmailView component when a selected email exists */}
      {selectedEmail && (
        <section className="bg-white mx-6  mt-10">
          <EmailView />
        </section>
      )}
    </>
  );
};

export default EmailList;
