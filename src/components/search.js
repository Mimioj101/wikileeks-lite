import React from "react";

class Search extends React.Component {
    
    searchHandler = (e) => {
        e.preventDefault();
        this.props.searchHandler(e.target[0].value)
    }
    
    render() {
        return (
            <div>
                <form className="search-form" onSubmit={this.searchHandler}>
                    <input className="search-bar" type="search" placeholder="Search..." />
                </form>
            </div>
        );
    }
}

export default Search;
