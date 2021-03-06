import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';
import NavigationBar from '../Components/NavigationBar';
import Button from '../Components/Button';
import WallPaper from '../Components/WallPaper';
import HoverPic from '../Components/HoverPic';
import p from '../Logic/P.js';

export default class StartPage extends Component {
  render() {
    var dims = Dimensions.get('window');
    return (
      <View>
      <WallPaper/>
      <NavigationBar nav={this.props.nav} back={this.props.back}/>
      <HoverPic pic={require('../images/fivesy.png')} l={p.w(10)} w={p.w(300)} h={p.h(300)}/>

        <View style={[{position:"absolute",borderWidth:0,width:dims.width,height:p.h(260),top:p.h(335),zIndex:22,justifyContent: 'space-between',}]}>
          <Button text={"Any "+this.props.mode} tint="bright" onclick={()=>{return this.props.nav("Wait",{mode:this.props.mode})}}/>
          <Button text="Make Room" onclick={()=>{return this.props.nav("Make",{mode:this.props.mode})}}/>
          <Button text="Instructions" tint="pale" onclick={()=>{/*return this.props.nav("Instructions",{mode:this.props.mode})*/}}/>
          <Button text="Challange" tint="facebook" onclick={()=>{/*return this.props.nav("Challange",{mode:this.props.mode})*/}}/>
        </View>
      </View>
    )
  }
}
