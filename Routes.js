import React, { Component } from "react";
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Home from "./Home";
import Another from './Another'

const Project= createStackNavigator({
  Home: {
   screen: Home
  },
  Another: {
      screen: Another
  }
},
{
    initialRouteName: 'Home'
})

export default createAppContainer(Project)
