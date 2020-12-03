import './App.css';
import React from "react";
import Search from './components/search.js';
import WikiContainer from './containers/wiki-container.js';

class App extends React.Component {

  state = {
    searchedWikis: []
  }
  
  searchHandler = (searchTerm) => {
     // let banana = searchTerm.split(" ").join("%20")
     fetch(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=50&srsearch=${searchTerm}&utf8=&format=json`)
     .then(resp => resp.json())
     .then(data => 
       this.setState({searchedWikis: data["query"]["search"]})
     )
  }
  
  render() {
    return (
      <div className="App">
        <p>WikiLeeks Lite</p>
        <Search searchHandler={this.searchHandler}/>
        <WikiContainer wikis={this.state.searchedWikis} />
      </div>
    )
  }
}

export default App;
