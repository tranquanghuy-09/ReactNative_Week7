import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import React, {useEffect} from 'react'

const drinkscreen = ({route, navigation}) => {
    var [data, setData] = React.useState([]);
    // var [data, setData] = React.useState([{
    //     "name": "Milk",
    //     "price": 20,
    //     "image": "https://res.cloudinary.com/tranquanghuyit09/image/upload/v1698742913/reactnative-week7-cafeworld/eo8yqsiu1q2qzyx6mxpi.png"
    // },
    // {
    //     "name": "Origin",
    //     "price": 68,
    //     "image": "https://res.cloudinary.com/tranquanghuyit09/image/upload/v1698742913/reactnative-week7-cafeworld/eo8yqsiu1q2qzyx6mxpi.png"
    // },
    // {
    //     "name": "Culi",
    //     "price": 1,
    //     "image": "https://res.cloudinary.com/tranquanghuyit09/image/upload/v1698742914/reactnative-week7-cafeworld/zjjofzsc9ladhxqibodb.png"
    // },
    // {
    //     "name": "Espresso",
    //     "price": 9,
    //     "image": "https://res.cloudinary.com/tranquanghuyit09/image/upload/v1698742914/reactnative-week7-cafeworld/v6abdhs7mbnaugrwijfb.png"
    // },
    // {
    //     "name": "Capuchino",
    //     "price": 23,
    //     "image": "https://res.cloudinary.com/tranquanghuyit09/image/upload/v1698742913/reactnative-week7-cafeworld/eo8yqsiu1q2qzyx6mxpi.png"
    // },
    // {
    //     "name": "Weasel",
    //     "price": 20,
    //     "image": "https://res.cloudinary.com/tranquanghuyit09/image/upload/v1698742914/reactnative-week7-cafeworld/v6abdhs7mbnaugrwijfb.png"
    // },
    // {
    //     "name": "Culi",
    //     "price": 1,
    //     "image": "https://res.cloudinary.com/tranquanghuyit09/image/upload/v1698742914/reactnative-week7-cafeworld/zjjofzsc9ladhxqibodb.png"
    // },
    // {
    //     "name": "Catimor",
    //     "price": 9,
    //     "image": "https://res.cloudinary.com/tranquanghuyit09/image/upload/v1698742913/reactnative-week7-cafeworld/ssn37c6opzuxow9o2gek.png"
    // }]);
    useEffect(() => {
        setData(route.params.list);
    }, [route.params]);

    const [productQuantities, setProductQuantities] = React.useState({});
    // const handleIncrement = (product) => {
    //     setProductQuantities(prevQuantities => ({
    //         ...prevQuantities,
    //         [product.name]: (prevQuantities[product.name] || 0) + 1
    //     }));
    // };8
    
    // const handleDecrement = (product) => {
    //     if (productQuantities[product.name] > 0) {
    //         setProductQuantities(prevQuantities => ({
    //             ...prevQuantities,
    //             [product.name]: prevQuantities[product.name] - 1
    //         }));
    //     }
    // };

    const [selectedProducts, setSelectedProducts] = React.useState([]);
    const handleIncrement = (product) => {
        setProductQuantities(prevQuantities => ({
            ...prevQuantities,
            [product.name]: (prevQuantities[product.name] || 0) + 1
        }));
    
        const updatedProducts = [...selectedProducts];
        const existingProductIndex = updatedProducts.findIndex((p) => p.name === product.name);
    
        if (existingProductIndex !== -1) {
            updatedProducts[existingProductIndex].quantity += 1;
        } else {
            updatedProducts.push({ name: product.name, quantity: 1, price: product.price, image: product.image});
        }
    
        setSelectedProducts(updatedProducts);
    };
    
    const handleDecrement = (product) => {
                if (productQuantities[product.name] > 0) {
            setProductQuantities(prevQuantities => ({
                ...prevQuantities,
                [product.name]: prevQuantities[product.name] - 1
            }));
        }
        const updatedProducts = [...selectedProducts];
        const existingProductIndex = updatedProducts.findIndex((p) => p.name === product.name);
    
        if (existingProductIndex !== -1) {
            if (updatedProducts[existingProductIndex].quantity > 1) {
                updatedProducts[existingProductIndex].quantity -= 1;
            } else {
                updatedProducts.splice(existingProductIndex, 1);
            }
    
            setSelectedProducts(updatedProducts);
        }
    };
    
    console.log(selectedProducts);
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(243, 244, 246, 1)'}}>
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
                    <Text style={{ fontSize: 24, fontWeight: 700, width: "73%", lineHeight: 36}}>Drinks</Text>
                    <Ionicons name="search" size={24} color="green" style={{width: "12%"}}/>
            </View>
            <View style={{}}>
                <View style={{marginTop: 60, justifyContent: 'center', alignItems: 'center', }}>
                    <FlatList
                        data={data}
                        renderItem={({item}) => (
                            <View style={{width: 350, height: 64, borderWidth: 1, borderColor: 'rgba(188, 193, 202, 1)', marginTop: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <View style={{flexDirection: 'row', height: '100%'}}>
                                    <Image source={{uri: item.image}} style={{width: 60, height: 60, borderRadius: 4}} />
                                    <View style={{justifyContent: 'space-between', height: "100%", marginLeft: 12}}>
                                        <Text style={{fontSize: 16, fontWeight: 500, lineHeight: 26, color: 'rgba(23, 26, 31, 1)'}}>{item.name}</Text>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Ionicons name="play-outline" size={12} color="black" />
                                            <Text style={{fontSize: 12, lineHeight: 20, color: 'rgba(86, 94, 108, 1)'}}>${item.price}</Text>
                                        </View>
                                        
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 17}}>
                                    <Ionicons name="remove-circle-sharp" size={24} color="green" onPress={() => handleDecrement(item)} />
                                    <Text style={{ width: 40, textAlign: 'center'}}>{productQuantities[item.name] || 0}</Text>
                                    <Ionicons name="add-circle" size={24} color="green" onPress={() => handleIncrement(item)} />
                                </View>
                                
                            </View>
                        )}
                    />
                </View>
                <View style={{marginTop: 57, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity
                        style={{backgroundColor: 'rgba(239, 176, 52, 1)', borderRadius: 6, width: 347, height: 44, justifyContent: 'center', alignItems: 'center'}}
                        onPress={() => {
                            navigation.navigate('YourOrders', { selectedProducts });
                        }}
                    >
                    <Text style={{textTransform: 'uppercase', color: 'rgba(255, 255, 255, 1)', fontSize: 16, lineHeight: 26}}>Go to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default drinkscreen

const styles = StyleSheet.create({})