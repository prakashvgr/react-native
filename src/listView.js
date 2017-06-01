import React, {Component} from 'react';
import {
  ListView,
  Text,
  View
} from 'react-native';

class ListViewApp extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'React','Express','Node','MongoDB','JSON','REST','Heroku','Map'
      ])
    };
  }

  render(){
    return(
      <View style={{ flex: 1, paddingTop: 22 }}>
        <ListView 
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }

}

export default ListViewApp;