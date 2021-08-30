import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
export default function Profile({route}) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textDesc}>คำชี้แจง: ทำแบบประเมินดังต่อไปนี้ให้ครบทุกข้อ</Text>
                <Text style={styles.textQuestion}>1. อายุ</Text>
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
                        <Text style={styles.textChoice}>12-18 ปี</Text>
                    </View>
                    <View style={styles.itemChoice}>
                        <RadioButton>
                            <RadioButtonInput 
                                isSelected={false}
                                buttonSize={14}
                                buttonInnerColor={'red'}
                                buttonOuterColor={'blue'}
                                
                            />
                        </RadioButton>
                        <Text style={styles.textChoice}>มากกว่า 18 ปี</Text>
                    </View>
                </RadioForm>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    textDesc:{
        marginTop: 8,
        marginBottom: 8,
        fontSize: 16,
        color: '#000',
    },
    textQuestion:{
        fontSize: 16,
        color: '#000',
        marginBottom: 8
    },
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
