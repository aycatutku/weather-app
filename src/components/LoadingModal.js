import React, {useContext, useEffect} from "react";
import {Modal, View, StyleSheet, ActivityIndicator} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {close_modal} from "../store/uiSlice";
import {alignSelfCenter} from "../constants/globalStyles";
import {ThemeContext} from "../context/ThemeContext";

export const LoadingModal = () => {
    const {type,visible} = useSelector(state => state.ui);
    const dispatch=useDispatch();

    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        if (type==="loading"&&visible) {
            const timeoutId = setTimeout(() => {
                dispatch(close_modal());
            }, 1500);

            return () => clearTimeout(timeoutId);
        }
    }, [type])


    return(
        <Modal visible={type==="loading"&&visible} transparent={true}>
            <View style={styles.container}>
                <ActivityIndicator size={"large"} style={alignSelfCenter} animating={true}/>
            </View>
        </Modal>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255,255,255,0.56)',
    }
})
