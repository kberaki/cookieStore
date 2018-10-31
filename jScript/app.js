'use Strict'
//let storeLocation = ['SilverSpring', 'DC', 'Baltimore']
//let conBody = document.getElementById('newBody')
//let newBody1 = document.getElementById('newBody1')
//let newBody2 = document.getElementById('newBody2')
let newTable = document.getElementById('store-table')
let newForm = document.getElementById('school-form')


let hourOfOperation = ['6am', '7am', '8am', '9am', '10am','11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','8pm']
let Stores =[]

let BestCookies = function(name, location, min, max, ave){ 
  this.storeName = name 
  this.location = location
  this.minNumberOfCustomersPerHour = min 
  this.maxNumberOfCustomersPerHour = max 
  this.aveNumberOfCookiesPurchasedPerCustomer = ave
}

BestCookies.prototype.numberOfCookieSoldPerHour = function(){
  let rundomSold = Math.ceil(Math.random() * (this.maxNumberOfCustomersPerHour - this.minNumberOfCustomersPerHour ) + this.minNumberOfCustomersPerHour)
  return rundomSold * this.aveNumberOfCookiesPurchasedPerCustomer
}
let CookieStore = new BestCookies('CookieStore', 'SilverSpring', 60, 160, 3)
let CookieStore2 = new BestCookies('CookieStore2', 'DC', 80, 110, 2)
let CookieStore3 = new BestCookies('CookieStore3', 'Arlington', 50, 30, 8)
  
Stores.push(CookieStore,CookieStore2, CookieStore3)

let eHeader = document.createElement('tr')
newTable.appendChild(eHeader)
let elTh = document.createElement('th')
eHeader.appendChild(elTh)
elTh.innerText ='Store Name'

for(let i = 0; i < hourOfOperation.length; i++) {
  let elTh = document.createElement('th')
  eHeader.appendChild(elTh)
  elTh.innerText = hourOfOperation[i]
}
//let totalCookiesPerDay = Stores[i].numberOfCookieSoldPerHour()
//create a new row and append it to our table
//BestCookies.prototype.cookiesSoldPerDay = function(){
//BestCookies.prototype.prototype.renderNewSchool
BestCookies.prototype.renderNewStore = function() {
  let elRow = document.createElement('tr')
  newTable.appendChild(elRow)
  let elTh = document.createElement('th')
  elRow.appendChild(elTh)
  elTh.innerText = this.storeName
  
  let counter = 0
  for(let i = 0; i < hourOfOperation.length; i++) {
    let cookiesSoldPerDay = this.numberOfCookieSoldPerHour()
    let elTd = document.createElement('td')
    elRow.appendChild(elTd)
    elTd.innerText = cookiesSoldPerDay
    counter += cookiesSoldPerDay
      
  } 

  let rTotal = document.createElement('th')
  elRow.appendChild(rTotal)
  rTotal.innerText = counter
  
}
 

for(let j = 0; j < Stores.length; j++) {
  Stores[j].renderNewStore()
  
}
let eTotal = document.createElement('th')
eHeader.appendChild(eTotal)
eTotal.innerText = 'Total Per Day'


//access our inputs on our form through dot notation
let elNameOfStores = newForm.nameOfStore 
let elLocation = newForm.newLocation
let elMinCookies = newForm.minCookies
let elMaxCookies = newForm.maxCookies
let elAveCookies = newForm.aveCookies

//create an event listener that will listen for a submit event and create a new instance of our constructor function using the values collected from our form
newForm.addEventListener('submit', function(event) {
  event.preventDefault()
  let newStore = new BestCookies(elNameOfStores.value, elLocation, parseInt(elMinCookies.value), parseInt(elMaxCookies.value), parseInt(elAveCookies.value))

  Stores.push(newStore)
  
  //invoke our rendernewschool method on our new school to generate a new row on our table. 
  newStore.renderNewStore()
})

//}




// let elNameOfSchool = newForm.elNameOfSchool
// console.log(elNameOfSchool)
// let elMinStudents = newForm.elMinStudents
// newForm.addEventListener('submit', function(event)  {
//   event.preventDefault()
//   console.log('submitted')
// })

// for(let i=0; i<hourOfOperation.length; i++){
//   let counter =0
//   for(let j=0;j<Stores.length; j++)
  
 
// }
// // let eTotal = document.createElement('th')
// newTable.appendChild(eTotal)
// eTotal.innerText = 'Total Cookies sold'


// //display school name in h2
// let elHogwartsTitle = document.createElement('h2')
// elBody.appendChild(elHogwartsTitle)
// elHogwartsTitle.innerText = Hogwarts.schoolName

// //display store information into html
// let elList = document.createElement('ul')
// elBody.appendChild(elList)



   
    
       


//       let elcookiesTitle = document.createElement('h2')
//       conBody.appendChild(elcookiesTitle)
//       elcookiesTitle.innerText = CookieStore.storeName



//   for (let i=0; i<hourOfOperation.length; i++){
//     console.log('CookieStore', hourOfOperation[i],  CookieStore.numberOfCookieSoldPerHour())
//     //console.log('CookieStore2', hourOfOperation[i],  CookieStore2.numberOfCookieSoldPerHour())
//    // console.log('CookieStore', hourOfOperation[i],  CookieStore3.numberOfCookieSoldPerHour())
//     //display store information into html
// let Data1 = document.createElement('ul')
// conBody.appendChild(Data1) 
// Data1.innerText ='Cookies sold at ' + hourOfOperation[i] + ' = ' + CookieStore.numberOfCookieSoldPerHour()
//   }

//    let cookiesTitle2 = document.createElement('h2')
//    newBody1.appendChild(cookiesTitle2)
//    cookiesTitle2.innerText = CookieStore2.storeName



//       for (let i=0; i<hourOfOperation.length; i++){
//      console.log('CookieStore', hourOfOperation[i],  CookieStore2.numberOfCookieSoldPerHour())
// //     //console.log('CookieStore2', hourOfOperation[i],  CookieStore2.numberOfCookieSoldPerHour())
// //    // console.log('CookieStore', hourOfOperation[i],  CookieStore3.numberOfCookieSoldPerHour())
// //     //display store information into html
// let Data2 = document.createElement('ul')
// newBody1.appendChild(Data2) 
// Data2.innerText ='Cookies sold at ' + hourOfOperation[i] + ' = ' + CookieStore2.numberOfCookieSoldPerHour()
//   }


//   let cookiesTitle3 = document.createElement('h2')
//    newBody2.appendChild(cookiesTitle2)
//    cookiesTitle3.innerText = CookieStore3.storeName



//       for (let i=0; i<hourOfOperation.length; i++){
//      console.log('CookieStore', hourOfOperation[i],  CookieStore3.numberOfCookieSoldPerHour())
// //     //console.log('CookieStore2', hourOfOperation[i],  CookieStore2.numberOfCookieSoldPerHour())
// //    // console.log('CookieStore', hourOfOperation[i],  CookieStore3.numberOfCookieSoldPerHour())
// //     //display store information into html
// let Data3 = document.createElement('ul')
// newBody2.appendChild(Data3) 
// Data3.innerText ='Cookies sold at ' + hourOfOperation[i] + ' = ' + CookieStore3.numberOfCookieSoldPerHour()
//   }



  



// let elSchoolTable = document.getElementById('school-table')
//   let hourOfOperation = ['6am', '7am', '8am', '9am', '10am','11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','8pm']

// // declare a new variable and assign the value of a constractore function which will return a new object




//   let elHeader =document.createElementpwd

//   //console.log()
//   // create  a new row and append it to our table
//   let elRow = document.createElement('tr')
//   elSchoolTable.appendChild(elRow)

//   for(let j=0; j < schools.length; j++){
//     let elRow = document.createElement('tr')
//     elSchoolTable.appendChild(elRow)
//     let elTh = document.createElement('th')
//     elRow.appendChild(elTd)
//     elRow.innerText = schools[j].schoolName
//     for(let i=0; i < hourOfOperation.length; i++){
//     let elTd = document.createElement('td')
//     elRow.appendChild(elTd)
//     elTd.innerText = schools[j].spellPerStudent()
//   }
// }



