import './App.css';
import React from "react";
import Search from './components/search.js';
import WikiContainer from './containers/wiki-container.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>WikiLeeks Lite</p>
        <Search />
        <WikiContainer />
      </div>
    )
  }
}

export default App;
