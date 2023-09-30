import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";



export default function Pointer(props, ref) {
  const [rotate, setRotate] = useState(0);

  const decide = () => {
    let randomRotation = roundTo(rotate + 1080, 360);

    const max = 100;
    let numero = Math.floor(Math.random() * max);

    let decisao = numero % 2 == 0;
    let finalRotation = randomRotation;

    if (decisao)
      finalRotation += randomYes();
    else
      finalRotation += randomNo();
    setRotate(finalRotation);
  }

  const randomNo = () => {
    return randomNumber(21, 161);
  
  }
  const randomYes = () => {
    return randomNumber(201, 341);
  }

  const randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  }

  const roundTo = (number, roundTo) => {
    return number + ((roundTo - (number % roundTo)) % roundTo)
  }

    return (
        <TouchableOpacity onPress={decide}>
            <View style={styles.container}>
                <View style={styles.yesContainer}><View style={styles.yes} /></View>
                <View style={styles.noContainer}><View style={styles.no} /></View>

                <View style={[styles.pointer, { transform: `rotate(${rotate}deg)` }]}>
                    <View style={styles.arrowPoint} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        borderWidth: 8,
        borderColor: '#000',
        opacity: .5,
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    pointer: {
        width: '60%',
        height: 4,
        backgroundColor: '#FFF',
        position: 'relative',
        transition: '2s'
    },
    arrowPoint: {
        borderWidth: 8,
        width: 0,
        height: 0,
        borderColor: 'transparent',
        borderLeftColor: '#FFF',
        right: -10,
        top: -6,
        position: 'absolute'
    },

    yesContainer: {
        height: 50,
        width: 100,
        position: 'absolute',
        top: -8,
        left: -8,
        overflow: 'hidden'
    },

    yes: {
        width: 100,
        height: 100,
        borderWidth: 8,
        borderColor: 'green',
        borderRadius: '50%'
    },

    noContainer: {
        height: 50,
        width: 100,
        position: 'absolute',
        bottom: -8,
        left: -8,
        overflow: 'hidden',
        justifyContent: 'flex-end'
    },

    no: {
        width: 100,
        height: 100,
        borderWidth: 8,
        borderColor: 'red',
        borderRadius: '50%'
    }
})