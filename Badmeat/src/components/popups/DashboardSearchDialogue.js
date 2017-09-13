/**
 * Created by deonj on 8/24/2017.
 */
import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements'
import {setDashBoardSearchModalVisible} from '../../actions/index'
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  header: {

    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#42a5f5'
  },
  headerText: {
    color: "#eceff1",
    fontSize: 20,
  }

});

class DashboardSearchDialogueContainer extends Component {
  render() {
    return (
      <View style={{marginRight: 10}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.props.dashboardSearchModalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed")
          }}
        >
          <View>
            <View style={styles.header}>
              <TouchableOpacity style={{marginRight: 30}} onPress={() => {
                this.props.displayDashBoardSearchModal()
              }}>
                <Icon
                  name={"arrow-left"}
                  type="material-community"
                  size={25}
                  color="#eceff1"
                />
              </TouchableOpacity>
              <Text style={styles.headerText}>Search</Text>
            </View>
            <View style={{padding: 10}}>
              <Text>Search for items anywhere in the app</Text>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => {
          this.props.displayDashBoardSearchModal()
        } }>
          <Icon
            name="magnify"
            type="material-community"
            size={28}
            color="#eceff1"
          />
        </TouchableOpacity>
      </View>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    dashboardSearchModalVisible: state.dashboardSearchModalVisible
  };
};

const mapDispatchToProps = (dispatch) => ({
  displayDashBoardSearchModal() {
    dispatch(setDashBoardSearchModalVisible());
  }

});

const DashboardSearchDialogue = connect(
  mapStateToProps,
  mapDispatchToProps)
(DashboardSearchDialogueContainer);


export {DashboardSearchDialogue};
