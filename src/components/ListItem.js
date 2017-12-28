import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions'; // give me everythin as actions
import { connect } from 'react-redux';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    renderDescription() {
        if (this.props.expanded) {
            return (
                <Text> {this.props.library.description} </Text>
            );
        }
    }

    render() {
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}> 
                            {title}
                        </Text>
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
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.SelectedlibraryId === ownProps.library.id;
    return { expanded: expanded }
};

export default connect(mapStateToProps, actions)(ListItem);