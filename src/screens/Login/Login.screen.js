import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Login.style';
import HeaderAddPhoto from '../../components/HeaderAddPhoto';

export default class Login extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: () => (<HeaderAddPhoto />)
  })

  componentDidMount(){

  }

  render(){
    return (
      <View style={styles.container}>
        <Text onPress={() => this.props.navigation.navigate('Register')}>
          Login
        </Text>
      </View>
    );
  }
}