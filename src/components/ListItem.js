import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { CardSection } from "./common";
import * as actions from "../actions"; // give me everythin as actions
import { PerformStackNavigation } from "../helpers";
import { ADD_EMPLOYEE_SCREEN } from "../values/screens";
import { connect } from "react-redux";

class ListItem extends Component {
  onRowPress() {
    const { navigation, employee } = this.props;
    PerformStackNavigation(navigation, ADD_EMPLOYEE_SCREEN, {
      employee: employee
    });
  }

  render() {
    const { uid, name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
          {this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.SelectedlibraryId === ownProps.library.id;
  return { expanded: expanded };
};

export default connect(null, actions)(ListItem);
