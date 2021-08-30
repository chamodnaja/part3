import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
export default function Profile({route}) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>คำชี้แจง: ทำแบบประเมินดังต่อไปนี้ให้ครบทุกข้อ</Text>
                
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
