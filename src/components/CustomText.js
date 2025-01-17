import React, {useContext} from 'react';
import {Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {fontFamily} from "../constants/fontFamily";
import {moderateScale} from "../constants/scaling";

const CustomText = (props) => {

    const {
        style, children, font = "Regular",
        size = 16,
        textAlign = "left",
        ...restProps
    } = props;

    const {theme} = useContext(ThemeContext);

    const dynamicStyle = [
        styles.text,
        size && styles[`h${size}`] ? styles[`h${size}`] : styles.text,
        styles[`font${font.replace(/^\w/, (c) => c.toUpperCase())}`] || styles.fontRegular,
        textAlign && styles[`textAlign${textAlign.charAt(0).toUpperCase() + textAlign.slice(1)}`],
        style,
    ];


    return <Text
        style={[dynamicStyle, {color: theme.elementColor}]}
        {...restProps}
    >
        {children}
    </Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginVertical: 4,
    },
    fontRegular: {
        fontFamily: fontFamily.RobotoRegular,
    },
    fontMedium: {
        fontFamily: fontFamily.RobotoMedium
    },
    fontSemiBold: {
        fontFamily: fontFamily.RobotoSemiBold
    },
    fontBold: {
        fontFamily: fontFamily.RobotoBold
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    textAlignRight: {
        textAlign: 'right'
    },
    textAlignLeft: {
        textAlign: 'left'
    },
    h12: {
        fontSize: moderateScale(12)
    },
    h16: {
        fontSize: moderateScale(16)
    },
    h20: {
        fontSize: moderateScale(20)
    },
    h24: {
        fontSize: moderateScale(24)
    },
});

export default CustomText;
