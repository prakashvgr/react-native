import React, { Component } from 'react';
import {
  ScrollView,
  Image,
  Text
} from 'react-native';

class ScrollViewApp extends Component {

  render() {
    return (
      <ScrollView>
        <Text style={{fontSize: 92}} >Scroll me plz</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/images.png')} />
        <Image source={require('./img/image1.jpg')} />
        <Text style={{fontSize: 92}} >Do you like</Text>
        <Image source={require('./img/image2.jpg')} />
        <Image source={require('./img/image3.jpg')} />
        <Image source={require('./img/image4.jpg')} />
        <Text style={{fontSize: 92}} >Scroll further</Text> 
        <Image source={require('./img/image5.jpg')} />
        <Image source={require('./img/image6.jpg')} />
      </ScrollView>
    );
  }
}

export default ScrollViewApp;
