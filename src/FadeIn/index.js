import React, {Component} from 'react';
import {
  Text
} from 'react-native';
import FadeInView from './fadeInView';

class FadeApp extends Component {
  render() {
    return(
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </FadeInView>
    );
  }
}

export default FadeApp;
