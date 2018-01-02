import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "./common";
import { ADD_EMPLOYEE_SCREEN } from "../values/screens";

export default class EmployeeList extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Employee",
    headerRight: (
      <Button onPress={() => navigation.navigate(ADD_EMPLOYEE_SCREEN)}>
        <Text> Add </Text>
      </Button>
    )
  });

  render() {
    return (
      <View>
        <Text> Hello </Text>
      </View>
    );
  }
}
