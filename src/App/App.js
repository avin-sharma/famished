import React from 'react';
import './App.css';
import BusinessList from '../components/BusinessList/BusinessList'
import SearchBar from '../components/SearchBar/SearchBar'
import Yelp from '../util/Yelp'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      businesses: [],
      latitude: '',
      longitude: ''
    }
    this.searchYelp = this.searchYelp.bind(this)

    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          latitude : position.coords.latitude,
          longitude : position.coords.longitude,
        }, () => {
        })
      })
    }
    
  }
  searchYelp(term, location, latitude, longitude, sortBy){
    Yelp.search(term, location, latitude, longitude, sortBy).then(businesses => {
      this.setState({
        businesses: businesses
      })
    })
  }

  render(){
    
    return (
      <div className="App">
        <h1>famished</h1>
        <SearchBar searchYelp={this.searchYelp} latitude={this.state.latitude} longitude={this.state.longitude} />
        <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  } 
}


export default App;
