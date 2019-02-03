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

// UI Framework
import {
    Alignment,
    Button,
    Classes,
    NonIdealState,
    Position,
    Intent,
    Toaster,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
} from '@blueprintjs/core';

// Style
import Styles from './style';

// Class Home, basic component for application
class Home extends Component {
    /**
     * constructor function
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.toaster = null;
        this.addToast = this.addToast.bind(this);
    }

    componentDidMount() {}

    addToast = toast => {
        toast.timeout = 5000;
        if (null != this.toaster) {
            this.toaster.show(toast);
        } else {
            alert(toast.message);
        }
    };

    render() {
        const { navTo } = this.props;

        const action = (
            <Button
                className="appQuit"
                icon="cross"
                intent={'danger'}
                style={Styles.quit}
                onClick={() => {
                    this.addToast({
                        action: {
                            onClick: () => alert('DEMO!'),
                            text: '重试',
                        },
                        icon: 'warning-sign',
                        intent: Intent.DANGER,
                        message:
                            '当前用户没有权限执行此操作.请联系系统管理员以获取适当权限.',
                    });
                }}
            >
                退出
            </Button>
        );
        const description = (
            <>
                本项目暂时为空,
                <br />
                更多内容随后添加.
            </>
        );

        return (
            <div style={Styles.screen}>
                <Navbar>
                    <NavbarGroup align={Alignment.LEFT}>
                        <NavbarHeading>LOGO</NavbarHeading>
                        <NavbarDivider />
                        <Button
                            className={Classes.MINIMAL}
                            icon="home"
                            text="Home"
                        />
                        <Button
                            className={Classes.MINIMAL}
                            icon="document"
                            text="Files"
                        />
                    </NavbarGroup>
                </Navbar>
                <h1 className="bp3-heading">H1 heading</h1>
                <NonIdealState
                    icon={'build'}
                    title="本项目暂时无内容"
                    description={description}
                    action={action}
                />
                <Toaster
                    autoFocus={false}
                    canEscapeKeyClear={true}
                    position={Position.TOP_RIGHT}
                    ref={ref => (this.toaster = ref)}
                />
            </div>
        );
    }
}

// Default props
Home.defaultProps = {};

// Prop attributes types
Home.propTypes = {};

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
)(Home);
