import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

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

class FetchData extends Component {

  constructor(props) {
    super(props);
    this.state = { movies: null };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('responseJson',responseJson);
        this.setState({
          movies: responseJson.movies,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderMovie(movie) {
    return (
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

  renderLodingView() {
    return (
      <View style={styles.container}>
        <Text>Loading Movies....</Text>
      </View>
    );
  }

  render() {

    if(!this.state.movies) {
      return this.renderLodingView();
    }
    
    var movie = this.state.movies[0];
    return this.renderMovie(movie);

  }
}

export default FetchData;