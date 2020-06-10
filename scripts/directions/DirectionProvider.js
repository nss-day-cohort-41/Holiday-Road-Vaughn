let directions = []

const getDirections = (lat, long, apiKey) => {
    return fetch(`https://graphhopper.com/api/1/geocode?q=national+park&locale=us&point=${lat},${long}&vehicle=car&locale=us&instructions =true&calc_points&debug=true&key=35c189ee-0b68-474a-9be6-79ece436efed`)
        .then(response => response.json())
        .then(parseDirections => {
            directions = parseDirections.path.slice()
            console.log(directions)
        })
    
    
    
    }
