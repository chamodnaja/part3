import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
export default function Friend() {
  return (
    <>
        <View style={styles.friend}>
            <Text style={styles.friendTitle}>เพื่อน</Text>
            <Text style={styles.friendCountText}>1,518 (ร่วมกัน 192 คน)</Text>
            <View style={styles.friendList}>
                <View style={styles.friendBox}>
                    <Image style={styles.friendImage} source={require('../../assets/images/friend_1.jpeg')}/>
                    <Text style={styles.friendName}>Mary Luciani</Text>
                </View>
                <View style={styles.friendBox}>
                    <Image style={styles.friendImage} source={require('../../assets/images/friend_2.jpeg')}/>
                    <Text style={styles.friendName}>Frank Glessner</Text>
                </View>
                <View style={styles.friendBox}>
                    <Image style={styles.friendImage} source={require('../../assets/images/friend_3.jpeg')}/>
                    <Text style={styles.friendName}>Nancy Miller</Text>
                </View>
            </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    friendName:{
        fontFamily: 'sarabun-bold',
        fontSize: 14,
    },
    friendImage:{
        width: '100%',
        height: 100,
        borderRadius: 8
    },
    friendBox:{
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    friendList:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
    friendCountText:{
        fontFamily: 'sarabun-light',
        fontSize: 14,
        color: '#888'
    },
    friendTitle:{
        fontFamily: 'sarabun-bold',
        fontSize: 16,
    },
    friend:{
        width: '90%',
        marginTop: 8,
    },
});
