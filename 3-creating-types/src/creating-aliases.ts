//using alias for premitive type
type FirstName = string
type PersonScore = number
let firstName: FirstName = "Yoga";
let personScore: PersonScore = 70;

//using type aliases for functions
type Log = (
    message: string,
    category?: string
    ) => void;

const log: Log = (message: string) => {
    console.log(message);
}

//using type aliases for objects
type Score = {
    name: string, 
    score:number,
    pass?: boolean,
    log: Log
};

const tomScores: Score = {
    name: "Tom",
    score: 70,
    log
  };
  const bobScores: Score = {
    name: "Bob",
    score: 80,
    log
  };
  const janeScores: Score = {
    name: "Jane",
    score: 90,
    log
  };