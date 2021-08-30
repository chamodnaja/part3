import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
export default function Profile({route}) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>คำชี้แจง: ทำแบบประเมินดังต่อไปนี้ให้ครบทุกข้อ</Text>
                <RadioForm formHorizontal={false} >
                    <View style={styles.itemChoice}>
                        <RadioButton>
                            <RadioButtonInput 
                                isSelected={true}
                                buttonSize={14}
                                buttonInnerColor={'red'}
                                buttonOuterColor={'blue'}
                                
                            />
                        </RadioButton>
                        <Text style={styles.textChoice}>ตัวเลือกที่ 1</Text>
                    </View>
                </RadioForm>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    textChoice:{
       marginLeft: 6 
    },
    itemChoice: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 8,
    },
});
