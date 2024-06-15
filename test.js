const PHONES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
];

function splitArray(arr, n) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const index = i % n;
    console.log('INDEX IS:', index);
    console.log('RES at INDEXGETYS:', result[index]);
    if (!result[index]) {

      result[index] = [];
      console.log('CREATING NEW ARRAY', result);
    }

    console.log('RES at INDEXBEFORE:', result[index]);
    result[index].push(arr[i]);
    console.log('RES after:', result);
    
  }

  return result;
}

console.log(splitArray(PHONES, 2));