import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from 'react-native-button';

class MusicSelect extends React.Component{
  render() {
    return(
      <View style={styles.container}>
        <Button
          containerStyle={this.props.music === true ? styles.buttonActive : styles.button}
          style={styles.inner === true ? styles.innerActive : styles.inner}
          onPress={() => this.props.selectMusic()}>
          Music
        </Button>
      </View>
    )
  }
}

export default MusicSelect;

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
    backgroundColor: 'white',
    borderColor: '#FF9900'
  },
  inner: {
    alignItems: 'center',
    fontSize: 30,
    color: 'white'
  },
  innerActive: {
    alignItems: 'center',
    fontSize: 30,
    color: '#FF9900'
  }
});
