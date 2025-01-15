import React from 'react';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import { ThemeProvider } from './src/context/ThemeContext';

export default function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <BottomTabNavigator/>
            </ThemeProvider>
        </Provider>
    );
}
