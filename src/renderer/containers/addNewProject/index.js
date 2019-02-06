/**
 *
 * home page
 *
 * This component is the home page not found page.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import _ from 'lodash';

// UI Framework
import {
    ResizeSensor,
    Alignment,
    Button,
    Classes,
    Icon,
    Position,
    Intent,
    Toaster,
    Dialog,
    Tooltip,
    AnchorButton,
    Navbar,
    Divider,
    NavbarGroup,
    NavbarHeading,
} from '@blueprintjs/core';
//import { Container, Row, Col } from 'react-grid-system';
import { Grid, List } from 'semantic-ui-react';

import { appIcon } from '../../asserts';

// Style
import Styles from './style';

// Class Home, basic component for application
class AddNewProject extends Component {
    state = {};
    /**
     * constructor function
     * @param {*} props
     */
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.location);
    }

    render() {
        const { navTo } = this.props;
        return (
            <div style={Styles.screen}>
                <div>
                    <Grid centered style={Styles.container}>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <p style={Styles.appIconContainer}>
                                    <img src={appIcon} style={Styles.appIcon} />
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

// Default props
AddNewProject.defaultProps = {};

// Prop attributes types
AddNewProject.propTypes = {};

/**
 * mapStateToProps is a function provided to pull data from the store when it changes,
 * and pass those values as props to your component.
 *
 * @param {*} state
 */
const mapStateToProps = state => ({});

/**
 * mapDispatchToProps is a function provided to make use of the store's dispatch function,
 * usually by creating pre-bound versions of action creators that will automatically
 * dispatch their actions as soon as they are called.
 *
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => ({
    navTo: location => dispatch(push(location)),
});

// Export Home container
export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { pure: false }
)(AddNewProject);
