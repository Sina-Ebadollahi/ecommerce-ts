import React, { createContext, useReducer, useState } from "react";

export const globalContext = createContext(null);
/*
    reducers
*/
type Action = {
    type: string,
    paylod: object | [],
}
// // Theme Reducer
// const themeReducerFunction = (state: any, action: Action) => {
//     switch(action.type){

//         default:
//             return state;
//     }
// }
// Authentication Reducer
const authenticationReducerFunction = (state: any, action: Action): any => {
    switch(action.type){

        default:
            return state;
    }
}
export function GlobalContextProvider({ children }: { children: JSX.Element}){
    const [themeStatus, setThemeStatus] = useState('light');
    const [authReducer, setAuthReducer] = useReducer(authenticationReducerFunction, {
        userData: null,
        isAuthenticated: false,
        ip: null,
    })
    // const [themeReducer, themeDispatch] = useReducer(themeReducerFunction, {
    //     status: 'light',

    // })
    return(
        {children}
    )
}









