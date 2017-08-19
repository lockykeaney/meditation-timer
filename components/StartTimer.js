import React from 'react';
import { StyleSheet, Button } from 'react-native';

const styles = {
  button: {
    width: '60%',
    padding: '5%',
    justifyContent: 'center'
  }
}

const StartTimer = ({ startTimer }) => {

  <Button style={styles.button}
    onPress={startTimer}
    title="Start" />

export default StartTimer;
