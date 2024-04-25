const massMoshe = 78;
const heightMoshe = 1.69;
const massaharon = 92;
const heightaharon = 1.95;



const BMIMoshe = massMoshe / heightMoshe ** 2;
const BMIaharon = massaharon / (heightaharon * heightaharon);
console.log(BMIMoshe, BMIaharon);

if (BMIMoshe > BMIaharon) {
  console.log(`Moshe's BMI (${BMIMoshe}) is higher than aharon's (${BMIaharon})!`)
} else {
  console.log(`aharon's BMI (${BMIaharon}) is higher than Moshes's (${BMIMoshe})!`)
}