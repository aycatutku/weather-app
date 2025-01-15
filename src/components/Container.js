import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function Container({ children, style }) {
    const { theme } = useContext(ThemeContext);

    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor, paddingTop: insets.top }, style]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
});
