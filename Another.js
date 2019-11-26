import React, { Component } from 'react'
import { Text, View, TextInput , Button, ScrollView} from 'react-native'
import styles from './styles'
import * as firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyBTtYHB82yQBQ8VjIt4BG_QNSSgr9eGako",
  authDomain: "testnativelogin.firebaseapp.com",
  databaseURL: "https://testnativelogin.firebaseio.com",
  storageBucket: "testnativelogin.appspot.com"
})


export default class Another extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  async signup(email, pass) {
    try {
        await firebase.auth()
            .createUserWithEmailAndPassword(email, pass)  
        console.log("Account created");
        this.props.navigation.navigate('Home')
    } catch (error) {
        console.log(error.toString())
    }
  }
  render() {
    return (
      <View style = {styles.container}>
        <View styles = {styles.mainContainer}>
          <TextInput placeholder="Type here..." onChangeText={email => this.setState({email})} value={this.state.email}/>
          <TextInput placeholder="password" value={this.state.password} onChangeText={password => this.setState({password})}/>  
          {/* <Button title="Create Account" onPress={()=>console.log(this.state.email, this.state.password)}/> */}
          <Button title="Create Account" onPress={()=> this.signup(this.state.email, this.state.password)}/>
        </View>
      </View>
    )
  }
}