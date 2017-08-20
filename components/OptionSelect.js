import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from 'react-native-button';
import ChimeSelect from './ChimeSelect';
import MusicSelect from './MusicSelect';

class OptionSelect extends React.Component{
  render() {
    return(
      <View style={styles.container}>
        <ChimeSelect selectChime={this.props.selectChime} />
        <MusicSelect selectMusic={this.props.selectMusic} />
      </View>
    )
  }
}

export default OptionSelect;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '90%',
    height: '15%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
