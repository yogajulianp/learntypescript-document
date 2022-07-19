//tidak me-return apapun , sehingga logMessage bertipe void
function logMessage(message: string):void {
    console.log(message);
  }

logMessage("Selamat Datang")

/*The void type can't hold any data - it can only be undefined 
  (or null if the strictNullChecks compiler option is off).*/

let whatCanIHold: void;
whatCanIHold = undefined;
//whatCanIHold = 'sore';