import React, { Component } from 'react';
import { View , Text } from 'react-native';

import styles from './Register.style';

export default class Register extends Component {

  componentDidMount(){

  }

  render(){
    return (
      <View style={styles.container}>
        <Text onPress={() => this.props.navigation.navigate('AuthNavigation')}>
          Register
        </Text>
      </View>
    );
  }
}