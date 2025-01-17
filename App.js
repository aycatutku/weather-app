import React from 'react';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {ThemeProvider} from './src/context/ThemeContext';
import {useFonts} from "expo-font";

export default function App() {

    const [fontsLoaded, fontError] = useFonts({
        'Roboto-SemiBold': require('./assets/fonts/Roboto-SemiBold.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <Provider store={store}>
            <ThemeProvider>
                <BottomTabNavigator/>
            </ThemeProvider>
        </Provider>
    );
}
