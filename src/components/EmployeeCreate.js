import React, { Component } from "react";
import { Picker, Text } from "react-native";
import { connect } from "react-redux";
import { Card, CardSection, Button, Input } from "./common";
import { Provider } from "react-redux";
import { employeeUpdate, employeeCreate } from "../actions";

class EmployeeCreate extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Add new employee"
  });

  updateComponentValues(employee) {
    this.props.employeeUpdate({ prop: "name", value: employee.name });
    this.props.employeeUpdate({ prop: "phone", value: employee.phone });
    this.props.employeeUpdate({ prop: "shift", value: employee.shift });
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    if (params !== undefined && params !== null) {
      const { employee } = this.props.navigation.state.params;
      this.updateComponentValues(employee);
    } else {
      const emptyEmployee = {
        name: "",
        phone: "",
        shift: ""
      };
      this.updateComponentValues(emptyEmployee);
    }
  }

  onButtonPress() {
    const { name, phone, shift, navigation } = this.props;
    this.props.employeeCreate({
      name,
      phone,
      shift: shift || "Monday",
      navigation
    });
  }

  render() {
    const { name, phone, shift } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Quyen"
            value={name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "name", value })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={phone}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "phone", value })
            }
          />
        </CardSection>

        <CardSection style={{ flexDirection: "column" }}>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            selectedValue={shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: "shift", value })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wedsnesday" value="Wedsnesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(
  EmployeeCreate
);
