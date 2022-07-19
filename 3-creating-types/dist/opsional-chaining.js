"use strict";
var _a;
function getCustomer(id) {
    return id === 0 ? null : { ulangTahun: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.ulangTahun) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=opsional-chaining.js.map