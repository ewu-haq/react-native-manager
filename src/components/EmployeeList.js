import _ from "lodash";
import React, { Component } from "react";
import { ListView, View, Text } from "react-native";
import { connect } from "react-redux";
import { Button } from "./common";
import { ADD_EMPLOYEE_SCREEN } from "../values/screens";
import { employeesFetch } from "../actions";
import ListItem from "./ListItem";
import { PerformStackNavigation } from "../helpers";

class EmployeeList extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Employee",
    headerRight: (
      <Button onPress={() => navigation.navigate(ADD_EMPLOYEE_SCREEN)}>
        <Text> Add </Text>
      </Button>
    )
  });

  componentWillMount() {
    this.props.employeesFetch();
    this.createDateSource(this.props);
  }

  createDateSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
    console.log(this.dataSource);
  }

  componentWillReceiveProps(nextProps) {
    this.createDateSource(nextProps);
  }

  onRowPress(employee, navigation) {
    PerformStackNavigation(navigation, ADD_EMPLOYEE_SCREEN, {
      employee: employee
    });
  }

  renderRow(employee) {
    return (
      <ListItem
        employee={employee}
        onRowPress={this.onRowPress(employee, this.props.navigation)}
      />
    );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
