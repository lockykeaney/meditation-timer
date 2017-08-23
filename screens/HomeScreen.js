import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import TimerSelect from '../components/TimerSelect';
import OptionSelect from '../components/OptionSelect';
import TimerStart from '../components/TimerStart';

export default class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Session Length</Text>
        <TimerSelect timerArray={this.props.timerArray} selectTimer={this.props.selectTimer} />
        <OptionSelect selectChime={this.props.selectChime} selectMusic={this.props.selectMusic} />
        <TimerStart startTimer={this.props.startTimer} />
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
