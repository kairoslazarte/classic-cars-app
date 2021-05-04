import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import { Feather } from '@expo/vector-icons';

import renderHome from './screens/HomeScreen';
import renderAbout from './screens/AboutScreen';
import renderContact from './screens/ContactScreen';
import renderCar1940 from './screens/CarScreen1940';
import renderCar1950 from './screens/CarScreen1950';
import renderCar1960 from './screens/CarScreen1960';
import renderCar1970 from './screens/CarScreen1970';
import renderCar1980 from './screens/CarScreen1980';
import renderCar1990 from './screens/CarScreen1990';
import renderCar2000 from './screens/CarScreen2000';


const DrawerNavigator = createDrawerNavigator(
  {
  HomeScreen: {
    screen: renderHome,
    navigationOptions: {
      title: "Home",
      drawerIcon: () => <Feather name="home" size={16} color="rgb(143, 76, 0)" />
    }
  },
  AboutScreen: {
    screen: renderAbout,
    navigationOptions: {
      title: "About Us",
      drawerIcon: () => <Feather name="user" size={16} color="rgb(143, 76, 0)" />
    }
  },
  ContacttScreen: {
    screen: renderContact,
    navigationOptions: {
      title: "Contact Us",
      drawerIcon: () => <Feather name="edit" size={16} color="rgb(143, 76, 0)" />
    }
  },
  Cars1940: {
    screen: renderCar1940,
    navigationOptions: {
      title: "1940's Cars",
      drawerIcon: () => <Feather name="tool" size={16} color="rgb(143, 76, 0)" />
    }
  },
  Cars1950: {
    screen: renderCar1950,
    navigationOptions: {
      title: "1950's Cars",
      drawerIcon: () => <Feather name="tool" size={16} color="rgb(143, 76, 0)" />
    }
  },
  Cars1960: {
    screen: renderCar1960,
    navigationOptions: {
      title: "1960's Cars",
      drawerIcon: () => <Feather name="tool" size={16} color="rgb(143, 76, 0)" />
    }
  },
  Cars1970: {
    screen: renderCar1970,
    navigationOptions: {
      title: "1970's Cars",
      drawerIcon: () => <Feather name="tool" size={16} color="rgb(143, 76, 0)" />
    }
  },
  Cars1980: {
    screen: renderCar1980,
    navigationOptions: {
      title: "1980's Cars",
      drawerIcon: () => <Feather name="tool" size={16} color="rgb(143, 76, 0)" />
    }
  },
  Cars1990: {
    screen: renderCar1990,
    navigationOptions: {
      title: "1990's Cars",
      drawerIcon: () => <Feather name="tool" size={16} color="rgb(143, 76, 0)" />
    }
  },
  Cars2000: {
    screen: renderCar2000,
    navigationOptions: {
      title: "2000's Cars",
      drawerIcon: () => <Feather name="tool" size={16} color="rgb(143, 76, 0)" />
    }
  }
  },
  {
    drawerWidth: Dimensions.get("window").width * 0.95,
    hideStatusBar: true,
    contentOptions: {
      activeBackgroundColor: "rgba(167, 95, 0, 0.418)",
      activeTintColor: "rgb(143, 76, 0)",
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8
      },
      itemStyle: {
        borderRadius: 4
      }
    }
  }
);

export default createAppContainer(DrawerNavigator);