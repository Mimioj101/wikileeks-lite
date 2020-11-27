import './App.css';
import React from "react";
import Search from './components/search.js';
import WikiContainer from './containers/wiki-container.js';

class App extends React.Component {
  
  searchHandler = (searchTerm) => {
    console.log(searchTerm)
    
  }
  
  render() {
    return (
      <div className="App">
        <p>WikiLeeks Lite</p>
        <Search searchHandler={this.searchHandler}/>
        <WikiContainer />
      </div>
    )
  }
}

export default App;
