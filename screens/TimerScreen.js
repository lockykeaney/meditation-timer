import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TimerScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 20
  },
  container: {
    backgroundColor: '#6976FF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
