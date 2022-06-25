import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import styles from './Card.style';

function Card({ productts }) {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{ uri: productts.imgURL }} />
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{productts.title}</Text>
                <Text style={styles.price}>{productts.price}</Text>
                <Text style={productts.inStock ? styles.TrueColor : styles.FalseColor}>{productts.inStock === true ? 'STOKTA VAR' : 'STOKTA YOK'}</Text>
            </View>
        </SafeAreaView>
    );
};
export default Card;