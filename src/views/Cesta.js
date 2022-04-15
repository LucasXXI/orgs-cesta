import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import { Texto } from '../components/Texto';
import topo from '../../assets/topo.png';
import imgFazenda from '../../assets/logo.png'

const width = Dimensions.get('screen').width;

export const Cesta = () => {
  return(
    <>
      <Image source={topo} style={styles.topo}/>
      <Texto style={styles.titulo}>Detalhes da Sexta</Texto>
      <View style={styles.cesta}>
        <Texto style={styles.nomeDaCesta}>Cesta de Verduras</Texto>
        <View style={styles.fazenda}>
          <Image source={imgFazenda} style={styles.imgFazenda}/>
          <Texto style={styles.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={styles.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto pra sua cozinha.</Texto>
        <Texto style={styles.preco}>R$ 40,00</Texto>
      </View>
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

  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },

  nomeDaCesta: {
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
  },

  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12,
  },

  imgFazenda: {
    width: 32,
    height: 32,
  },

  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },

  descricao: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },

  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8
  }
})