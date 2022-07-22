import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoiCalculator from './screens/RoiCalculator';
import MathCaculator from './screens/MathCaculator';
import SelectCalculator from './screens/SelectCalculator';

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="SelectCaculator" >
          <Stack.Screen name='SelectCaculator' component={SelectCalculator}/>
          <Stack.Screen name='RoiCalculator' component={RoiCalculator}/>
          <Stack.Screen name='MathCalculator' component={MathCaculator}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}


