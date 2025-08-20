import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import หน้า
import ScreenA from './screen/ScreenA';
import ScreenB from './screen/ScreenB';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="A">
        <Stack.Screen name="A" component={ScreenA} />
        <Stack.Screen name="B" component={ScreenB} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
