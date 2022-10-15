arraymenue = [
    {
        typee : "all",
        name :  "Buttermilk Pancakes" ,
        price : "$15.99",
        desc :  "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        Img : "./item-1.jpeg"
    }
    ,
    {
        typee : "all",
        name :  "Diner Double" ,
        price : "$13.99",
        desc :  "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        Img : "./item-2.jpeg"
    }

    ,
    {
        typee : "all",
        name :  "Godzilla Milkshake" ,
        price : "$6.99",
        desc :  "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
        Img : "./item-3.jpeg"
    },
    {
        typee : "breakfast",
        name :  "Country Delight" ,
        price : "$20.99",
        desc :  "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
        Img : "./item-4.jpeg"
    }, 
     {
        typee : "breakfast",
        name :  "Egg Attack" ,
        price : "$22.99",
        desc :  "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
        Img : "./item-5.jpeg"
    },
    {
        typee : "Lunch",
        name :  "Oreo Dream" ,
        price : "$18.99",
        desc :  "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        Img : "./item-6.jpeg"
    }
    ,
    {
        typee : "breakfast",
        name :  "Bacon Overflow" ,
        price : "$8.99",
        desc :  "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        Img : "./item-7.jpeg"
    }
    ,
    {
        typee : "Shakes",
        name :  "American Classic" ,
        price : "$12.99",
        desc :  "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
        Img : "./item-8.jpeg"
    }
    ,
    {
        typee : "Shakes",
        name :  "Quarantine Buddy" ,
        price : "$16.99",
        desc :  "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        Img : "./item-9.jpeg"
    }
    ,
    {
        typee : "Dinner",
        name :  "Steak Dinner" ,
        price : "$15.99",
        desc :  "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        Img : "./item-10.jpeg"
    }
]


const container = document.getElementById("html-link")
window.addEventListener('DOMContentLoaded',()=>{
index(arraymenue)
})
function index(elem){
    const all = elem.map(key =>{
        return(
            `<article >
          <div class="hi">  
        <div >
        <img src=${key.Img} alt=""/ class="img">
 
        </div>
         <div>
         <div class="content">
             <h5 class="name">${key.name}</h5>
             <hr class="hr">
             <p class="price">${key.price}</p>
            </div>
            <p class="description">${key.desc}</p>
         </div>
         </div>
   </article`
        )
    })
    container.innerHTML = all
}

  

window.addEventListener("DOMContentLoaded",()=>{
    buttontype()
})
const containerbuttons = document.getElementById('buttonall')


let emptyarray = [];
function buttontype(){
  arraymenue.map(elem =>{
    if(!emptyarray.includes(elem.typee)){
      emptyarray.push(elem.typee)  
    }
  })
  const lastarray =  emptyarray.map(charackter=>{
      return(`<button class='btns'>${charackter}</button>`)
    }).join('')
    containerbuttons.innerHTML = lastarray;

  const filterbtns = containerbuttons.querySelectorAll('.btns');
  filterbtns.forEach(elem =>{
    elem.addEventListener('click',(event)=>{
      const foodtype = event.target.innerText;
      const filtermeneu = arraymenue.filter(meneuType=>{
        if(meneuType.typee === foodtype){
          return meneuType
 
        }
      })
      if(foodtype === "all"){
        index(arraymenue)
      }else{
        index(filtermeneu)
      }
    })
  })  
}







// function dinner(){
//     var myarray = arraymenue.filter(function(ele){
//         return ele.typee === "Dinner"   
//     });
//     return index(myarray)




