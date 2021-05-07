import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import {colors} from './theme';
import Cities from './Cities/Cities';
import City from './Cities/City';
import AddCity from './AddCity/AddCity';

import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const options = {
  navigationsOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: '#fff',
  },
};

const CitiesNav = createStackNavigator({
  Cities: {screen: Cities},
  City: {screen: City},
});

const Tabs = createBottomTabNavigator({
  Cities: {screen: CitiesNav},
  AddCity: {screen: AddCity},
});

const Lauro2 = () => (
  <View>
    <Text style={{marginTop: 30}}>da Index</Text>
    {/* <Button></Button> */}
  </View>
);

export default Lauro2;

// export default Tabs;
