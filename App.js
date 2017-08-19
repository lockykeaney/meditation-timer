import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import TimerSelect from './components/TimerSelect';
// import StartTimer from './components/StartTimer';

const timerArray = [2,5,10,20]

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      timer: null,
      chime: false,
      music: false
    }
  }

  startTimer = () => {
    console.log('starting timer');
    console.log(this.state);
  }
  selectTimer = (selection) => {
    const timer = selection*60;
    this.setState({ timer })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>How long would you like you session?</Text>

        <TimerSelect timerArray={timerArray} selectTimer={this.selectTimer} />

        <Text>Would you like interval times or music?</Text>

          <Button
            style={button.inner}
            containerStyle={button.container}
            onPress={() => this.startTimer()}>
              Start
          </Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const button = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'blue',
    width: '60%',
    height: '10%'
  },
  inner: {
    color: 'white'
  }
});
