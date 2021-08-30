import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
export default function LoadResource() {
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
        try {
            SplashScreen.preventAutoHideAsync();
            // Load fonts
            await Font.loadAsync({
                'sarabun-bold': require('../assets/fonts/Sarabun/Sarabun-Bold.ttf'),
                'sarabun-light': require('../assets/fonts/Sarabun/Sarabun-Light.ttf'),
                'sarabun-medium': require('../assets/fonts/Sarabun/Sarabun-Medium.ttf'),
                'sarabun-semiBold': require('../assets/fonts/Sarabun/Sarabun-SemiBold.ttf'),
                'sarabun-thin': require('../assets/fonts/Sarabun/Sarabun-Thin.ttf'),
            });
            
        } catch (e) {
            console.warn(e);
        } finally {
            setLoading(true);
            SplashScreen.hideAsync();
        }
    }
    loadResourcesAndDataAsync();
  }, []);

  return loading;
}
