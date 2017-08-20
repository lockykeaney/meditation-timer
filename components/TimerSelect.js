import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from 'react-native-button';

class TimerSelect extends React.Component{
  render() {
    return(
      <View style={styles.container}>
        {this.props.timerArray.map((time, i) => {
          return(
            <Button
              containerStyle={this.props.isSelected ? styles.buttonActive : styles.button}
              style={styles.inner}
              onPress={() => this.props.selectTimer(time)}
              key={i}>
            {`${time}`}
            </Button>
          )
        })}
      </View>
    )
  }
}

export default TimerSelect;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    height: '20%',
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '20%',
    borderRadius: 10,
    height: '50%',
    margin: '2.5%',
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  buttonActive: {
    borderColor: '#FF9900'
  },
  inner: {
    color: 'white'
  }
});
