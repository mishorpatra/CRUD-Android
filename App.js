import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  useFonts,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_700Bold
} from '@expo-google-fonts/josefin-sans'
import { 
  Nunito_600SemiBold,
  Nunito_700Bold
} from '@expo-google-fonts/nunito'
import AppLoading from 'expo-app-loading';

//screens
import Home from './src/screens/Home'
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';


export default function App() {

  let [fontsLoaded] = useFonts({
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_700Bold,
    Nunito_600SemiBold,
    Nunito_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown: false}}>{(props) => <Home {...props} channelName={'Barefoot Education'} />}</Stack.Screen>
        <Stack.Screen name="About" options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Nunito_600SemiBold'
          },
          headerTitleAlign: 'center'
        }} component={About} />
        <Stack.Screen name="Contact" component={Contact} options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Nunito_600SemiBold'
          },
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name="Courses" options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Nunito_600SemiBold'
          },
          headerTitleAlign: 'center'
        }} component={Course} />
        <Stack.Screen name="Students" options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Nunito_600SemiBold'
          },
          headerTitleAlign: 'center'
        }} component={UserData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
