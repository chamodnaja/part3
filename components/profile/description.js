import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Description() {
  return (
    <>
        <View style={styles.descriptionBox}>
            <View style={styles.inlineTextBox}>
                <Text style={styles.titleText}>อาศัยอยู่ที่</Text>
                <Text style={styles.descText}>มหาสารคาม</Text>
            </View>
            <View style={styles.inlineTextBox}>
                <Text style={styles.titleText}>สาขาวิชา</Text>
                <Text style={styles.descText}>เทคโนโลยีการศึกษาและคอมพิวเตอร์ศึกษา</Text>
            </View>
            <View style={styles.inlineTextBox}>
                <Text style={styles.titleText}>คณะ</Text>
                <Text style={styles.descText}>ศึกษาศาสตร์</Text>
            </View>
            <View style={styles.inlineTextBox}>
                <Text style={styles.titleText}>มีผู้ติดตาม</Text>
                <Text style={styles.descText}>128 คน</Text>
            </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    descText:{
        fontFamily: 'sarabun-bold',
        fontSize: 14,
    },
    titleText:{
        fontFamily: 'sarabun-light',
        marginRight: 4,
        fontSize: 14,
    },
    inlineTextBox:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    descriptionBox:{
        width: '90%',
        marginTop: 16
    },
    
});
