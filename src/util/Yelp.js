
const apiKey = `${process.env.REACT_APP_API_KEY}`

let Yelp = {
    search(term, location, latitude, longitude, sortBy){
        let url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${latitude}&longitude=${longitude}&sort_by=${sortBy}`
        if(latitude === ''){
            url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
        }
        
        return fetch(url,
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.address,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
    } 
}


export default Yelp