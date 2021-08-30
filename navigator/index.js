// In App.js in a new project

import * as React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from '../screens/profile'
import FreindScreen from '../screens/freind'
import NewsScreen from '../screens/news'
import EvaluationScreen from '../screens/evaluation'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function NewsStack() {
    return (
        
            <Stack.Navigator>
                <Stack.Screen name="NewsScreen" component={NewsScreen} options={{title: 'ข่าวสาร'}} />
            </Stack.Navigator>
       
  );
}

function MainStack() {
    return (
      
            <Stack.Navigator>
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{title: 'หน้าหลัก'}} />
                <Stack.Screen name="FreindScreen" component={FreindScreen} options={{title: 'รายชื่อเพื่อน'}}/>
                <Stack.Screen name="EvaluationScreen" component={EvaluationScreen} options={{title: 'แบบประเมิน'}}/>
            </Stack.Navigator>
     
  );
}

function App(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === 'NewsStack') {
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                      } else if (route.name === 'MainStack') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                      }
          
                      // You can return any component that you like here!
                      return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                  })}
            >
                <Tab.Screen name="NewsStack" component={NewsStack} options={{headerShown: false, title: 'ข่าวสาร'}} />
                <Tab.Screen name="MainStack" component={MainStack} options={{headerShown: false, title: 'ข้อมูลส่วนตัว'}}/>
            </Tab.Navigator>
        </NavigationContainer> 
    )
}

export default App;