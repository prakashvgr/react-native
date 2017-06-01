import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

var MOCKED_MOVE_DATA = [
  { title: 'Title-2012', year: '2012', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'} },
  { title: 'Title-2013', year: '2013', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'} },
  { title: 'Title-2015', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'} },  
];
class FetchData extends Component {
  render() {
    var movie = MOCKED_MOVE_DATA[0];

    var styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      },
      rightContainer: {
        flex: 1,
        backgroundColor: '#F5CCCC'
      },
      title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center'
      },
      year: {
        textAlign: 'center'
      },
      thumbnail: {
        width: 53,
        height: 81
      }
    });
    return(
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>        
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

export default FetchData;