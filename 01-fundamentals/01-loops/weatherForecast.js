const weeklyForecast = [
  { day: 'monday', hi: 90, lo: 70 },
  { day: 'tuesday', hi: 93, lo: 76 },
  { day: 'wednesday', hi: 89, lo: 74 },
  { day: 'thursday', hi: 91, lo: 76 },
  { day: 'friday', hi: 82, lo: 71 },
  { day: 'saturday', hi: 81, lo: 68 },
  { day: 'sunday', hi: 86, lo: 64 },
];

weeklyForecast.forEach((elem) => {
    console.log('On '+ elem.day +', the high will be '+ elem.hi +' and the low will be '+ elem.lo);

})
