import React, { Component } from 'react'
import { Text, View, TextInput , Button, ScrollView,  KeyboardAvoidingView } from 'react-native'
import styles from './styles'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      mapping: []
    }
    this.send = this.send.bind(this)
  }

  send() { 
    if(this.state.text!==''){
      this.setState({mapping: [...this.state.mapping, this.state.text]})
      this.setState({text: ''})
    }
    else {
      return 
    }
  }

  render() {
    let number = 0
    return (
      <KeyboardAvoidingView 
      keyboardVerticalOffset = {80}
      behavior={ "padding"}
      style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.headerChat}>
          <Button title = 'Another' onPress={() => this.props.navigation.navigate('Another')}/>
          <Button title = 'Home' onPress={() => this.props.navigation.navigate('Home')}/>
          </View>
          <View style={styles.mainContainer}>
          <ScrollView style = {styles.chat}>       
              {this.state.mapping.map(word => <View key={number++} style = {number%2==0?styles.left:styles.right}><Text style = {number%2==0?styles.textLeft:styles.textRight}>{word}</Text></View>)}   
            </ScrollView>   
            <TextInput style={styles.input} placeholder="Type here..." onChangeText={text => this.setState({text})} value={this.state.text}/>
            <Button title="pressMe" onPress={this.send}></Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}