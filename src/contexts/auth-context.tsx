import React, {
    ReactElement,
    ReactNode,
    useState,
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
  } from "react";
import { View } from "react-native";


type AuthContextType = {
    user: { [key: string]: any } | null;
    setUser: Dispatch<SetStateAction<{ [key: string]: any } | null>>;
  };
  
const AuthContext = createContext<AuthContextType | undefined>(undefined);

function useAuth() : AuthContextType {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

const AuthProvider = (props: {children: ReactNode}): ReactElement => {
    const [user, setUser] = useState<{ [key: string]: any } | null>(null);

    return (
    <AuthContext.Provider  
       {...props}
        value ={{user, setUser}} 
        />
    )
}

export {AuthProvider, useAuth};