import { View, Text, TouchableOpacity } from 'react-native'
import React, { ReactElement } from 'react'
import styles from './button.styles'



export default function MyButton(): ReactElement {
  return (
        <TouchableOpacity style ={styles.button}>
            <Text style={styles.buttonText}>Single Player</Text>
          </TouchableOpacity>
  )
}