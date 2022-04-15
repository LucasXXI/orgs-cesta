import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import { Texto } from '../../../components/Texto.js'

export const Detalhes = ({ nomeDaFazenda, nomeDaCesta, preco, descricao, logo }) => {

  return(
  <>
    <Texto style={styles.nomeDaCesta}>{nomeDaCesta}</Texto>
    <View style={styles.fazenda}>
      <Image source={logo} style={styles.imgFazenda}/>
      <Texto style={styles.nomeFazenda}>{nomeDaFazenda}</Texto>
    </View>
    <Texto style={styles.descricao}>{descricao}</Texto>
    <Texto style={styles.preco}>{preco}</Texto>
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