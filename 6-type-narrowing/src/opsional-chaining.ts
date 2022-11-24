type Customer = {
    ulangTahun?: Date
}

function getCustomer(id: number) : Customer | null | undefined {
    return id === 0 ? null : { ulangTahun: new Date()};
}

let customer = getCustomer(1)
// optional property access operator
console.log(customer?.ulangTahun?.getFullYear())