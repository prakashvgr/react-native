import React, {Component} from 'react';

import {
  Animated
} from 'react-native';

class FaveInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      { 
        toValue: 100,
        duration: 2000
      }
    ).start();
  }

  render() {
    return(
      <Animated.View
        style={{
          ...this.props.style,
          opacity: this.state.fadeAnim
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default FaveInView;