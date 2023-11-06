import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, SafeAreaView} from 'react-native'
import React, {useEffect} from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

const shopnearme = ({navigation}) => {
    var [data, setData] = React.useState([]);
    useEffect(() => {
        fetch('https://6509669ef6553137159b5c22.mockapi.io/api/v1/cafeworld')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
    }, []);
  return (
    <SafeAreaView style={{backgroundColor: 'rgba(243, 244, 246, 1)', }}>
         <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: "100%",
                marginTop: 0,
                paddingHorizontal: 10,
                backgroundColor: 'rgba(243, 244, 246, 1)',
                height: 60,
                position: 'fixed',
                zIndex: 1,
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{width: "15%", paddingLeft: 10}}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 24, fontWeight: 700, width: "73%"}}>Shops Near Me</Text>
                <Ionicons name="search" size={24} color="green" style={{width: "12%"}}/>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop:60,}}>
                <FlatList
                    data={data}
                    scrollEnabled={false}
                    renderItem={({item}) => (
                        <View style={{width: 347, height: 200, borderRadius: 6, marginTop: 20, alignItems: '', backgroundColor: 'rgba(255, 255, 255, 1)'}}>
                            <TouchableOpacity onPress={()=>navigation.navigate({
                                name: 'DrinkScreen',
                                params: {list : item.list_items},
                            })}>
                                <Image source={{uri: item.image}} style={{width: 347, height:114, borderRadius: 6}} />
                            </TouchableOpacity>
                            
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 7,marginLeft: 2}}>
                                <View style={{backgroundColor: "rgba(243, 244, 246, 1)", width: item.status === "Accepting Orders"?161:177, height: 30, paddingHorizontal: 2,
                                    borderWidth: 0, flexDirection: 'row', alignItems: 'center', }}>
                                    {item.status === "Accepting Orders"?<Ionicons name="checkmark" size={20} color="green" />:<Ionicons name="ios-basket-sharp" size={20} color="red" />}
                                    <Text style={{fontSize: 14, marginLeft: 5, color: item.status==="Accepting Orders"?'rgba(29, 215, 91, 1)':'rgba(222, 59, 64, 1)'}}>{item.status}</Text>
                                </View>
                                <View style={{backgroundColor: "rgba(243, 244, 246, 1)", width: 137, height: 30, paddingHorizontal: 5, marginLeft: 5,
                                    borderWidth: 0, flexDirection: 'row', alignItems: 'center',}}>
                                    <AntDesign name="clockcircleo" size={18} color="green" />
                                    <Text style={{fontSize: 14, color: 'rgba(222, 59, 64, 1)', marginLeft: 5}}>{item.waiting}</Text>
                                </View>
                                <Ionicons name="location-sharp" size={24} color="green" />
                            </View>
                            <Text style={{fontWeight: 700, fontSize: 16, marginTop: 2, marginLeft: 7,lineHeight: 26, color: 'rgba(23, 26, 31, 1)'}}>{item.name}</Text>
                            <Text style={{fontSize: 14, color: 'rgba(23, 26, 31, 1)', marginTop: 2, marginLeft: 7, lineHeight: 22}}>{item.address}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={{height: 50}}>

            </View>
        </SafeAreaView>
    )
}

export default shopnearme

const styles = StyleSheet.create({})