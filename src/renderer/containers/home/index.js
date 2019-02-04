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
    Dialog,
    Tooltip,
    AnchorButton,
    Navbar,
    Divider,
    NavbarGroup,
    NavbarHeading,
} from '@blueprintjs/core';
//import { Container, Row, Col } from 'react-grid-system';
import { Grid, Row, Col } from 'react-flexbox-grid';

import {
    serviceIcon,
    resourceIcon,
    helpIcon,
    logoAbout,
    footerImg,
} from '../../asserts';

// Style
import Styles from './style';

// Class Home, basic component for application
class Home extends Component {
    state = {
        isOpen: false,
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
                        <NavbarHeading>
                            <img src={logoAbout} style={Styles.logoNavbar} />
                        </NavbarHeading>
                    </NavbarGroup>
                    <NavbarGroup align={Alignment.RIGHT}>
                        <Navbar.Divider />

                        <Button
                            className="bp3-minimal"
                            icon="comment"
                            text="报告问题"
                        />

                        <Button
                            className="bp3-minimal"
                            icon="info-sign"
                            text="关于"
                            onClick={() => {
                                this.handleAboutOpen(true);
                            }}
                        />
                    </NavbarGroup>
                </Navbar>
                <Divider style={Styles.titleLine} />
                <p style={Styles.editorTitle}>
                    OSLC Adapter 设计器
                    <span style={Styles.version}>{'版本号: 1.0.0.A'}</span>
                </p>

                <Grid fluid style={Styles.container}>
                    <Row>
                        <Col sm={0} />
                        <Col sm={12}>
                            <Row>
                                <Col sm={6} style={Styles.editorSection}>
                                    <Row>
                                        <Col
                                            sm={4}
                                            style={
                                                Styles.editorSectionIconContainer
                                            }
                                        >
                                            <img
                                                src={serviceIcon}
                                                style={Styles.editorSectionIcon}
                                            />
                                        </Col>
                                        <Col sm={8}>
                                            <p
                                                style={
                                                    Styles.editorSectionTitle
                                                }
                                            >
                                                服务
                                            </p>
                                            <p style={Styles.editorSectionDesc}>
                                                基于模型生成的Adapter原型。这里是一些占位符文字，随机文字随机文字随机文字.Lorem
                                                ipsum是指一篇用于网页设计、排印、布局和印刷的伪拉丁文章.
                                            </p>
                                            <p>
                                                <Button
                                                    rightIcon={'arrow-right'}
                                                    intent={Intent.PRIMARY}
                                                    style={
                                                        Styles.editorSectionBtn
                                                    }
                                                >
                                                    开始
                                                </Button>
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={6} style={Styles.editorSection}>
                                    <Row>
                                        <Col
                                            sm={4}
                                            style={
                                                Styles.editorSectionIconContainer
                                            }
                                        >
                                            <img
                                                src={resourceIcon}
                                                style={Styles.editorSectionIcon}
                                            />
                                        </Col>
                                        <Col sm={8}>
                                            <p
                                                style={
                                                    Styles.editorSectionTitle
                                                }
                                            >
                                                资源
                                            </p>
                                            <p style={Styles.editorSectionDesc}>
                                                基于模型生成的Adapter原型。这里是一些占位符文字，随机文字随机文字随机文字.它不是真实的.
                                                这几个有异于拉丁文的字母
                                            </p>
                                            <p>
                                                <Button
                                                    rightIcon={'arrow-right'}
                                                    intent={Intent.PRIMARY}
                                                    style={
                                                        Styles.editorSectionBtn
                                                    }
                                                >
                                                    开始
                                                </Button>
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} style={Styles.editorSection}>
                                    <Row>
                                        <Col
                                            sm={4}
                                            style={
                                                Styles.editorSectionIconContainer
                                            }
                                        >
                                            <img
                                                src={helpIcon}
                                                style={Styles.editorSectionIcon}
                                            />
                                        </Col>
                                        <Col sm={8}>
                                            <p
                                                style={
                                                    Styles.editorSectionTitle
                                                }
                                            >
                                                帮助文档
                                            </p>
                                            <p style={Styles.editorSectionDesc}>
                                                基于模型生成的Adapter原型。这里是一些占位符文字，随机文字随机文字随机文字.
                                            </p>
                                            <p>
                                                <Button
                                                    rightIcon={'arrow-right'}
                                                    intent={Intent.PRIMARY}
                                                    style={
                                                        Styles.editorSectionBtn
                                                    }
                                                >
                                                    开始
                                                </Button>
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <img src={footerImg} style={Styles.footer} />
                        </Col>
                    </Row>
                </Grid>

                {this._renderAboutDialog()}
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
