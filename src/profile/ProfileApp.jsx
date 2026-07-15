import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";

/**
 * ProfileApp is a React functional component that serves as the main application component for the profile feature.
 * It uses the ProfileContext.Provider to provide the profile data to its child components (Profile and ProfileAddress).
 * The value of the context is set to "John Doe", which can be accessed by any component that consumes the ProfileContext.
 * @returns {JSX.Element} The ProfileApp component, which renders the Profile and ProfileAddress components within the ProfileContext.Provider.
 */
function ProfileApp() {
  return (
    <>
      <ProfileContext.Provider value="John Doe">
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </>
  );
}

export default ProfileApp;
