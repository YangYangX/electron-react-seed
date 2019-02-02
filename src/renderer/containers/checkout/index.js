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

// UI framework
//import { Nav } from 'reactstrap';

// Style
import './index.css';

// Class Framework, basic component for application
class Checkout extends Component {

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
                Checkout
            </div>
        )
    }

}

// Default props
Checkout.defaultProps = {
};

// Prop attributes types
Checkout.propTypes = {
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

// Export Checkout container
export default connect(mapStateToProps, mapDispatchToProps,null,{pure: false})(Checkout);
