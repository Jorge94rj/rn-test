import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Articles from './src/screens/Articles';
import Article from './src/screens/Article';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Articles} options={{ headerShown: false }} />
          <Stack.Screen name="Article" component={Article} options={{ headerTitle: 'Back' }} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
