import React from "react";

class WikiCard extends React.Component {
    render() {
        // console.log("WIKIS", this.props.wiki.title)
        return (
            <div>
                <p>{this.props.wiki.title}</p>
            </div>
        );
    }
}

export default WikiCard;