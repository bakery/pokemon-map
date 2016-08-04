/*
 *
 * MainNavigation
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectMainNavigation } from './reducer';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';

import Map from '../Map';
import AddSighting from '../AddSighting';

const { View, Text, NavigationExperimental } = ReactNative;
const { CardStack: NavigationCardStack, Header: NavigationHeader } = NavigationExperimental;
const { popRoute } = navigationActions;

export class MainNavigation extends Component {
  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);
    this.renderOverlay = this.renderOverlay.bind(this);
  }

  // XX: get rid of this eslint-disable thingy once you set up
  // proper rendering for your scene
  // eslint-disable-next-line no-unused-vars
  renderScene(props) {
    // check *props.scene.route.key* to figure out
    // which scene shoud be rendered, for example
    //
    // if (props.scene.route.key === 'applicationTabs') {
    //  return (
    //    <View>
    //      <ApplicationTabs />
    //    </View>
    //  );
    // }
    //
    // To navigate around use pushRoute and popRoute actions:
    // import { actions as navigationActions } from 'react-native-navigation-redux-helpers';
    // const {
    //  popRoute,
    //  pushRoute
    // } = navigationActions;
    //
    // pushRoute({ key: 'route smth'}, this.props.mainNavigation.key);
    // popRoute(this.props.mainNavigation.key);

    const { dispatch, mainNavigation } = this.props;

    if (props.scene.route.key === 'map') {
      return <Map />;
    }

    if (props.scene.route.key === 'addSighting') {
      return <AddSighting onDismiss={() => dispatch(popRoute(mainNavigation.key))} />;
    }

    return (
      <View style={styles.container}>
        <Text>Generic scene in MainNavigation</Text>
      </View>
    );
  }

  renderOverlay(props) {
    const { dispatch, mainNavigation } = this.props;
    if (props.scene.route.key === 'addSighting') {
      const title = (
        <NavigationHeader.Title>Report Pokemon</NavigationHeader.Title>
      );
      return (
        <NavigationHeader
          {...props}
          onNavigateBack={() => dispatch(popRoute(mainNavigation.key))}
          renderTitleComponent={() => title}
        />
      );
    }

    return null;
  }

  render() {
    const navigationState = this.props.mainNavigation;
    return (
      <NavigationCardStack
        direction={'horizontal'}
        style={styles.main}
        navigationState={navigationState}
        renderOverlay={this.renderOverlay}
        renderScene={this.renderScene}
        onNavigate={() => {}}
      />
    );
  }
}


MainNavigation.propTypes = {
  mainNavigation: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  createSelector(selectMainNavigation, (mainNavigation) => ({ mainNavigation })),
  mapDispatchToProps
)(MainNavigation);
