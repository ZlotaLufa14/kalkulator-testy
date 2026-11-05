Otwórz windows command line i utwórz na pulpicie katalog kalkulator-testy
następnie wpisz:
- cd kalkulator-testy
- npm init –y
- npm install --save-dev jest

W pliku package.json zmień sekcję scripts na:

json
"scripts": {
 "test": "jest"
}


Struktura projektu:

kalkulator-testy/
── calculator.js
── calculator.test.js
── package.json
── node_modules/

Uruchomienie testów

W terminalu wykonaj:
- npm test

Słownik pojęć:
- describe() - grupuje testy dotyczące jednej funkcji
- test() - definiuje pojedynczy test
- expect() - określa oczekiwany rezultat
- toBe() - sprawdza zgodność wartości
- toThrow() - sprawdza, czy funkcja zgłasza wyjątek
- module.exports - udostępnia funkcję innym plikom
- require() - importuje funkcję do testów
