import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Container from "../components/Container";
import * as Location from 'expo-location';
import {useLazyGetCityByCoordsQuery} from '../api/weatherApi';
import {alignCenter, alignSelfCenter} from "../constants/globalStyles";
import CustomText from "../components/CustomText";
import WeatherIcon from "../components/WeatherIcon";

export default function HomeScreen() {

    const [location, setLocation] = useState(null);

    const [getCityByCoords, {data: cityData, isLoading, isError, error}] = useLazyGetCityByCoordsQuery();

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
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
            getCityByCoords({lat: location.latitude, lon: location.longitude});
        }
    }, [location]);

    return (
        <Container style={alignCenter}>
            {cityData ? (
                <View style={alignSelfCenter}>

                    <WeatherIcon icon={cityData.weather[0].icon}/>

                    <CustomText
                        font="RobotoBold"
                        size={20}
                        textAlign={'center'}
                    >
                        Hava Durumu
                    </CustomText>

                    <CustomText font="RobotoRegular">Şehir: {cityData.name}, {cityData.sys.country}</CustomText>
                    <CustomText font="RobotoRegular">Sıcaklık: {cityData.main.temp.toFixed(1)}°C</CustomText>
                    <CustomText font="RobotoRegular">Hissedilen: {cityData.main.feels_like.toFixed(1)}°C</CustomText>
                    <CustomText font="RobotoRegular">Durum: {cityData.weather[0].description}</CustomText>
                    <CustomText font="RobotoRegular">Rüzgar Hızı: {cityData.wind.speed} m/s</CustomText>
                    <CustomText font="RobotoRegular">Nem: %{cityData.main.humidity}</CustomText>

                </View>
            ) : (
                <Text>Hava durumu bilgisi yok.</Text>
            )}
        </Container>
    );
}
