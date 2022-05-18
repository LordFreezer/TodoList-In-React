import React, { createContext, useReducer, useEffect } from 'react';
import { classReducer } from '../reducers/classReducer';

export const ClassContext = createContext();

const ClassContextProvider = (props) => {
    const [classes, dispatch] = useReducer(classReducer, [], () => {
        const localData = localStorage.getItem('classes');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('classes', JSON.stringify(classes))
    }, [classes]);
    return (
        <ClassContext.Provider value={{ classes, dispatch }}>
            {props.children}
        </ClassContext.Provider>
    );
}

export default ClassContextProvider;
