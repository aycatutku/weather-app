import React, {useContext, useState} from 'react';
import {Alert, View} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import {ThemeContext} from "../context/ThemeContext";
import {useLazyGetCityWeatherQuery} from "../api/weatherApi";
import {alignSelfCenter} from "../constants/globalStyles";
import WeatherIcon from "../components/WeatherIcon";
import CustomText from "../components/CustomText";

export default function SearchScreen() {
    const {theme} = useContext(ThemeContext);
    const [city, setCity] = useState('');

    const [getCityWeather, {data: cityData, isLoading, isError, error}] = useLazyGetCityWeatherQuery();

    const handleSearch = () => {
        if (!city.trim()) {
            Alert.alert('Uyarı', 'Lütfen bir şehir adı girin!');
            return;
        }
        getCityWeather(city);
    };

    return (
        <Container>
            <CustomInput
                value={city}
                onChangeText={setCity}
                placeholder="Şehir adı girin"
                icon={<FontAwesome name="search" size={22} color={theme.elementColor}/>}
                onIconPress={handleSearch}
            />

            {
                city && cityData ? (
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
                        <CustomText
                            font="RobotoRegular">Hissedilen: {cityData.main.feels_like.toFixed(1)}°C</CustomText>
                        <CustomText font="RobotoRegular">Durum: {cityData.weather[0].description}</CustomText>
                        <CustomText font="RobotoRegular">Rüzgar Hızı: {cityData.wind.speed} m/s</CustomText>
                        <CustomText font="RobotoRegular">Nem: %{cityData.main.humidity}</CustomText>

                    </View>
                ) : null
            }

        </Container>
    );
}

