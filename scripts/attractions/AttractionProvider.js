let attractionData = []

const myBizarre = () => attraction

const getBizarre = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
      .then((httpresponse) => httpresponse.json())

      .then((bizzarieArray) => {
        attractionData = bizzarieArray;
      });
}
