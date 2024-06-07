import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React, { ReactElement } from 'react'
import styles from './button.styles'

type MyButtonProps = {
    title: string;
} & TouchableOpacityProps

export default function MyButton({title, ...props}: MyButtonProps): ReactElement {
  return (
        <TouchableOpacity {...props} style ={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
          </TouchableOpacity>
  )
}