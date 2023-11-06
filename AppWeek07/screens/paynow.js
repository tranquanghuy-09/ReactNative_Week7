import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'

const totalorder = ({route, navigation}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
      setTotalPrice(route.params.totalPrice);
    }, [route.params]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 50, color: 'tomato'}}>PayNow - {totalPrice}$</Text>
      <Text style={{width: '100%', textAlign: 'right', marginRight: 20}}>by tranquanghuyit09</Text>
    </View>
  )
}

export default totalorder

const styles = StyleSheet.create({})