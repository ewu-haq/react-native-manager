import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { CardSection } from "./common";
import { onRowClickEvent } from "../actions";
import { connect } from "react-redux";

class ListItem extends Component {
  render() {
    const { navigation, employee } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.onRowClickEvent({ navigation, employee })}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{employee.name}</Text>
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

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { onRowClickEvent })(ListItem);
