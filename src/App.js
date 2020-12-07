import './App.css';
import React from "react";
import Search from './components/search.js';
import WikiContainer from './containers/wiki-container.js';

class App extends React.Component {

  state = {
    searchedWikis: []
  }
  
  // need to create backend proxy

  searchHandler = (searchTerm) => {
     fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=50&srsearch=${searchTerm}&utf8=&srqiprofile=popular_inclinks_pv&format=json`)
     .then(resp => resp.json())
     .then(data => 
       this.setState({searchedWikis: data["query"]["search"]}),
      //  console.log("SEARCHING")
     )
  }
  
  render() {
    console.log(this.state.searchedWikis)
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
