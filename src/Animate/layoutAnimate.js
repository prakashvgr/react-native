import React, {Component} from 'react';
import {
  Animated,
  LayoutAnimation,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  box: {
    alignItems: 'center',
    backgroundColor: 'red'
  },
  button: {
    paddingTop: 10,
    backgroundColor: 'black',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  }
});

class LayoutAnimate extends Component {
  constructor(props) {
    super(props);
    this.state = { w: 100, h: 100 };
    this._onPress = this._onPress.bind(this);
  }

  componentWillMount() {
    LayoutAnimation.spring();
  }

  _onPress() {
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15});
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
          <TouchableOpacity onPress={this._onPress}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Press me!</Text>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}

export default LayoutAnimate;