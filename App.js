import { Home } from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductDetail } from './src/screens/ProductDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product detail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
