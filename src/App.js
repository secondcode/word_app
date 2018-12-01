import React, { Component } from 'react';
import './App.css';
import Word from './Word'


const words =
    [
        {id : "1", writer : "소크라테스", word :"너 자신을 알라" ,image : "https://pasteve.com/wp-content/uploads/2018/01/shutterstock_751011886-min.jpg"},
        {id : "2", writer : "지각생", word :"늦었다하면 진짜 늦었다" ,image : ""},
        {id : "3", writer : "회사원", word :"퇴근 시간은 내 마음속에 있다" ,image : ""},
        {id : "4", writer : "???", word : "???" ,image : ""}
    ]

class App extends Component {

  renderWords = () => {
      const rendered = words.map(word => {
          return (
              <Word
                  writer={word.writer}
                  word={word.word}
                  image={word.image}
                  key={word.id}/>
          );
      });
      return rendered;
  };

  render() {
    return (
      <div className={words ? "App" : "App--loading"}>
            {words ? this.renderWords() : "Loading"}
      </div>
    );
  }
}

export default App;
