import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Header({}) {
    const navigation = useNavigation()
    return (
        <>
            <Image style={styles.bg} source={require('../../assets/images/bg.jpeg')}/>
            <Image style={styles.profile} source={require('../../assets/images/profile.jpeg')}/>
            <Text style={styles.fullName}>Rosa  Erickson</Text>
            <View style={styles.buttonBox}>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate("FreindScreen",{ titleText: 'Wellcome', myName: 'Chanat Chumchan' })} 
                    style={[styles.button, {backgroundColor: '#EFF2F5',}]}
                >
                    <Text style={[styles.textButton, {color: '#000'}]}>เพื่อน</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: '#429db5',}]}>
                    <Text style={[styles.textButton, {color: '#fff'}]}>ส่งข้อความ</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                onPress={()=>navigation.navigate("EvaluationScreen")} 
                style={[styles.button, {backgroundColor: 'orange',marginTop: 10}]}>
                <Text style={[styles.textButton, {color: '#fff'}]}>ทำแบบประเมิน</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    textButton:{
        fontFamily: 'sarabun-medium',
        fontSize: 16,
    },
    button:{
        width: '45%',
        height: 42,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonBox:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: 16
    },
    fullName:{
        fontFamily: 'sarabun-semiBold',
        fontSize: 24,
        color: '#444',
        marginTop: 6
    },
    profile:{
        width: 160,
        height: 160,
        borderRadius: 80,
        borderColor: '#429db5',
        borderWidth: 4,
        marginTop: -80,
    },
    bg:{
        width: '100%',
        height: 180
    },
});
