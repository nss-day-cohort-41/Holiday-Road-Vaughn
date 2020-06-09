getAttractions().then(() => {
  console.log("inside", attractionProvider);
  attractionList();
});
console.log("outside", attractionProvider);
