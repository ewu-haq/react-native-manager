import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { CardSection } from "./common";
import * as actions from "../actions"; // give me everythin as actions
import { ADD_EMPLOYEE_SCREEN } from "../values/screens";
import { connect } from "react-redux";

class ListItem extends Component {
  render() {
    const { uid, name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.props.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 40,
    paddingLeft: 15
  }
};

export default connect(null, actions)(ListItem);
