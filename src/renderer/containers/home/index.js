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

import { Grid, List } from 'semantic-ui-react';

import { logoAbout, appIcon } from '../../asserts';

// Style
import Styles from './style';

// Class Home, basic component for application
class Home extends Component {
    state = {
        isOpen: false,
        size: {
            width: 0,
            height: 0,
        },
    };
    /**
     * constructor function
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.toaster = null;
        this.addToast = this.addToast.bind(this);
        this._renderAboutDialog = this._renderAboutDialog.bind(this);
        this.handleAboutOpen = this.handleAboutOpen.bind(this);
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

    _renderAboutDialog = () => {
        return (
            <Dialog
                icon="info-sign"
                title="关于"
                onClose={() => {
                    this.handleAboutOpen(false);
                }}
                autoFocus={true}
                canEscapeKeyClose={false}
                canOutsideClickClose={false}
                enforceFocus={true}
                isOpen={this.state.isOpen}
                usePortal={true}
                style={Styles.AboutDialog}
            >
                <div className={Classes.DIALOG_BODY}>
                    <p style={Styles.aboutLogoContainer}>
                        <img src={logoAbout} style={Styles.aboutLogo} />
                    </p>
                    <p>
                        <strong>OSLC Adapter 设计器</strong>
                    </p>
                    <p>
                        路办基林平平即什无，所容土而安满了内局，济K采束合1芬。影她清二示观新，空于断特术亲增拉，路建医具结的。点南性强林情构人度，土候少东律非采三候，消孤建批达丽位.
                    </p>
                    <p>
                        经等定任感，观的8门意亲般。如除属下花记条算真县，前就圆我矿教论阶议，建起孤态里示茄葛。速织单他王想看给构步民但民住，战号响铁地建码里求或观。度十县此计识高划把队界标，六再具.
                    </p>
                    <p>
                        路办基林平平即什无，所容土而安满了内局，济K采束合1芬。影她清二示观新，空于断特术亲增拉，路建医具结的。点南性强林情构人度，土候少东律非采三候，消孤建批达丽位。关十位保手持头，少提工第观专，这E级杜常.
                    </p>
                    <p>
                        持认务门把拉属器然七，家积京具原取象值无观，相连屈批取芦影励.
                    </p>

                    <p style={Styles.aboutVersionInfo}>版本号: 1.0.1.A</p>
                </div>
                <div className={Classes.DIALOG_FOOTER}>
                    <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                        <Tooltip content="访问网络并检查更新">
                            <Button intent={Intent.SUCCESS}>检查更新</Button>
                        </Tooltip>
                        <Tooltip content="关闭对话框">
                            <Button
                                intent={Intent.DANGER}
                                onClick={() => this.handleAboutOpen(false)}
                            >
                                关闭
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </Dialog>
        );
    };

    handleAboutOpen = isOpen => this.setState({ isOpen: isOpen });

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

                            <Grid.Column width={16}>
                                <p style={Styles.appTitleContainer}>
                                    OSLC Adapter 设计器
                                </p>
                                <p style={Styles.appSubTitleContainer}>
                                    版本1.0.0.A
                                </p>
                            </Grid.Column>
                            <Grid.Column
                                width={4}
                                style={Styles.actionContainer}
                            >
                                <List>
                                    <List.Item>
                                        <Button
                                            style={Styles.actionButton}
                                            alignText={Alignment.LEFT}
                                            large={true}
                                            minimal={true}
                                            icon={'cube-add'}
                                        >
                                            创建新项目
                                        </Button>
                                    </List.Item>
                                    <List.Item>
                                        <Button
                                            style={Styles.actionButton}
                                            alignText={Alignment.LEFT}
                                            large={true}
                                            minimal={true}
                                            icon={'document-open'}
                                        >
                                            打开项目
                                        </Button>
                                    </List.Item>

                                    <List.Item>
                                        <Button
                                            style={Styles.actionButton}
                                            alignText={Alignment.LEFT}
                                            large={true}
                                            minimal={true}
                                            icon={'lifesaver'}
                                        >
                                            帮助
                                        </Button>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={Styles.appFooterContainer}>
                            <Grid.Column width={8}>
                                <div style={Styles.appFooterLeftSection} />
                            </Grid.Column>

                            <Grid.Column width={8}>
                                <div style={Styles.appFooterRightSection}>
                                    <Button
                                        alignText={Alignment.LEFT}
                                        minimal={true}
                                        icon={'cog'}
                                        rightIcon={'chevron-down'}
                                        small={true}
                                    >
                                        设置
                                    </Button>
                                    <Button
                                        alignText={Alignment.LEFT}
                                        minimal={true}
                                        icon={'cog'}
                                        rightIcon={'chevron-down'}
                                        small={true}
                                    >
                                        设置
                                    </Button>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    {this._renderAboutDialog()}
                </div>
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
