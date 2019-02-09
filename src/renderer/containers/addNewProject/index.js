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
      <Dialog
        icon="cube-add"
        title="创建..."
        onClose={() => {}}
        autoFocus={true}
        canEscapeKeyClose={false}
        canOutsideClickClose={false}
        enforceFocus={true}
        isOpen={this.props.isOpen}
        usePortal={true}
        style={Styles.createNewProjectDialog}
      >
        <div
          className={Classes.DIALOG_BODY}
          style={Styles.mainSectionContentContainer}
        >
          <Card
            elevation={0}
            interactive={false}
            style={Styles.mainSectionContent}
          >
            <Grid>
              <Grid.Row>
                <Grid.Column width={4} style={Styles.mainSectionSideBar}>
                  <p style={Styles.mainSectionSideBarMenuTitle}>OSLC适配器</p>

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

                  <p style={Styles.mainSectionSideBarMenuTitle}>其他</p>
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

                <Grid.Column width={12} style={Styles.mainSectionWorkArea}>
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
                                <img src={docIcon} style={Styles.docIcon} />
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
                            rightIcon="arrow-right"
                            intent={Intent.PRIMARY}
                          >
                            下一步
                          </Button>
                        </Tooltip>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card>
        </div>
      </Dialog>
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
