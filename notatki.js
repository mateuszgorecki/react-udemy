const btn = document.querySelector("button");
btn.addEventListener("click", () => console.log(this));

//tutaj this nie tworzy nowego kontekstu dla "this" a jedynie dziedziczy wcześniejszy kontekst
//czyli wskazuje na obiekt globalny (window)

btn.addEventListener("click", function () {
  console.log(this);
});

//w tym przypadku "this" wskazuje na element, na którym zostało wywołane zdarzenie bo tworzy nowy kontekst

//? METODY I ITERATORY TABLIC

//* .join()
const users = ["adam", "bogdan", "czarek", "darek"];

//Metoda join zwraca stringa z tablicy i nie ingeruje/ nie niszczy stałej users dlatego można użyć "const"
const usersString = users.join(" ");
console.log(usersString); //'adam bogdan czarek darek'

//* .concat()

//Metoda łączy tablicę z innym elementem i zwraca nową tablicę

const newUser = "edyta";
const allUsers1 = users.concat(newUser);
console.log(allUsers1); // ["adam", "bogdan", "czarek", "darek", "edyta"]

//* spread operator

//tablica jest rozbijana na elementy i potem łączona w tablicę z powrotem

const allUsers = [...users, "edyta"];
console.log(allUsers); // ["adam", "bogdan", "czarek", "darek", "edyta"]

//* .map()

//Metoda zwraca nową tablicę o tej same długości

const usersFirstLetterUpperCase = users.map((user) => user[0].toUpperCase());

console.log(usersFirstLetterUpperCase); // ["A", "B", "C", "D"]

//* .forEach()

//Nie zwraca nowej tablicy. pracuje na aktualnej tablicy

const usersAge = [20, 21, 23, 42];

usersAge.forEach((age) =>
  console.log(`W przyszłym roku użytkownik będzie miał ${age + 1} lat`)
); //taki zapis zamiast konkatenacji, template stringa

//Można przekazywać 3 parametry
// pierwszy zawsze odnosi się do elementu z tablicy, drugi to index, a trzeci to tablica na której się pracuje

const section = document.createElement("section");

usersAge.forEach((age, index, array) => {
  section.innerHTML += `<h1>Użytkownik ${index + 1}</h1>
    <p>wiek: ${age}</p>`;
  index === array.length - 1
    ? document.body.appendChild(section)
    : console.log("nic");
});

//* .filter()

//Zwraca nową tablicę

const NameWith6Letters = users.filter((user) => user.length === 6);
console.log(NameWith6Letters); //["bogdan", "czarek"]

const NameWithLetterK = users.filter((user) => user.indexOf("k") > -1);
console.log(NameWithLetterK); //["czarek", "darek"]

//* .findIndex()

//Metoda zwraca index elementu który jako pierwszy spełni warunek. Jeśli nie zostanie spełniony to zwróci -1
//Nie zwraca elementu a tylko index

const customers = [
  { name: "Adam", age: 67 },
  { name: "Basia", age: 27 },
  { name: "Marta", age: 17 },
];

const isUser = customers.findIndex((customer) => customer.age < 18);
console.log(isUser); //2

//* .find()

//Zwraca element który jako pierwszy spełni warunek. Jeśli nie zostanie spełniony to zwróci undefined

const firstAdultUser = customers.find((customer) => customer.age >= 18);
console.log(firstAdultUser); //{name: "Adam", age:67}

//? OBIEKTY, KLASY, INSTANCJE, DZIEDZICZENIE

//deklaracja klasy
class City {}

//tworzenie instancji/egzemplarz klasy, są to różne obiekty
const Warsaw = new City();
const NewYork = new City();

//Tworzenie instancji klasy to zawsze wywołanie konstruktora

class Country {
  constructor(name, capital, population) {
    this.name = name;
    this.capital = capital;
    this.population = population;
    this.showName = () => console.log(this.name); //metoda każdej instancji
  }

  showCountryName() {
    console.log(`Nazwa kraju to ${this.name}`);
  }
}

const Poland = new Country("Polska");
const Italy = new Country("Włochy");

Poland.showCountryName();
Italy.showCountryName();
Poland.showName();
Italy.showName();

//* Klasy - dziedziczenie

class Person {
  constructor(name) {
    this.name = name;
  }
  showName() {
    console.log(`Imię osoby to ${this.name}`);
  }
}

class Student extends Person {
  constructor(name = "", grades = []) {
    super(name); // wywołuje odziedziczony konstruktor
    this.grades = grades;
  }
  showGrades() {
    const completed = this.grades.filter((grade) => grade > 2);
    console.log(
      `Student ${this.name} ma oceny: ${this.grades} i zaliczył już ${completed.length} przedmioty`
    );
  }
}

const Janek = new Student("Janek", [2, 3, 4, 5, 2, 3]);
Janek.showGrades(); // Student Janek ma oceny: 2,3,4,5,2,3 i zaliczył 4 przedmioty

// ? MECHANIZM this

//jest tworzony w chwili wywołania funkcji

const fn1 = function () {
  console.log(`${this}`, this);
};
fn1(); // undefined

("use strict");
const fn = function () {
  console.log(`${this} tu miał być \'use strict\' czyli \"undefined\"`);
};
fn(); // Window

const car = {
  brand: "opel",
  age: 2018,
  showAge() {
    console.log(`samochód z ${this.age} roku`);
  },
  showBrand: () => {
    console.log(`samochód marki ${this.brand}`);
  },
};

car.showAge();
car.showBrand(); //tutaj będzie "undefined" bo arrow function nie tworzy nowego kontekstu. "dziedziczy" po zakresie wyższym czyli window

//* "problem 1"

const dog = {
  name: "rocky",
  showName() {
    console.log(`Imię psa to ${this.name}`);
  },
};

// dog.showName();

const dogName1 = dog.showName; //nie działa
const dogName = dog.showName.bind(dog); //działa bo jest wymuszone wiązanie
dogName();

//* "problem 2"

const cat = {
  kids: ["lucek", "łapa"],
  showKidsNames() {
    console.log(`kot ma potomstwo ${this.kids}`);
    const showKidsNumber = function () {
      //zamiast function można dać arrow function
      console.log(this.kids.length);
    }.bind(this); // skoro kontekst "this" jest tworzony przy wywołaniu to dopisanie ".bind(this)" mówi:
    //Jak odpalasz tą funkcje to weź "this" który masz aktualnie, z tego poziomu, a nie twórz w nowym kontekście
    showKidsNumber();
  },
};
cat.showKidsNames();

//* bind()

// cat.showName() //wywołane na obiekcie cat, wiązanie domyślnie do obiektu cat

//cat.showName.bind(dog) // zwraca funkcje o tej samej nazwie ale jej nie wywołuje.
//This jest na stałe przypisane do nowego obiektu dog i dlatego nie będzie się już definiować w chwili wywołania metody

ReactDOM.render(<Message />, document.getElementById("root"));

//* syntetyczny event


handleClick(x,y, e){
  console.log(x,y,e)
}

//Wersja 1 - anonimowa funkcja strzałkowa, której argumentem jest event.W funkcji przekazana właściwa metoda z argumentami i eventem.

return(
  <input onChange={e=> this.handleClick(arg1, arg2, e)} />
)

// Wersja 2- bind (musi być this). Event jest już przekazywany naturalnie i nie trzeba go specjalnie zapisywać

return(
  <input onChange={this.handleClick.bind(this, arg1, arg2)} />
)

//! wywołanie metody setState powoduje ponowne renderowanie strony

//*przekazywanie id w metodzie map jako key to indeks w tablicy

//* można wyjmować dane z propsa i zamiast zapisywać tak (props) to można wyciągać dane tak ({user, id}) i wtedy nie trzeba pisać props.user.name

//?KOMPONENTY KONTROLOWANE I NIE KONTROLOWANE


//*kontrolowany
state = {
  city: ""
}

<input type="text"  value={this.state.city} />

//* HTML ma atrybut value, ale ma też go react. Jeśli ma być kontrolowany to trzeba użyć wartości value w polu formularza.
<textarea
//! value={this.state.text}
onChange={this.handleChange}
name="text"></textarea>

state = {
  text: ""
}
//Obsługa zmiany włąściwości w state (onChange na polu, onSubmit w formie)
handleChange = e =>{
  this.setState({
    text: e.target.value //dla inputa radio to będzie e.target.checked
}


<input type="text" value={this.state.text} onChange={this.handleChange} />

//*niekontrolowany

handleSubmit = e =>{
  e.preventDefault() //zabezpieczenie przed automatycznym odświeżaniem
  const name = this.refs.username.value // dodatnie gdzieś (np. tablica/ state)
  //const name = e.target.elements.userName.value => możliwość dostania się do dokumentu
  this.refs.username.value = ''; //wzerowanie
}

<div>
  <form onSubmit={this.handleSubmit}>
    <input
    type="text"
    placeholder="wpisz imię"
    name="userName"
    ref="username"
    defaultValue="imie" //dla checkboxa czy radio to będzie defaultChecked
     />
     <button type="submit" >potwierdz</button>
  </form>
</div>

//?Asynchroniczność

let number = 0
setTimeout(() => number++, 0)
console.log(number) //wynik to 0 bo pomimo iż setTimeout został ustawiony na zero sekund to i tak został dodany na koniec kolejki

//? AJAX

//tworzenie obiektu XMLHttpRequest który odpowiada za wszystkie etapy AJAX (definiowanie, wysyłanie, przechwycenie odpowiedzi, działanie)
const xhr = new XMLHttpRequest();

//metoda przygotowująca żądanie.
//*Jak (jaka metoda http)
//* gdzie (również ścieżka relatyna)
//* czy asynchronicznie (true)
xhr.open('GET', 'https://adres.com', true)

//wysłanie żądania
xhr.send(null)

//po uzyskaniu odpowiedzi jest zdarzenie onload do którego przypisujemy funkcje
xhr.onload = () => {}

//* kody odpowiedzi serwera
200- wszystko git
301- zasób przeniesiony na inny adres
404- strona nie została znaleziona
500- błąd na serwerze

//? FETCH I PROMISY

fetch(`adres.url`)
.then(res => console.log('działa'))
.catch(err)

