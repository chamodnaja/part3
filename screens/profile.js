import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from '../components/profile/header';
import Description from '../components/profile/description';
import Friend from '../components/profile/friend';

export default function Profile({navigation}) {
  return (
      <ScrollView>
        <View style={styles.container}>
            <Header/>
            <Description/>
            <Friend/>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});
