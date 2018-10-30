'use Strict'
//let storeLocation = ['SilverSpring', 'DC', 'Baltimore']
let conBody = document.getElementById('newBody')
let newBody1 = document.getElementById('newBody1')
let newBody2 = document.getElementById('newBody2')
let hourOfOperation = ['6am', '7am', '8am', '9am', '10am','11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','8pm']


  let CookieStore = {
  storeName:'SilverSpring',
  minNumberOfCustomersPerHour: 100,
  maxNumberOfCustomersPerHour: 150,
  aveNumberOfCookiesPurchasedPerCustomer: 3,
 // location: 'SilverSpring',

    numberOfCookieSoldPerHour: function(){
      let rundomSold = Math.ceil(Math.random() * (this.maxNumberOfCustomersPerHour - this.minNumberOfCustomersPerHour ) + this.minNumberOfCustomersPerHour)
      return rundomSold * this.aveNumberOfCookiesPurchasedPerCustomer
    }
  }
  let CookieStore2 = {
    storeName:'DC',
    minNumberOfCustomersPerHour: 80,
    maxNumberOfCustomersPerHour: 110,
    aveNumberOfCookiesPurchasedPerCustomer: 2,
   // location: 'DC',
  
      numberOfCookieSoldPerHour: function(){
        let rundomSold = Math.ceil(Math.random() * (this.maxNumberOfCustomersPerHour - this.minNumberOfCustomersPerHour ) + this.minNumberOfCustomersPerHour)
        return rundomSold * this.aveNumberOfCookiesPurchasedPerCustomer
      }
    }
    let CookieStore3 = {
      storeName:'Baltimore',
      minNumberOfCustomersPerHour: 50,
      maxNumberOfCustomersPerHour: 100,
      aveNumberOfCookiesPurchasedPerCustomer: 2,
     // location: 'Baltimore',
    
        numberOfCookieSoldPerHour: function(){
          let rundomSold = Math.ceil(Math.random() * (this.maxNumberOfCustomersPerHour - this.minNumberOfCustomersPerHour ) + this.minNumberOfCustomersPerHour)
          return rundomSold * this.aveNumberOfCookiesPurchasedPerCustomer
        }
      } 
     
      



      let elcookiesTitle = document.createElement('h2')
      conBody.appendChild(elcookiesTitle)
      elcookiesTitle.innerText = CookieStore.storeName



  for (let i=0; i<hourOfOperation.length; i++){
    console.log('CookieStore', hourOfOperation[i],  CookieStore.numberOfCookieSoldPerHour())
    //console.log('CookieStore2', hourOfOperation[i],  CookieStore2.numberOfCookieSoldPerHour())
   // console.log('CookieStore', hourOfOperation[i],  CookieStore3.numberOfCookieSoldPerHour())
    //display store information into html
let Data1 = document.createElement('ul')
conBody.appendChild(Data1) 
Data1.innerText ='Cookies sold at ' + hourOfOperation[i] + ' = ' + CookieStore.numberOfCookieSoldPerHour()
  }

   let cookiesTitle2 = document.createElement('h2')
   newBody1.appendChild(cookiesTitle2)
   cookiesTitle2.innerText = CookieStore2.storeName



      for (let i=0; i<hourOfOperation.length; i++){
     console.log('CookieStore', hourOfOperation[i],  CookieStore2.numberOfCookieSoldPerHour())
//     //console.log('CookieStore2', hourOfOperation[i],  CookieStore2.numberOfCookieSoldPerHour())
//    // console.log('CookieStore', hourOfOperation[i],  CookieStore3.numberOfCookieSoldPerHour())
//     //display store information into html
let Data2 = document.createElement('ul')
newBody1.appendChild(Data2) 
Data2.innerText ='Cookies sold at ' + hourOfOperation[i] + ' = ' + CookieStore2.numberOfCookieSoldPerHour()
  }


  let cookiesTitle3 = document.createElement('h2')
   newBody2.appendChild(cookiesTitle2)
   cookiesTitle3.innerText = CookieStore3.storeName



      for (let i=0; i<hourOfOperation.length; i++){
     console.log('CookieStore', hourOfOperation[i],  CookieStore3.numberOfCookieSoldPerHour())
//     //console.log('CookieStore2', hourOfOperation[i],  CookieStore2.numberOfCookieSoldPerHour())
//    // console.log('CookieStore', hourOfOperation[i],  CookieStore3.numberOfCookieSoldPerHour())
//     //display store information into html
let Data3 = document.createElement('ul')
newBody2.appendChild(Data3) 
Data3.innerText ='Cookies sold at ' + hourOfOperation[i] + ' = ' + CookieStore3.numberOfCookieSoldPerHour()
  }
