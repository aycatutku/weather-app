import React, {useContext} from "react";
import {Modal, StyleSheet, TouchableOpacity, View} from "react-native";
import {moderateScale, moderateVerticalScale} from "../constants/scaling";
import {useDispatch, useSelector} from "react-redux";
import {Ionicons} from "@expo/vector-icons";
import {close_modal} from "../store/uiSlice";
import CustomText from "./CustomText";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {ThemeContext} from "../context/ThemeContext";

export const ErrorModal = () => {
    const dispatch = useDispatch();
    const {type, visible, message} = useSelector(state => state.ui);

    const {theme} = useContext(ThemeContext);


    return (
        <Modal
            visible={type === "error" && visible}
            animationType={"fade"}
            statusBarTranslucent={false}
            transparent={true}
        >
            <View style={styles.container}>
                <View style={[styles.innerContainer, {backgroundColor: theme.backgroundColor,}]}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => dispatch(close_modal())}
                    >
                        <Ionicons name="close" size={moderateScale(24)} color={theme.elementColor}/>
                    </TouchableOpacity>

                    <MaterialIcons name="error" size={moderateScale(44)} color={theme.red} style={styles.iconStyle}/>

                    <CustomText
                        font={'medium'}
                        size={14}
                        textAlign={"center"}
                        style={{marginHorizontal: 22, marginVertical: 22, color: theme.red}}
                    >
                        {message}
                    </CustomText>

                </View>
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.56)',
        justifyContent: 'center'
    },
    innerContainer: {
        marginHorizontal: moderateScale(25),
        borderRadius: 15,
        shadowColor: '#000',
        elevation: 4,
        shadowRadius: 5,
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 0,
        },
    },
    closeButton: {
        margin: 16,
        alignSelf: 'flex-end'
    },
    iconStyle: {
        alignSelf: 'center',
        marginTop: moderateVerticalScale(12),
        marginVertical: 12
    },
    textContainer: {
        alignSelf: 'center'
    },
    buttonContainer: {
        alignSelf: 'center',
        top: moderateVerticalScale(48),
    }
})


