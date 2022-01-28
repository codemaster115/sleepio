import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet} from "react-native";

import Dropdown from "../Dropdown";
import { mockApi } from "../../mock/api";

const Sleep = () => {
  const [bedTime, setBedTime] = useState(-1);
  const [sleepTime, setSleepTime] = useState(-1);
  const [score, setScore] = useState(-1);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setScore(-1);
  }, [bedTime, sleepTime])

  const onCalculate = () => {
    if (bedTime < sleepTime) {
      alert('Sleep time must be less than bed time!');
      return;
    } 
    setLoading(true);
    setScore(Number((100 * sleepTime / bedTime).toFixed(2)));
    mockApi(score).then(() => setLoading(false)).catch(err => console.log(err))
  }

  return (
    <View style={styles.sleep}>
      <Dropdown label='Duration in bed' setTime={(t: number) => setBedTime(t)}/>
      <Dropdown label='Duration asleep' setTime={(t: number) => setSleepTime(t)}/>
      <Button color="#841584" onPress={()=> onCalculate()} title='Calculate' disabled={bedTime === -1 || sleepTime === -1}/>
      {score > -1 && <Text style={styles.score} >Result: {isLoading ? 'loading...' : score}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  sleep: {
    flex:1,
    padding: 25
  },
  score: {
    textAlign: 'center'
  }
});

export default Sleep;
