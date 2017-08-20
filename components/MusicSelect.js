import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from 'react-native-button';

class MusicSelect extends React.Component{
  render() {
    return(
      <View style={styles.container}>
        <Button
          containerStyle={this.props.music ? styles.buttonActive : styles.button}
          style={styles.inner}
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
    width: '50%',
    borderRadius: 10,
    height: '80%',
    margin: '2.5%',
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  buttonActive: {
    borderColor: '#FF9900'
  },
});
