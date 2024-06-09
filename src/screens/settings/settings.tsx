import { View, Text, ScrollView } from 'react-native'
import React, { ReactElement } from 'react'
import { GradienBackground } from '../../components'
import styles from './settings.styles'


export default function Settings():ReactElement
 {
  return (
    <GradienBackground>
    <ScrollView contentContainerStyle= {styles.container}>
     
    </ScrollView>
    </GradienBackground>
  )
}