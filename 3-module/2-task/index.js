function filterRange(arr, a, b) {
  let filter = arr.filter((item) =>{
        return item >= a && item <= b;
    });
  return filter
}
