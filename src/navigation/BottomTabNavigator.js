import React, {useContext} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomTabBarContent from "./CustomTabBarContent";
import {ThemeContext} from "../context/ThemeContext";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {

    const { theme } = useContext(ThemeContext);

    return (
        <NavigationContainer>
            <Tab.Navigator
                // tabBar={(props) => <CustomTabBarContent {...props}/>}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Search') {
                            iconName = focused ? 'search' : 'search-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    headerShown:false,
                    tabBarActiveTintColor: theme.elementColor,
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        backgroundColor: theme.primaryColor,
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
