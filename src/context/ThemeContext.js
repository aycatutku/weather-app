import React, {createContext, useState, useEffect} from 'react';
import {themes} from '../constants/themes';
import {StatusBar} from "react-native";

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(themes.day);

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 18) {
            setTheme(themes.day);
        } else {
            setTheme(themes.night);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <StatusBar
                barStyle={theme === themes.day ? 'dark-content' : 'light-content'}
                backgroundColor={theme.backgroundColor}
            />
            {children}
        </ThemeContext.Provider>
    );
}
