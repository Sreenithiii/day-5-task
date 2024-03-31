//task 1
// A&B
class Movie0{
    constructor(tittle,studio,rating="PG")
    {
        this.tittle=tittle
        this.studio=studio
        this.rating=rating
    }
}
const obj =new Movie0("SpiderMan","Marval Entertainment","8.2");
const obj1 =new Movie0("ironMan","Marvel studios");
console.log(obj.tittle,obj.studio,obj.rating);
console.log(obj1.tittle,obj1.studio,obj1.rating);
//C

class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title; 
      this.studio = studio; 
      this.rating = rating;
    }
  }
  
  class MovieManager {
    static getPG(movies) { 
      const pgMovies = [];
      for (const movie of movies) {
        if (movie.rating === "PG") {
          pgMovies.push(movie);
        }
      }
      return pgMovies;
    }
  }
  
  const obj3 = new Movie("13 hours", "Paramount Pictures");
  const obj4 = new Movie("die hard", "Silver Pictures Gordon Company", "5.2");
  const obj5 = new Movie("2012", "Centropolis Entertainment");
  const obj6 = new Movie("avengers", "Marvel studios", "8");
  const obj7 = new Movie("Lion King", "Walt Disney Pictures and Fairview");
  
  const movies = [obj3, obj4, obj5, obj6, obj7]; 
  
  const pgMovies = MovieManager.getPG(movies); 
  console.log(pgMovies);

  //D
class Movie1{
    constructor(tittle,studio,rating)
    {
      this.tittle=tittle
      this.studio=studio
      this.rating=rating
   }
  }
  const obj2=new Movie1("casino royale","Eon production","PG13");
  console.log(obj2.tittle,obj2.studio,obj2.rating);

// task 2
  class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color = color;
    }
    get Radius(){
        return this.radius
    }
    set Radius(n){
        this.radius = n;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color = c
    }
    get toString(){
        return `"Circle[radius= ${this.radius} ,color = ${this.color}]"`
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2)
    }
    get circumference(){
        return 2*Math.PI*this.radius
    }
}
let obj8 = new Circle(1.0,"red") 
console.log(obj8.Color);
console.log(obj8.Radius);
console.log(obj8.toString);
console.log(obj8.area);
console.log(obj8.circumference);
obj.Radius=3.5
console.log(obj8.Radius);
obj.Color="green"
console.log(obj8.Color);

//Task 3 Write a “person” class to hold all the details

class Person {
     constructor(name,age,gender,maritalstatus,contact,email)
      {
      this.name=name;
      this.age=age;
      this.gender=gender;
      this.maritalstatus=maritalstatus;
      this.contact=contact;
     this.email=email;
     }
   }
  const obj9=new Person ("srinithi","25","female","married","9345515687","srinithimaheswaran16dotcom");
  
  console.log(obj9.name,obj9.age,obj9.gender,obj9.maritalstatus,obj9.contact,obj9.email);
  

  //Task 4 write a class to calculate the Uber price.

  class UberPrice{
    constructor(kilometer, price) {
        this.kilometer = kilometer;
        this.price = price;
    }
    getKilometer() {
        return this.kilometer;
    }
  
    setKilometer(kilometer) {
        this.kilometer = kilometer;
    }
  
    
    getPrice() {
        return this.price;
    }
  
    setPrice(price) {
        this.price = price;
    }
  
  }
  const obj10 = new UberPrice(100, 50);
  console.log(obj10.getKilometer() * obj10.getPrice());