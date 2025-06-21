import { useState } from "react";
import { CreateUserContext } from "./CreateUserContext";

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    const UpdateUser = (userData) => {
        setUser(userData)
    };

    const ClearUser = () => {
        setUser(null);
    }

    return (
        <CreateUserContext.Provider value={{ user, UpdateUser, ClearUser }}>
            {children}
        </CreateUserContext.Provider>
    )
};

export default UserProvider;