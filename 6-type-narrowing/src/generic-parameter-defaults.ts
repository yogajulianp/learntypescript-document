function firstOrNull2<T=string>(array: T[]): T | null {
    return array.length === 0 ? null : array[1];
}
  
interface Component<T1=string, T2=any> {
    name: T1;
    props: T2;
    log: () => void;
}

const button: Component= {
    name: "Button",
    props: {
      text: "Save",
    },
    log: () => console.log("Save button"),
};

console.log(button.props.text);
console.log(button.props.text2);


const firstNu = firstOrNull2([9,3,5])
console.log(firstNu)
