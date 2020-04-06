import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import moment from "moment";
import styles from "./style.js";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStopped: false,
      eventDate: moment.duration().add({ hours: 0, minutes: 25, seconds: 0 }),
      hours: 0,
      mins: 0,
      secs: 0
    };
  }

  stopTimer = () => {
    this.setState({
      isStopped: true
    });
  };

  updateTimer = () => {
    const x = setInterval(() => {
      let { eventDate, isStopped } = this.state;
      if (isStopped) {
        return;
      }

      if (eventDate <= 0) {
        clearInterval(x);
      } else {
        eventDate = eventDate.subtract(1, "s");
        const hours = eventDate.hours();
        const mins = eventDate.minutes();
        const secs = eventDate.seconds();

        this.setState({
          eventDate,
          hours,
          mins,
          secs
        });
      }
    }, 1000);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainView}>
          <View style={styles.timer}>
            <Text style={styles.timerText}>
              {this.state.hours} : {this.state.mins} : {this.state.secs}
            </Text>
          </View>
          <View style={styles.menuButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.updateTimer({ hours: 0, mins: 25, secs: 0 })}
            >
              <FontAwesome name="play" size={60} color="#34495e" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.stopTimer}>
              <FontAwesome name="stop" size={60} color="#34495e" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
