let attractionData = []

const myBizzarie = () => attraction

const getBizzarie = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
      .then((httpresponse) => httpresponse.json())

      .then((bizzarieArray) => {
        attractionData = bizzarieArray;
      });
}
