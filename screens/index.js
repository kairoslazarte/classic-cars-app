import React from 'react';
import ScreenHome from './HomeScreen';
import ScreenAbout from './AboutScreen';
import ScreenContact from './ContactScreen';
import ScreenCar1940 from './CarScreen1940';
import ScreenCar1950 from './CarScreen1950';
import ScreenCar1960 from './CarScreen1960';
import ScreenCar1970 from './CarScreen1970';
import ScreenCar1980 from './CarScreen1980';
import ScreenCar1990 from './CarScreen1990';
import ScreenCar2000 from './CarScreen2000';

export const renderHomeScreen = ({navigation}) => <ScreenHome navigation={navigation} />
export const renderAboutScreen = ({navigation}) => <ScreenAbout navigation={navigation} />
export const renderContactScreen = ({navigation}) => <ScreenContact navigation={navigation} />
export const render1940Screen = ({navigation}) => <ScreenCar1940 navigation={navigation} />
export const render1950Screen = ({navigation}) => <ScreenCar1950 navigation={navigation} />
export const render1960Screen = ({navigation}) => <ScreenCar1960 navigation={navigation} />
export const render1970Screen = ({navigation}) => <ScreenCar1970 navigation={navigation} />
export const render1980Screen = ({navigation}) => <ScreenCar1980 navigation={navigation} />
export const render1990Screen = ({navigation}) => <ScreenCar1990 navigation={navigation} />
export const render2000Screen = ({navigation}) => <ScreenCar2000 navigation={navigation} />