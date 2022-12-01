import * as React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { block, color } from "react-native-reanimated";


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
    <View style={{flex:1, justifyContent: "center", backgroundColor:"white"}}>
      <Text style={styles.text}>
      Heeft u eventueel een vraag aan onze team? Contacteer ons en we antwoorden zo snel als mogelijk!
    </Text>
<View style={{ borderWidth:1,  alignItems: "center", backgroundColor: "lightgrey"}}>


        <Text style={styles.textForm}>Voornaam:</Text>
        <TextInput
        style={styles.input}
                secureTextEntry={false}
                autoCapitalize="characters"
                placeholder="Type jouw voornaam"
                keyboardType="default"
            />

    <Text style={styles.textForm}>Achternaam:</Text>

    <TextInput
    style={styles.input}
                secureTextEntry={false}
                autoCapitalize="characters"
                placeholder="Type je achternaam"
                keyboardType="default"
                
            />
    
    <Text style={styles.textForm}>Email:</Text>

    <TextInput
    style={styles.input}
                secureTextEntry={false}
                autoCapitalize="characters"
                placeholder="Type jouw email"
                keyboardType="default"
                
            />
    
    
    <Text style={styles.textForm}>Bericht:</Text>
    
    <TextInput
    style={styles.textBericht}
    secureTextEntry={false}
    multiline={true}
    numberOfLines={4}
    keyboardType="default"
    />
    <Button title="Verzenden" />
</View>
    </View>
  );
}
const styles = StyleSheet.create({

  input: {
    height: 40,
    margin: 12,
    width:150,
    borderWidth: 1,
    borderRadius:5,
    padding: 10,
    backgroundColor: "white"
    
  },
  text: {

textAlign: "center",
fontSize:20,
fontWeight: "bold"

  },

  textBericht:{
  height: 100,
  width:150,
  borderWidth: 1,
  borderRadius:5,
  padding:10,
  fontFamily: "Roboto",
  backgroundColor: "white"
  
  },

  textForm:{
    fontSize:20
  }
});
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
          tabBarIcon: ({color,size}) => <AntDesign name="contacts" size={size} color={color} />}}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;