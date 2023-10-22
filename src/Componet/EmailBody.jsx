import React from "react";
import EmailCard from "./EmailCard";
import useGetEmailFromDB from "../utils/useGetEmailFromDB";
import { useSelector } from "react-redux";

const EmailBody = () => {
    useGetEmailFromDB()
    const allEmail = useSelector((store) => store.email);
    console.log(allEmail.list);
  return (
    <main className="w-full h-full bg-[#f4f5f9] p-10">
      <nav className="flex justify-start align-middle">
        <p className="mr-4"> Filter by:</p>
        <button className="mr-4">Unread</button>
        <button className="bg-[#E1e4ea] px-3 py-[2px] rounded-full mr-4">Read</button>
        <button className="mr-4">Favorites</button>
      </nav>
      {/* emailCard */}
      {
  allEmail.list ? (
    allEmail.list.map((data) => {
      console.log(data);
      return <EmailCard key={data.id} email={data} />;
    })
  ) : (
    <p>No emails to display</p>
  )
}

    </main>
  );
};

export default EmailBody;
