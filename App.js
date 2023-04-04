import { Home } from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductDetail } from './src/screens/ProductDetail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Cart } from './src/screens/Cart';
import { store } from './src/app/store'
import { Provider, useSelector } from 'react-redux'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackComponent = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
          name="Home" 
          component={Home}
      />
      <Stack.Screen
          name="Product detail" 
          component={ProductDetail}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  const { products } = useSelector((state) => state)
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product detail" component={ProductDetail} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          // component={Home} 
          component={StackComponent} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" size={24} color="red"/>
            ),
            headerShown: false
          }}
        />
        <Tab.Screen 
          name="Cart" 
          component={Cart} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <MaterialCommunityIcons name="cart" size={24} color="red"/>
            ),
            tabBarBadge: products.length || null
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

export default () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
