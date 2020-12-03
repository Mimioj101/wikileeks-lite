import React from "react";

class WikiCard extends React.Component {
    render() {
        let joinedTitle = this.props.wiki.title.split(" ").join("_")
        let wikiURL = `https://en.wikipedia.org/wiki/${joinedTitle}` 
        return (
            <div className="wiki-card" >
                <a href={wikiURL} target="_blank" rel="noopener noreferrer" >{this.props.wiki.title}</a>
            </div>
        );
    }
}

export default WikiCard;