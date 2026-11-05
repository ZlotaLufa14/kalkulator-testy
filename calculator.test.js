const { calculateDiscount } = require("./calculator");
describe("calculateDiscount()", () => {
    test("powinien obliczyć rabat 10%", () => {
    expect(calculateDiscount(100, 10)).toBe(90);
    });
    test("powinien obliczyć rabat 50%", () => {
    expect(calculateDiscount(200, 50)).toBe(100);
    });
    test("rabat 0% powinien pozostawić cenę bez zmian", () => {
    expect(calculateDiscount(150, 0)).toBe(150);
    });
    test("rabat 100% powinien dać cenę zero", () => {
    expect(calculateDiscount(150, 100)).toBe(0);
    });
    test("powinien zaokrąglać wynik do dwóch miejsc", () => {
    expect(calculateDiscount(19.99, 10)).toBe(17.99);
    });
    test("nie powinien akceptować ujemnej ceny", () => {
    expect(() => calculateDiscount(-100, 10))
    .toThrow("Cena nie może być ujemna.");
    });
    test("nie powinien akceptować rabatu większego niż 100%", () => {
    expect(() => calculateDiscount(100, 150))
    .toThrow("Rabat musi być z zakresu 0-100.");
    });
    test("nie powinien akceptować ujemnego rabatu", () => {
    expect(() => calculateDiscount(100, -10))
    .toThrow("Rabat musi być z zakresu 0-100.");
    });
    test("nie powinien akceptować tekstu jako ceny", () => {
    expect(() => calculateDiscount("100", 10))
    .toThrow("Cena musi być liczbą.");
    });
    test("nie powinien akceptować wartości NaN", () => {
    expect(() => calculateDiscount(NaN, 10))
    .toThrow("Cena musi być liczbą.");
    });
    test("powinien obliczyć rabat 25% z 80zł", () => {
    expect(calculateDiscount(80, 25)).toBe(60);
    });
});

const { calculateVAT } = require("./calculator");
describe("calculateVAT()", () => {
    test("oblicza VAT z 100zł (23zł)", () => {
    expect(calculateVAT(100)).toBe(23.00);
    });
    test("oblicza VAT z 500zł (115zł)", () => {
    expect(calculateVAT(500)).toBe(115.00);
    });
    test("nie powinien akceptować ujemnej ceny", () => {
    expect(() => calculateVAT(-100))
    .toThrow("Cena nie może być ujemna.");
    });
    test("nie powinien akceptować tekstu jako ceny", () => {
    expect(() => calculateVAT("100"))
    .toThrow("Cena musi być liczbą.");
    });
    test("nie powinien akceptować wartości NaN", () => {
    expect(() => calculateVAT(NaN))
    .toThrow("Cena musi być liczbą.");
    });
    test("nie powinien akceptować braku wartości", () => {
    expect(() => calculateVAT())
    .toThrow("Cena nie może być pusta.");
    });
    test("nie powinien akceptować zdefiniowanej wartości", () => {
    expect(() => calculateVAT(undefined))
    .toThrow("Cena nie może być pusta.");
    });
    test("nie powinien akceptować nieskonczoności", () => {
    expect(() => calculateVAT(Infinity))
    .toThrow("Cena musi być skończona.");
    });
});