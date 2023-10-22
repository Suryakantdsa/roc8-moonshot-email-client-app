import { useSelector } from 'react-redux';

const useCheckIsRead = (emailId) => {
  const readEmails = useSelector((state) => state.read);

  // Check if the email with the given ID is in the "read" slice
  const isRead = readEmails.some((email) => email.id === emailId);

  return isRead;
};

export default useCheckIsRead;
