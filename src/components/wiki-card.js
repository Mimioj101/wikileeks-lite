import React from "react";

class WikiCard extends React.Component {
    render() {
        // console.log("WIKIS", this.props.wiki.title)
        let joinedTitle = this.props.wiki.title.split(" ").join("_")
        let wikiURL = `https://en.wikipedia.org/wiki/${joinedTitle}` 
        return (
            <div>
                <a href={wikiURL} target="_blank">{this.props.wiki.title}</a>
            </div>
        );
    }
}

export default WikiCard;