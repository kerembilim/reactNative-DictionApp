import React from 'react';
import {Text,View} from 'react-native';

const Header = (props) =>{
  const{textStyle,viewStyle}=styles;

  return(
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles ={
  textStyle: {
    fontSize:20
  },
  viewStyle:{
    backgroundColor:'#DEB887',
    alignItems:'center',//yatay eksende ortalar
    justifyContent:'center',//dikey eksende ortalar
    shadowOffset:{widht:0,height:2},//gölge verildi
    shadowOpacity:0.2,
    height:60
  }
};


export { Header };
