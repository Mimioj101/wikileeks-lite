import React from "react";

class Search extends React.Component {
    
    // state = {
    //     searchTerm: ""
    // }

    // changeHandler = (e) => {
    //     e.persist()
    //     this.setState({searchTerm: e.target.value})
    // }
    
    searchHandler = (e) => {
        e.preventDefault();
        this.props.searchHandler(e.target[0].value)
    }
    
    render() {
        return (
            <div>
                <form className="search-form" onSubmit={this.searchHandler}>
                    <input type="search" placeholder="Search..." />
                </form>
            </div>
        );
    }
}

// onChange={this.changeHandler} value={this.state.searchTerm}

export default Search;
