import React, {useContext} from 'react';
import {Image, StyleSheet} from 'react-native';
import {DeviceWidth, DeviceHeight} from '../constants/device';
import {ThemeContext} from "../context/ThemeContext";

const WeatherIcon = ({icon, style}) => {
    if (!icon) return null;

    const {theme} = useContext(ThemeContext);

    return (
        <Image
            style={[styles.iconStyle, style, {borderColor:theme.elementColor}]}
            source={{
                uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
            }}
        />
    );
};

const styles = StyleSheet.create({
    iconStyle: {
        width: DeviceWidth / 2,
        height: DeviceHeight / 4,
        alignSelf: 'center',
        borderWidth: 0.8,
        borderRadius: 22,
        marginVertical: 42,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default WeatherIcon;
