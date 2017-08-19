import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from 'react-native-button';

class TimerSelect extends React.Component{

  render() {

    return(
      <View style={styles.container}>
        {this.props.timerArray.map((time, i) => {
          return(
            <Button
              containerStyle={styles.button}
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
    borderWidth: 2,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  button: {
    width: '25%',
    height: '100%',
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'blue',
  },
  inner: {
    color: 'yellow'
  }
});
