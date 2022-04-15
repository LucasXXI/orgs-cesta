import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import { Texto } from '../../../components/Texto.js'
import imgFazenda from '../../../../assets/logo.png'

export const Detalhes = () => {

  return(
  <>
    <Texto style={styles.nomeDaCesta}>Cesta de Verduras</Texto>
    <View style={styles.fazenda}>
      <Image source={imgFazenda} style={styles.imgFazenda}/>
      <Texto style={styles.nomeFazenda}>Jenny Jack Farm</Texto>
    </View>
    <Texto style={styles.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto pra sua cozinha.</Texto>
    <Texto style={styles.preco}>R$ 40,00</Texto>
  </>
  )
}

const styles = StyleSheet.create({
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