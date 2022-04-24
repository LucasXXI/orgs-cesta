import { StyleSheet, TouchableOpacity, } from 'react-native'
import { Texto } from './Texto'
import React from 'react'

export const Botao = ({  children  }) => {

  return (
    <TouchableOpacity style={styles.botao}>
      <Texto style={styles.textoBotao}>{children}</Texto>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  botao:{
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6
  },

  textoBotao:{
    textAlign: 'center',
    color: "#FFFF",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold'
  }
})