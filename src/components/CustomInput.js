import React, {useContext, useRef} from 'react';
import {TextInput, StyleSheet, View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import {ThemeContext} from "../context/ThemeContext";
import {moderateScale, moderateVerticalScale} from "../constants/scaling";
import {fontFamily} from "../constants/fontFamily";

const CustomInput = ({
                         value,
                         onChangeText,
                         placeholder,
                         style,
                         inputStyle,
                         onIconPress,
                         icon,
                         ...restProps
                     }) => {


    const inputRef = useRef(null);
    const {theme} = useContext(ThemeContext);

    const handlePress = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };


    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View
                style={[
                    styles.container,
                    style,
                    {borderColor: theme.elementColor},
                ]}
            >
                <TextInput
                    ref={inputRef}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={theme.placeholderColor}
                    style={[styles.input, inputStyle]}
                    {...restProps}
                />

                {icon && (
                    <TouchableOpacity onPress={onIconPress} style={styles.icon}>
                        {icon}
                    </TouchableOpacity>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 14,
        height: moderateVerticalScale(52),
        marginVertical: 24,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
    },
    input: {
        fontFamily: fontFamily.RobotoRegular,
        fontSize: moderateScale(14, 0.3),
        flex: 1,
    },
    icon: {
        padding: 8,
    },
});

export default CustomInput;
