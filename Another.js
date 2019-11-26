import React, { Component } from 'react'
import { Text, View, TextInput , Button, ScrollView} from 'react-native'
import styles from './styles'

export default class Another extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View>
          <Button style={styles.buttons} title = 'Another' onPress={() => this.props.navigation.navigate('Another')}/>
          <Button style={styles.buttons} title = 'Home' onPress={() => this.props.navigation.navigate('Home')}/>
        </View>
        <View styles = {styles.mainContainer}>
          <Text>Hello</Text>
        </View>
      </View>
    )
  }
}