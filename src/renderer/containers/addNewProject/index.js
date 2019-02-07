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
    this._renderAboutDialog = this._renderAboutDialog.bind(this);
  }

  componentDidMount() {}
  _renderAboutDialog = () => {
    return (
      <Dialog
        icon="info-sign"
        title="关于"
        onClose={() => {
          this.setState({ aboutDialogOpen: false });
        }}
        autoFocus={true}
        canEscapeKeyClose={false}
        canOutsideClickClose={false}
        enforceFocus={true}
        isOpen={this.state.aboutDialogOpen}
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
          <p>持认务门把拉属器然七，家积京具原取象值无观，相连屈批取芦影励.</p>

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
                onClick={() => this.setState({ aboutDialogOpen: false })}
              >
                关闭
              </Button>
            </Tooltip>
          </div>
        </div>
      </Dialog>
    );
  };

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
        {this._renderAboutDialog()}
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
