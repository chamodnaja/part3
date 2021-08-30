import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { database } from '../firebase'
export default function News({navigation}) {
    const [data,setData] = useState([])
    useEffect(()=>{
        getNews()
    }, [])
    const getNews = ()=>{
        database.collection("news").get().then(snapshot =>{
            let data_list = []
            snapshot.forEach(element=>{
                data_list.push(element.data())
            })
            setData(data_list)
        })
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    data.map((val,index)=>
                        <View key={index}>
                            <Text>{val.title}</Text> 
                            <Text>{val.detail}</Text> 
                            <Image source={{uri: val.image}} style={{width: 120, height: 120}}/>
                        </View>
                    )
                }
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
