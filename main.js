
( () => {


    "use strict"

    const featuresData = () =>{ 
    const featuresList  = document.querySelectorAll(".list")
    const featuresImage = document.querySelector(".feat_img")
    const featuresHead = document.querySelector("#book")
    const featuresPara = document.querySelector(".bookP")

    fetch("/data.json").then(response => {
        return response.json()
    }).then( data=> {
        
    featuresList.forEach( (btn,b) => {
        btn.addEventListener("click", () => {
      featuresHead.innerHTML = data.intro[b].name
      featuresPara.innerHTML = data.intro[b].note
      featuresImage.setAttribute("src", data.intro[b].image.svg)
        


         for (let i = 0; i < featuresList.length; i++) {
            
            if (featuresList[i] !== btn) {
         featuresList[i].classList.remove("active")
            }
            
        else {
            featuresList[i].classList.toggle("active")
        }
         }
        })
    })
    })
}
featuresData()


    const FAQ = () => {
    const displayFaq = document.querySelectorAll(".btn")

    displayFaq.forEach( btn => {
        btn.addEventListener("click", function() {

        const answer = this.querySelector(".FAQs__answer")
        const icons = this.querySelectorAll(".plus__sub")
        icons[0].classList.toggle("hide")
 
        if (! answer.style.maxHeight) {
            answer.style.maxHeight = answer.scrollHeight + 20 + "px"
            answer.style.padding = `0.3rem 2px`
            icons[0].style.display = null
           }

    else {
        answer.style.maxHeight = null
        answer.style.padding = 0
        icons[0].style.display = "block"
    }

        })
    })
}
FAQ()


    const contact = () => {
   const contact = document.querySelector(".con")
   const mail = document.querySelector("#email")

   contact.addEventListener("click", () => {
    const reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
   

   const error = document.querySelector('#email-err')
   
       
    let counter=0; 

    if( !reEmail.test(mail.value) )
			{
                error.innerHTML ="Please type add a valid email address"
				counter++;
                error.style.display = "block"
			}
        else {
            error.style.display = "none"
        }
   })

 }
 contact()


const observer = new IntersectionObserver(  entries => {
    entries.forEach( entry => {
        console.log(entry)

        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }

        else {
            entry.target.classList.remove('show')
        }
    })
})




const slide = document.querySelectorAll(".hide")
slide.forEach( w => observer.observe(w)
)

 const menubar = () => {
const menu = document.querySelector(".menu-bar")
const navGate = document.querySelector(".navigation")
const items = document.querySelector(".nav-items")
const nav = document.querySelector(".main")


menu.addEventListener("click",function(){
   menu.classList.toggle("menu_active")
   navGate.classList.toggle("nav_active")
   items.classList.toggle("nav-items_active")
   nav.classList.toggle("main-active")
})
}
menubar()
})

()