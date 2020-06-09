let parks = [
    {

        fullName: "",
        description: "",
        latLong: "",
        address: "",
        postalCode: ""

    }
]

export const myParks = () => {
    return parks
}

export const getParks = () => {
    return fetch("https://developer.nps.gov/api/v1/parks?q=q%20stateCode&api_key=h8g1q6ngJx6pQPKV1Nh3CfKTB3hiy7sjHjzMQWtP")
    .then (response => response.json)
}
