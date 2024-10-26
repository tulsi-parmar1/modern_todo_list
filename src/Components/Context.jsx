import { createContext, useState } from "react";
const context=createContext(null);
import { useReducer } from "react";
const AuthContext=({children})=>{
 
    // const [user,setuser]=useState('');
    const initialstate = { textt: '' ,pasw:''};
    const reducer=(state,action)=>{
            if(action.type=='login')
                {
                    return action.payload;
                }
             else if(action.type==='logout')
                    {
                        return initialstate;
                    }
    }
    const [user,dispatch]=useReducer(reducer,initialstate);
    // const login=(data)=>
    // {
        // setuser(data);
    // }
    // const logout=()=>{
        // setuser(null);
    // }
    return(
        <>
        <context.Provider value={{user,dispatch}}>
        {children}
        </context.Provider>
        </>
    )
}

export { AuthContext,context};