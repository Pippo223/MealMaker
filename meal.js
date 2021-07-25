const menu = {
    _courses:{
      appetizers:[],
      mains:[],
      desserts:[]
    },
    get appetizers() {
      return this.appetizers
    },
    set appetizers(newAppetizers) {
      this.appetizers = newAppetizers
    },
    get mains() {
      return this.mains
    },
    set mains(newMains) {
      this.mains = newAppetizers
    },
    get desserts() {
      return this.desserts
    },
    set desserts(newDesserts) {
      this.dessertss = newDesserts
    },
  
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name:dishName,
        price:dishPrice
      }
       this._courses[courseName].push(dish);
    },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName]
    const randomIndex = Math.floor(Math.random() * dishes.length)
    return dishes[randomIndex] 
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers')
     const main = this.getRandomDishFromCourse('mains')
    const dessert = this.getRandomDishFromCourse('desserts')
    const totalPrice = appetizer.price + main.price + dessert.price
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}` 
  }
  }
  
  menu.addDishToCourse('appetizers','orange juice', 5.25)
  menu.addDishToCourse('mains','Jollof', 15.00)
  menu.addDishToCourse('desserts','Spring rolls', 5.25)
  menu.addDishToCourse('appetizers','Lamugee', 4.5)
  menu.addDishToCourse('mains','Banku and Okro', 13.50)
  menu.addDishToCourse('desserts','bread roll', 6.00)
  menu.addDishToCourse('appetizers','Sobolo', 4.5)
  menu.addDishToCourse('mains','Kenkey and fish', 12.00)
  menu.addDishToCourse('desserts','brocolli cake', 8.00)
  menu.addDishToCourse('appetizers','Tamarind Juice', 4.0)
  menu.addDishToCourse('mains','Fufu and Goat Light Soup', 16.00)
  menu.addDishToCourse('desserts','Chocolate Butter Cookies', 11.00)
  
  console.log(menu.generateRandomMeal())
  
  
  
  