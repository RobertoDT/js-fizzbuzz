// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


for(var i = 1; i <= 100; i++){

  var appoggio = i;
  if((appoggio % 3 == 0) && (appoggio % 5 == 0)){
    appoggio = "Fizzbuzz";
  } else if(appoggio % 3 == 0){
    appoggio = "Fizz";
  }else if(appoggio % 5 == 0){
    appoggio = "Buzz";
  }
  console.log(appoggio);
}
