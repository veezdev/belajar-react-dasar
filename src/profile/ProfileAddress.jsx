import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

/**
 * ProfileAddress is a React functional component that displays the address information of a user.
 * It uses the useContext hook to access the profile data from the ProfileContext.
 * @returns {JSX.Element} The ProfileAddress component, which renders the user's address information.
 */
function ProfileAddress() {
  // for useContext, we need to use the context that we created in ProfileContext.jsx
  const profile = useContext(ProfileContext);
  return (
    <>
      <h2>Profile Address</h2>
      <p>Address: {profile}</p>
    </>
  );
}

export default ProfileAddress;
