import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

/**
 * Profile is a React functional component that displays the profile information of a user.
 * It uses the useContext hook to access the profile data from the ProfileContext.
 * @returns {JSX.Element} The Profile component, which renders the user's profile information.
 */
function Profile() {
  // for useContext, we need to use the context that we created in ProfileContext.jsx
  const profile = useContext(ProfileContext);

  return (
    <>
      <h2>Profile</h2>
      <p>Hello {profile}</p>
    </>
  );
}

export default Profile;
