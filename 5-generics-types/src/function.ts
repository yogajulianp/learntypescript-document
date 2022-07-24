function kalkulasiPajak(pemasukan: number, tahunPajak = 2022): number {
    if (tahunPajak < 2022)
        return pemasukan * 1.3;
    return pemasukan * 1.5;
}

kalkulasiPajak(10_000);