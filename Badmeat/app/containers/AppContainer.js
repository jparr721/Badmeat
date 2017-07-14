import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Drawer } from '../router';

class AppContainer extends Component {
  render(){
    return (
      <Drawer />
    )
  }
}

export default AppContainer;
