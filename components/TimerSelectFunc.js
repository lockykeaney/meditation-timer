import React from 'react';
import { StyleSheet, Button, View } from 'react-native';


const picker = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '80%',
    borderColor: 'green',
    borderWidth: 2,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  item: {
    width: '50%',
    borderColor: 'red',
    color: 'yellow',
    borderWidth: 2,
    backgroundColor: 'blue',
  }
});

const TimerSelect = ({ timerArray, selectTimer }) => {

  <View style={picker.container}>
    {timerArray.map((time, i) => {
      return(
        <Button
          style={picker.item}
          onPress={() => selectTimer(time)}
          title={`${time}`}
          key={i}
        />
      )
    })}
  </View>

}

export default TimerSelect;
