import React, {Component, useState} from 'react'
import {View, Text, Button, Alert, StyleSheet} from 'react-native'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "teste"
    };
   }

   _alterar() {
    this.setState({
      name: "Alterou"
    })
   }

  render() {
    return(
      <View style={styles.Container}>
        <Text> {this.state.name} </Text>
        <Button
  onPress={this._alterar.bind(this)}
  title="Click-me"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})