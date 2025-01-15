import React, {useContext, useEffect, useState} from 'react';
import {View,Text, StyleSheet, Alert, Image} from 'react-native';
import Container from "../components/Container";
import * as Location from 'expo-location';
import {useLazyGetCityByCoordsQuery} from '../api/weatherApi';
import {ThemeContext} from "../context/ThemeContext";
import {alignCenter, alignSelfCenter} from "../constants/globalStyles";
import {DeviceHeight, DeviceWidth} from "../constants/device";


export default function HomeScreen() {

    const [location, setLocation] = useState(null);

    const [getCityByCoords, { data: cityData, isLoading, isError, error }] = useLazyGetCityByCoordsQuery();

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Konum İzni Gerekli', 'Lütfen konum izni verin.');
                return;
            }

            let loc = await Location.getCurrentPositionAsync({});
            setLocation(loc.coords);
        })();
    }, []);

    useEffect(() => {
        if (location) {
            getCityByCoords({ lat: location.latitude, lon: location.longitude });
        }
    }, [location]);

    console.log(cityData);

    const { theme } = useContext(ThemeContext);

    return (
        <Container style={alignCenter}>
            {cityData ? (
                <View style={alignSelfCenter}>

                    <Image
                        style={{
                            width: DeviceWidth/2,
                            height: DeviceHeight/4,
                            alignSelf: 'center',
                        }}
                        source={{
                            uri: `https://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`,
                        }}
                    />

                    <Text style={{color:theme.elementColor}}>Hava Durumu</Text>
                    <Text style={{color:theme.elementColor}}>Şehir: {cityData.name}, {cityData.sys.country}</Text>
                    <Text style={{color:theme.elementColor}}>Sıcaklık: {cityData.main.temp.toFixed(1)}°C</Text>
                    <Text style={{color:theme.elementColor}}>Hissedilen: {cityData.main.feels_like.toFixed(1)}°C</Text>
                    <Text style={{color:theme.elementColor}}>Durum: {cityData.weather[0].description}</Text>
                    <Text style={{color:theme.elementColor}}>Rüzgar Hızı: {cityData.wind.speed} m/s</Text>
                    <Text style={{color:theme.elementColor}}>Nem: %{cityData.main.humidity}</Text>
                </View>
            ) : (
                <Text style={styles.text}>Hava durumu bilgisi yok.</Text>
            )}
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
