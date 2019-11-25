import React, { Component } from 'react'
import { Text, View, TextInput , Button, ScrollView} from 'react-native'
import styles from './styles'

class TextContainer extends Component {
  render() {
    return (
    <View style={[styles.commonCss, styles[this.props.name]]}>
      <Text>{this.props.name==='header'?'Chat':this.props.name}</Text>   
    </View>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameHeader: 'header',
      nameMenu: 'menu',
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
      <View style={styles.container}>
        <TextContainer name={this.state.nameHeader}/>
        <View style={styles.mainContainer}>
          <TextContainer name={this.state.nameMenu}/>
          <View style={styles.realMainContainer}>
            <TextInput style={styles.input} placeholder="Type here..." onChangeText={text => this.setState({text})} value={this.state.text}/>
            <Button title="pressMe" onPress={this.send}></Button>
            <ScrollView style = {styles.chat}>       
              {this.state.mapping.map(word => <View key={number++} style = {number%2==0?styles.left:styles.right}><Text style = {number%2==0?styles.textLeft:styles.textRight}>{word}</Text></View>)}   
            </ScrollView>   
          </View>
        </View>
      </View>
    )
  }
}