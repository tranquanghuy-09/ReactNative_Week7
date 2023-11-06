import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'

const homescreen = ({navigation}) => {
    var [data, setData] = React.useState([]);
    useEffect(() => {
        fetch('https://6509669ef6553137159b5c22.mockapi.io/api/v1/cafeworld')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
    }, []);
  return (
    <View style={styles.container}>
      <View style={styles.style1}>
        <Text style={{color: '#171A1F', fontSize: '24px', fontWeight: '700',}}>Welcome to Cafe world</Text>
      </View>
      <View style={styles.style2}>
        <FlatList
            data={data.slice(0, 3)}
            scrollEnabled={false}
            renderItem={({item}) => (
                <View style={{flex:1, flexDirection:'row', marginBottom: 70}}>
                    <Image source={{uri: item.image}} style={{width: 200, height: 73}} />
                </View>
            )}
            keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.style3}>
        <TouchableOpacity style={{backgroundColor: '#00BDD6', width: 312, height: 50, borderRadius: 6, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => navigation.navigate('ShopNearMe')}
        >
            <Text style={{textTransform: 'uppercase', fontSize: 14, color: '#FFF'}}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default homescreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'RGB(217, 221, 226)',
        alignItems: 'center',
        justifyContent:'center'
    },
    style1:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    style2:{
        flex:2,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    style3:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
})