let directions = []

const getDirections = (lat, long, apiKey) => {
    return fetch(`https://graphhopper.com/api/1/geocode?q=national+park&locale=us&point=${lat},${long}&vehicle=car&locale=us&instructions =true&calc_points&debug=true&key=${apiKey}`)
        .then(response => response.json())
        .then(parseDirections => {
            directions = parseDirections.path.slice()
            console.log(directions)
        })
    
    
    
    }
