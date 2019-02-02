/**
 *
 * Application container
 *
 * This component is the framework around the entire application, and should only
 * contain code that should be seem on all pages.(e.g. navigation bar, topbar and etc.)
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import routes
import routes from '../../configure/routes';

// Style

// Class Framework, basic component for application
class Framework extends Component {

    /**
     * constructor function
     * @param {*} props
     */
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {routes}
            </div>
        )
    }

}

// Default props
Framework.defaultProps = {
};

// Prop attributes types
Framework.propTypes = {
};

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
const mapDispatchToProps = (dispatch) => ({});

// Connect Switch to store to pass location down to each Routes.
// const ConnectedSwitch = connect(mapStateToProps)(Switch);

// Export Framework container
export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Framework);
