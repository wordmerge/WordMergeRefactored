import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity,Dimensions, StyleSheet } from 'react-native';
import MyInput from './MyInput';

export default class InputBar extends Component {
  constructor(props){
    super(props);
    this.clearInput = ()=>{
      this.refs["myInput"].clearAndBlur();
    }
    this.state = {
      hasWon:false,
    }
  }

  render() {
      var styles = this.styles;
      var barContent;
      if(this.props.hideInput){
        var winTexts = ["OH BABY!","RIGHTO","BODACIOUS","GOT IT!","HURRAY!","NICE ONE","ROCKN IT","YOU GOT MERGED!","ヽ(´▽`)/","WOOT!","GOLLY, YOU DID IT!","COOL MERGE BRO"];
        var text = this.state.hasWon?winTexts[Math.floor(Math.random()*winTexts.length)]:"Waiting on "+this.props.guest;
        barContent =
            <View style={styles.centerInputBar}>
              <Text style={styles.inputBarText}>
                {text}
              </Text>
            </View>;
      }else{
        barContent = <MyInput type="gameInput" classic={this.props.classic} text="Type A Word!" typing={this.props.typing} ref="myInput" fin={this.props.onSubmit} focusFunc={()=>{}} blurFunc={()=>{}}/>;
      }
      var dims = Dimensions.get('window');
      return(
          <View style={{position:"absolute",width:dims.width,height:80,top:545,left:0}}>
            <View style={[styles.inputView,{paddingTop:7}]}>
              {barContent}
            </View>
            <View style={styles.inputBoxShadow}>
            </View>
          </View>
        )
      }

      styles = StyleSheet.create({
        centerInputBar:{
          flexDirection:"row",
          justifyContent:"center",
          top:14,
        },
        inputView:{
          position:"absolute",
          zIndex:69,
          width:360,
          height:70,
          top:5,
          backgroundColor:"#2f4f4c",
        },
        inputBoxShadow:{
          position:"absolute",
          width:360,
          height:10,
          backgroundColor: "#13453e",
        },
        inputBarText:{
          fontSize:26,
          fontFamily:"Trebuchet",
          color:"#f7ffff",
          fontWeight:"bold",
          textShadowColor:"#171f1f",
          textShadowOffset:{width:1,height:1},
          textShadowRadius:10,
        },
      });
}
