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
  Classes,
  Alignment,
  Button,
  Alert,
  Icon,
  Card,
  Intent,
  Toaster,
  Dialog,
  Tooltip,
  Position,
  Navbar,
  Divider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';

import { Grid, Button as SemanticButton } from 'semantic-ui-react';

import { appIcon, logoAbout, docIcon } from '../../asserts';

import About from '../about';
// Style
import Styles from './style';

// Class Home, basic component for application
class AddNewProject extends Component {
  state = {
    shareProjectalert: false,
    loginAlert: false,
    aboutDialogOpen: false,
  };
  selectedProject = 'oslcBlankProject';
  selectedProjectDesc =
    '普通OSLC Adapter适配器空白项目，项目初始化包含一个Root Service，在项目创建过程中可添加其他Service以及Provider，并在项目中定义Resource。';
  /**
   * constructor function
   * @param {*} props
   */
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  _handleClickProject = () => {};

  render() {
    const { navTo } = this.props;
    return (
      <div style={Styles.screen}>
        <Navbar fixedToTop={true} style={Styles.navbar}>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>
              <img src={logoAbout} style={Styles.logoNavbar} />
            </NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Navbar.Divider />

            <Button
              minimal={true}
              icon="user"
              text="未登录"
              onClick={() => {
                this.setState({ loginAlert: true });
              }}
            />
            <Button
              minimal={true}
              icon="info-sign"
              text="关于"
              onClick={() => {
                this.setState({ aboutDialogOpen: true });
              }}
            />

            <Alert
              canEscapeKeyCancel={false}
              canOutsideClickCancel={false}
              confirmButtonText="确认"
              icon="warning-sign"
              isOpen={this.state.loginAlert}
              onClose={() => {
                this.setState({
                  loginAlert: false,
                });
              }}
            >
              <p>
                本版本暂不支持用户登录,
                有关Release信息请访问http://www.xxXxx.com/releasenotes
              </p>
            </Alert>
          </NavbarGroup>
        </Navbar>

        <Grid centered style={Styles.container}>
          <Grid.Row>
            <Grid.Column width={3} style={Styles.leftSection}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={16} style={Styles.sideBarTop} />
                  <Grid.Column width={16}>
                    <p style={Styles.sidebarMenuTitle}>项目</p>
                    <p style={Styles.sidebarMenu}>
                      <Button
                        active={true}
                        style={Styles.sidebarMenuButton}
                        fill={true}
                        alignText={Alignment.LEFT}
                        minimal={true}
                        icon="menu-open"
                        rightIcon="chevron-right"
                        text="新建项目"
                      />
                    </p>
                    <p style={Styles.sidebarMenu}>
                      <Button
                        style={Styles.sidebarMenuButton}
                        fill={true}
                        alignText={Alignment.LEFT}
                        minimal={true}
                        icon="menu-open"
                        rightIcon="chevron-right"
                        text="本地项目"
                      />
                    </p>
                    <p style={Styles.sidebarMenu}>
                      <Button
                        style={Styles.sidebarMenuButton}
                        fill={true}
                        alignText={Alignment.LEFT}
                        minimal={true}
                        icon="menu-open"
                        rightIcon="chevron-right"
                        text="共享"
                        onClick={() => {
                          this.setState({
                            shareProjectalert: true,
                          });
                        }}
                      />
                      <Alert
                        canEscapeKeyCancel={false}
                        canOutsideClickCancel={false}
                        confirmButtonText="确认"
                        icon="warning-sign"
                        isOpen={this.state.shareProjectalert}
                        onClose={() => {
                          this.setState({
                            shareProjectalert: false,
                          });
                        }}
                      >
                        <p>
                          本版本暂不支持在线项目编辑,
                          有关Release信息请访问http://www.xxXxx.com/releasenotes
                        </p>
                      </Alert>
                    </p>
                  </Grid.Column>

                  <Grid.Column width={16}>
                    <p style={Styles.sidebarMenuTitle}>帮助</p>
                    <p style={Styles.sidebarMenu}>
                      <Button
                        style={Styles.sidebarMenuButton}
                        fill={true}
                        alignText={Alignment.LEFT}
                        minimal={true}
                        icon="help"
                        rightIcon="chevron-right"
                        text="帮助"
                      />
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width={10} style={Styles.mainSection}>
              <Grid>
                <Grid.Row>
                  <Grid.Column
                    width={16}
                    style={Styles.mainSectionTitleContainer}
                  >
                    <Icon
                      icon="folder-new"
                      iconSize="24"
                      style={Styles.mainSectionTitleIcon}
                    />
                    <span style={Styles.mainSectionTitle}>新建项目</span>
                  </Grid.Column>

                  <Grid.Column
                    width={16}
                    style={Styles.mainSectionContentContainer}
                  >
                    <Card
                      elevation={2}
                      interactive={false}
                      style={Styles.mainSectionContent}
                    >
                      <Grid>
                        <Grid.Row>
                          <Grid.Column
                            width={4}
                            style={Styles.mainSectionSideBar}
                          >
                            <p style={Styles.mainSectionSideBarMenuTitle}>
                              OSLC适配器
                            </p>

                            <p style={Styles.mainSectionSideBarMenu}>
                              <Button
                                style={Styles.mainSectionSideBarMenuButton}
                                fill={true}
                                alignText={Alignment.LEFT}
                                minimal={true}
                                icon=""
                                text="普通项目"
                                active={true}
                              />
                            </p>

                            <p style={Styles.mainSectionSideBarMenu}>
                              <Button
                                disabled={true}
                                style={Styles.mainSectionSideBarMenuButton}
                                fill={true}
                                alignText={Alignment.LEFT}
                                minimal={true}
                                icon=""
                                text="在线模板"
                              />
                            </p>

                            <p style={Styles.mainSectionSideBarMenuTitle}>
                              其他
                            </p>
                            <p style={Styles.mainSectionSideBarMenu}>
                              <Button
                                disabled={true}
                                style={Styles.mainSectionSideBarMenuButton}
                                fill={true}
                                alignText={Alignment.LEFT}
                                minimal={true}
                                icon=""
                                text="空白项目"
                              />
                            </p>
                          </Grid.Column>

                          <Grid.Column
                            width={12}
                            style={Styles.mainSectionWorkArea}
                          >
                            <Grid>
                              <Grid.Row style={Styles.workAreaMain}>
                                <Grid.Column width={16}>
                                  <Grid>
                                    <Grid.Row>
                                      <Grid.Column width={4}>
                                        <div
                                          style={_.assign(
                                            {},
                                            Styles.projectContainer,
                                            Styles.projectContainerSelected
                                          )}
                                          onClick={() => {
                                            this._handleClickProject();
                                          }}
                                        >
                                          <img
                                            src={docIcon}
                                            style={Styles.docIcon}
                                          />
                                          <p style={Styles.projectTitle}>
                                            OSLC Adapter空项目
                                          </p>
                                        </div>
                                      </Grid.Column>
                                      <Grid.Column width={4} />
                                    </Grid.Row>
                                  </Grid>
                                </Grid.Column>
                              </Grid.Row>
                              <Grid.Row style={Styles.workAreaDesc}>
                                <Grid.Column width={16}>
                                  <p style={Styles.projectDesc}>
                                    {this.selectedProjectDesc}
                                  </p>
                                </Grid.Column>
                              </Grid.Row>
                              <Grid.Row style={Styles.workAreaAction}>
                                <Grid.Column
                                  width={16}
                                  style={Styles.createNewProjectButtonContainer}
                                >
                                  <Tooltip content={this.selectedProjectDesc}>
                                    <Button
                                      large={true}
                                      icon="new-object"
                                      intent={Intent.PRIMARY}
                                    >
                                      创建新项目
                                    </Button>
                                  </Tooltip>
                                </Grid.Column>
                              </Grid.Row>
                            </Grid>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Card>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width={3} style={Styles.rightSection} />
          </Grid.Row>
        </Grid>
        <About isOpen={true} />
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
