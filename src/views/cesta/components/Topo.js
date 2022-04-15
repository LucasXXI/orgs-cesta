import React from 'react'
import { Image, StyleSheet, Dimensions  } from 'react-native'
import {  Texto  } from '../../../components/Texto.js'
import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width

export const Topo = () => {

  return (
    <>
      <Image source={topo} style={styles.topo}/>
      <Texto style={styles.titulo}>Detalhes da Sexta</Texto>
    </>
  )
}

const styles = StyleSheet.create({
  topo: {
    width: '100%',
    height: 578/768 * width
  },

  titulo: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    color: 'white',
    padding: 16
  },
})