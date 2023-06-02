
const hamburger =document.querySelector("nav span#hamburger")
const closebtn=document.querySelector("div#row1 p")
const dots=document.querySelector("nav+span")
const layer=document.querySelector("div#layer")

/* chargement et layer */

window.addEventListener("load",function(){

    timeout=this.setTimeout(function(){
        layer.style.opacity=0
        layer.style.display="none"
        clearTimeout(timeout)
    },2000)
    document.querySelectorAll("div.indicator")[3].click()

})


/*gestion des evenements des dots*/ 

dots.addEventListener("click",function(event){
    const menu=document.querySelector("section#menu")
    menu.classList.contains("ouvert") & closebtn.click()
    const sectionNumero=document.querySelector("section#numero")
    sectionNumero.style.opacity = (window.getComputedStyle(sectionNumero).opacity==="0")? 1 : 0

})

/* gestion des evenements du hamburger menu*/ 
hamburger.addEventListener("mouseenter",function(event){
    event.target.style.transform="rotate(90deg)"
    //event.target.style.color="yellow"
    tOut=setTimeout(function(){
        event.target.style.transform="rotate(79deg)"
        event.target.style.color="white"
        clearTimeout(tOut)
    },500)
})

hamburger.addEventListener("click",function(event){
    const menu=document.querySelector("section#menu")
    menu.style.left="0"
    menu.classList.add("ouvert")
    const sectionNumero=document.querySelector("section#numero")
    sectionNumero.style.opacity = 0
})

//gestion des evenements du bouton de fermeture du menu lateral

closebtn.addEventListener("click",function(event){
    const menu=document.querySelector("section#menu")
    menu.style.left="-300px"
    menu.classList.remove("ouvert")
})

/*gestion des evenements des controls du slider
const gauche=document.querySelector("div#gauche span")
const droite=document.querySelector("div#droite span")
const imagectn=document.querySelector("div#imagectn")
 
function slidermovelistener(event){
    switch(event.target.id){
        case "spandroite":
            x=Math.floor(document.querySelector("div#imagectn").getBoundingClientRect().x+200)
            if(x % 200 !== 0){
                if(x % 200 > 0  && x % 200 < 20){
                    x-=(x % 200)
                }else{
                    x= Math.ceil(x/100)*100
                }
            }
            if(x <=200  && x>=0 ){
                imagectn.style.transform="translateX("+20+"px)"
                tOut2=setTimeout(function(event){
                    imagectn.style.transform="translateX("+0+"px)"
                    //clearTimeout(tOut2)
                },500)
            }else{
                imagectn.style.transform="translateX("+x+"px)"
            }
            
            break
        case "spangauche" :
            x=document.querySelector("div#imagectn").getBoundingClientRect().x-200
            if(x % 200 !== 0){
                if(x % 200 > 0  && x % 200 < 20){
                    x-=(x % 200)
                }else{
                    x= Math.ceil(x/100)*100
                }
            }
            const nbElements=imagectn.childElementCount
            const vw=window.innerWidth
            //onscreenElement=Math.floor(vw/200)
            lastoffset=(nbElements*200)-vw
            if(x <= -lastoffset){
                x=-1*lastoffset-20
                imagectn.style.transform="translateX("+x+"px)"
                tOut2=setTimeout(function(event){
                    x+=20
                    imagectn.style.transform="translateX("+x+"px)"
                    //clearTimeout(tOut2)
                },500)
            }else{
                 imagectn.style.transform="translateX("+x+"px)"
            break
            }
            
    }

}

gauche.addEventListener("click",slidermovelistener)
droite.addEventListener("click",slidermovelistener)
*/

//gestion des evenements du menu
const menulinks=document.querySelectorAll("div.menuitem h2 a")

menulinks.forEach(function(lien,i){
    lien.addEventListener("click",function(event){
        menuitemDiv=document.querySelectorAll("div.menuitem")
        menuitemDiv.forEach(function(a){a.classList.remove("current")})
        menuitemDiv[i].classList.add("current")
    })
})

//galerie
const eyeslayers=document.querySelectorAll("div.eye")

eyeslayers.forEach(function(eyeslayer){
    eyeslayer.addEventListener("mouseenter",function(e){
        console.log(e.currentTarget)
        e.currentTarget.querySelector("img").style.width="40px"
        e.currentTarget.querySelector("img").style.height="40px"
    })
    eyeslayer.addEventListener("mouseleave",function(e){
        console.log(e.currentTarget)
        e.currentTarget.querySelector("img").style.width="32px"
        e.currentTarget.querySelector("img").style.height="32px"
    })
})