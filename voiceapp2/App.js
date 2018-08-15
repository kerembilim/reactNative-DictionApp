import React, { Component } from 'react';
import Button from './ortak/Button';
import {
    Platform,
    StyleSheet,
    Text,
    View,

} from 'react-native';
import question from './question';

import Voice from 'react-native-voice';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor()
  {
    super();
    this.state = {
    questionNumber:0,
    results:[],
    answercount:[],
    score :0,
    questioncounter:0
  }
  Voice.onSpeechResults=this.onSpeechResults.bind(this);
  }
    onSpeechResults(e)
    {
      this.setState({
          results:e.value
      })
    }
  onSpeechStart()
  {
    Voice.start('tr_TR');
  }
    onSpeechEnd(){
      Voice.stop();

    }
    resultsCountControl()
    {
        this.setState({score:this.state.score+2})
    }
    scoreYenile()
    {
        this.state.results.map(res => question.map(ques => ques.question==res ?  this.resultsCountControl()
            : null))
        {console.log(this.state.score)}
    }
  render() {
      var rand =  Math.floor(Math.random() * 10) + 1 ;
    return (
      <View key={'render'} style={styles.container}>
          <View style={{width: 200, height: 50}}>
              <Button onPress={this.onSpeechStart.bind(this)}>baslat</Button>
          </View>

          <View style={{width: 200, height: 50}}>
              <Button onPress={this.onSpeechEnd.bind(this)}>bitir</Button>
          </View>

          <View style={{width: 200, height: 50}}>
              <Button onPress={this.scoreYenile.bind(this)}>hesapla</Button>
          </View>











      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
