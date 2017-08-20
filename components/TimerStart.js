import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from 'react-native-button';

class TimerStart extends React.Component{
  render() {
    return(
      <Button
        style={button.inner}
        containerStyle={button.container}
        onPress={() => this.props.startTimer()}>
          Start
      </Button>
    )
  }
}

export default TimerStart;

const button = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'blue',
    width: '60%',
    height: '10%',
    margin: 20
  },
  inner: {
    color: 'white'
  }
});
