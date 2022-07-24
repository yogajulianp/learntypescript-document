"use strict";
function kalkulasiPajak(pemasukan, tahunPajak = 2022) {
    if (tahunPajak < 2022)
        return pemasukan * 1.3;
    return pemasukan * 1.5;
}
kalkulasiPajak(10000);
//# sourceMappingURL=function.js.map