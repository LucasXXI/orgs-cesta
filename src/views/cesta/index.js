import React from 'react';
import { StyleSheet,View } from 'react-native';
import { Topo } from './components/Topo'
import { Detalhes } from './components/Detalhes'

export const Cesta = () => {
  return(
    <>
      <Topo/>
      <View style={styles.cesta}>
        <Detalhes/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
})