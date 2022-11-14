import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello world</Text>
    </View>
  );
}
const PredictScreen = ()=> {
  return (
    <View style={{flex :1,justifyContent: "center", alignItems: "center"}}>
      
    </View>
  )
}

const ContactusScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({color, size}) => <MaterialIcons name="home" size={size} color={color} />
        }} />
        <Tab.Screen name="Live Score" component={PredictScreen}  options={{
        tabBarIcon: ({color,size}) => <FontAwesome name="product-hunt" size={size} color={color}/>
      }} />
        <Tab.Screen name="Contact us" component={ContactusScreen} options={{
          tabBarIcon: ({color,size}) => <AntDesign name="contacts" size={size} color={color} />
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;