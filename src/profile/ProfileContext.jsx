import { createContext } from "react";

/**
 * ProfileContext is a React context that provides a way to share data (state) between components without having to pass props down manually at every level.
 * It allows components to access and update the profile-related state from any component that is wrapped in the ProfileContext.Provider.
 *
 * Usage:
 * 1. Wrap the components that need access to the profile state with ProfileContext.Provider.
 * 2. Use the useContext hook in child components to access the context value.
 */
export const ProfileContext = createContext("");
