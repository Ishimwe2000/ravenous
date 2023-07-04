// I have an idea of what I want to do but reading the instructions makes me draw blanks it's weird. I literally know how to do it but feel so blocked at the same time
const YelpApi = {
    search(term, location, sortingOption) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortingOption}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
        }

        ).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => (
                    {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zio_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }
                ));
            }
        });
    },
};
export default YelpApi;




