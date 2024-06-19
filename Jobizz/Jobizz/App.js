import Login from './screens/LoginPage.js';
import Home from './screens/HomePage.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Font } from 'expo';
import * as React from 'react';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  // componentDidMount() {
  //   Font.loadAsync({
  //     'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
  //   });
  // }

  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  React.useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>; // Or any loading indicator
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Log In'>
        <Stack.Screen 
          name="Log In" 
          component={Login} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{headerShown: false}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

