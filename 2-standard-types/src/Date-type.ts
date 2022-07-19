
const dateOfBirth = new Date(1990, 4, 9);
console.log(dateOfBirth.getDate());

//console.log(dateOfBirth.addDays(2));

function calculateRenewal(startDate: Date) :Date  {
    const result = new Date(startDate);
    result.setDate(result.getDate() + 30);
    console.log(result)
    return result;
  }

