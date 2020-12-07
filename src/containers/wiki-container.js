import React from "react";
import WikiCard from '../components/wiki-card.js'

class WikiContainer extends React.Component {
    
    renderWikis = () => {
            return this.props.wikis.map(wiki => <WikiCard key={wiki.pageid} wiki={wiki} />)
    }
    
    render() {
        // console.log(this.props.wikis)
        return (
            <div className="wiki-container" >
                {this.renderWikis()}
            </div>
        );
    }
}

export default WikiContainer;