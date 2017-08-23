import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import { StackNavigator } from 'react-navigation';

// import TimerSelect from './components/TimerSelect';
// import OptionSelect from './components/OptionSelect';
// import TimerStart from './components/TimerStart';
import HomeScreen from './screens/HomeScreen';
import TimerScreen from './screens/TimerScreen';

const timerArray = [2,5,10,20]

const Stack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Timer: {
    screen: TimerScreen
  }
})

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
      timer: null,
      chime: false,
      music: false
    }
  }

  startTimer = () => {
    console.log('starting timer');
    this.countdownTimer()
    console.log(this.state);
    // this.props.navigation.navigate('Timer', { ...this.state });
  }

  selectTimer = (selection) => {
    const timer = selection*60;
    this.setState({
      timer,
      isSelected: true
    })
  }

  countdownTimer = () => {
    const countdown = this.state.timer
    console.log('Time: '+countdown);
  }

  selectChime = () => {
    if (this.state = false) {
      this.setState({ chime: true })
    }
  }
  selectMusic = () => {
    this.setState({ music: true })
    console.log(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <HomeScreen
          timerArray={timerArray}
          selectTimer={this.selectTimer}
          selectChime={this.selectChime}
          selectMusic={this.selectMusic}
          startTimer={this.startTimer}
        />
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
