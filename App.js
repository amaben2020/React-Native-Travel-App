import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Onboarding, Search } from './screens';
import { BottomNavigation } from './components';
export * as Splashscreen from 'expo-splash-screen';

export default function App() {
  const Stack = createNativeStackNavigator();
  // loading fonts
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/regular.otf'),
    medium: require('./assets/fonts/medium.otf'),
    bold: require('./assets/fonts/bold.otf'),
    light: require('./assets/fonts/light.otf'),
    xtrabold: require('./assets/fonts/xtrabold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await Splashscreen.hideAsync();
    }
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Onboarding}
          name="Onboard"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          component={BottomNavigation}
          name="Bottom"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          component={Search}
          name="Search"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: 'bold',
    fontSize: 24,
  },
});
