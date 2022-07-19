
const keepLogging = (message: string) : never  => {
    while (true) {
      console.log(message);
    }
  };

keepLogging("test"); //this function never returns, so the type of keepLogging is never

function processEvents() : never{
  while (true) {
      // membaca data atau pesan dari queue
      console.log('loop true')
  }
}

//processEvents(); //membuat never looping, unreachable code
//reject('tidak jalan[error]...')
console.log('ini sintak setelah never looping atau looping tak hingga')
console.log("setelah never");

//apakah bermanfaat never type itu?
type Status = "Pending" | "Working" | "Complete" | "Canceled";
function neverReached(never: never) {}

function doSomeAction(status: Status) {
  switch (status) {
    case "Pending":
      // some code
      
      break;
    case "Working":
      // some code
      break;
    case "Complete":
      // some code
      break;
    case "Canceled":
        // some code
      break;
    default:
      neverReached(status)
    
  }
}

doSomeAction("Pending");