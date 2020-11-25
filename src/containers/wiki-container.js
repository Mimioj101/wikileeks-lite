import React from "react";
import WikiCard from '../components/wiki-card.js'

class WikiContainer extends React.Component {
    render() {
        return (
            <div>
                <p>WikiContainer</p>
                <WikiCard />
            </div>
        );
    }
}

export default WikiContainer;