import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navigator from './navigator/index'
import loadResource from './hooks/loadResource';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#397AF9',
    accent: 'yellow',
    background: '#f6f6f6',
  },
};
export default function App() {
  const isLoadingComplete = loadResource();
  if(!isLoadingComplete){
    return null
  }else{
    return (
      <SafeAreaView style={{flex: 1}}>
          <StatusBar style="auto" />
          <PaperProvider theme={theme}>
            <Navigator/>
          </PaperProvider>
      </SafeAreaView>
    );
  }
}