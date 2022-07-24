//Using interfaces for objects
interface ButtonProps {
    text: string;
    onClick?: () => void;
}
const buyButton: ButtonProps = {
    text: "Buy",
    onClick: () => console.log("Buy")
};
//Optional interface members dengan tambahkan question mark (?) sebelum type anotasi

interface ColoredButtonProps extends ButtonProps {
    color: string;
}
const greenBuyButton: ColoredButtonProps = {
    color: "Green",
    text: "Buy",
    onClick: ()=> console.log("Buy")
}

//Using interfaces for functions
interface Loger {
    (message: string): void;
}

const loger: Loger = (message: string) => {
    console.log(message);
}

//Declaration merging
interface ButtonProps { //menambah properties dari interface yang sudah ada sebelumnya
    id?: string;
}