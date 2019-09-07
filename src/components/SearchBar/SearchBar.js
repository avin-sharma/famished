import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
            isLocationEmpty: false
        }

        this.sortByOptions = {
            "Best Match" : "best_match",
            "Highest Rated": "rating",
            "Most Reviewed": "review_count"
        }
        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    getSortByClass(sortByOption){
        if (this.state.sortBy === sortByOption){
            return 'active'
        }
        else {
            return ''
        }
    }

    handleSortByChange(sortByOption){
        this.setState({
            sortBy: sortByOption
        })
    }

    handleTermChange(event){
        this.setState({
            term: event.target.value
        })
    }

    handleLocationChange(event){
        this.setState({
            location: event.target.value
        })
    }

    handleSearch(event){
        if(this.state.location === '' && this.props.latitude === ''){
            this.setState({
                isLocationEmpty: true
            })
        }
        else{
            this.setState({
                isLocationEmpty: false
            })
            this.props.searchYelp(this.state.term, this.state.location, this.props.latitude, this.props.longitude, this.state.sortBy)
            event.preventDefault()
        }
    }

    handleKeyPress(event){
        if(event.key === 'Enter'){
            this.handleSearch(event)
        }
    }

    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption]
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} > {sortByOption} </li>
        })
    }

    render(){
        const location = this.state.isLocationEmpty ? 'SearchBar-location-empty' : 'SearchBar-location'
        const location_placeholder = this.state.isLocationEmpty ? 'Please enter a location!' : 'Where?'
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Restaurants / Groceries / Barber..." onChange={this.handleTermChange} onKeyPress={this.handleKeyPress}/>
                    <input id={location} placeholder={location_placeholder} onChange={this.handleLocationChange} onKeyPress={this.handleKeyPress}/>
                </div>
                <div className="SearchBar-submit">
                    <button onClick={this.handleSearch}>Let's Go</button>
                </div>
            </div>
        )
    }
}

export default SearchBar