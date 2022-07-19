let something;

something = "Bob";
something = 33;
something = false;
something = new Date(2019, 5, 8);

const formValues: { [field: string]: any } = {
    firstName: "Bob",
    surname: "Smith",
    age: 30,
  };
  //memberikan info properties objek bertipe string, dengan nilai properties nya adalah tipe any