import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from 'react-native-button';

class ChimeSelect extends React.Component{
  render() {
    return(
      <View style={styles.container}>
        <Button
          containerStyle={this.props.chime ? styles.buttonActive : styles.button}
          style={styles.inner}
          onPress={() => this.props.selectChime()}>
          Chimes
        </Button>
      </View>
    )
  }
}

export default ChimeSelect;

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    borderRadius: 10,
    height: '80%',
    margin: '2.5%',
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'transparent'
  },
  buttonActive: {
    borderColor: '#FF9900'
  },
  inner: {
    alignItems: 'center',
    fontSize: 30,
    color: 'white'
  }
});
