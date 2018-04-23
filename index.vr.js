import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import Main from "./src/component/main/main.component";

export default class AppComonent extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('test2.jpg')}/>
          <Main />
      </View>
    );
  }
};

AppRegistry.registerComponent('JShouseVR', () => AppComonent);
