import { createContext, useContext } from "react";

const userContext = createContext({
    name : "default"
});
export default userContext;