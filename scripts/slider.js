const left=document.querySelector("div.left")
const right=document.querySelector("div.right")
const sliderctn=document.querySelector("div#sliderctn")
const indicators=document.querySelectorAll("div.indicator")
let tracker=0

const hsliderctn=document.querySelector("div#hsliderimagectn")
const hsliderindicators=document.querySelectorAll("div.hsliderindicator")
let hslidertracker=0

left.addEventListener("click",function(e){
    //tracker= (tracker >= 6)? 6:++tracker
    if(tracker >= 6 ){
        indicators[0].click()
    }else{
        ++tracker
        sliderctn.scroll({
            top:0,
            left:`${sliderctn.scrollLeft+200}`
        })
        indicators.forEach(function(indicator){
            indicator.classList.remove("actif")
        })
        indicators[tracker].classList.add("actif")
    }

})

right.addEventListener("click",function(e){
    //tracker= (tracker <= 0)? 0:--tracker
    if(tracker <= 0){
        indicators[6].click()
    }else{
        --tracker
        sliderctn.scroll({
            top:0,
            left:`${sliderctn.scrollLeft-200}`
        })
        indicators.forEach(function(indicator){
            indicator.classList.remove("actif")
        })
        indicators[tracker].classList.add("actif")
    }

})

indicators.forEach(function(indicator,index){
    indicator.addEventListener("click",function(e){
        indicators.forEach(function(indicator){
            indicator.classList.remove("actif")
        })
        indicators[index].classList.add("actif")
        tracker=index
        sliderctn.scroll({
            top:0,
            left:`${200*tracker}`
        })
    })
})

hsliderindicators.forEach(function(hsliderindicator,index){
    hsliderindicator.addEventListener("click",function(e){
        hsliderindicators.forEach(function(hsliderindicator){
            hsliderindicator.classList.remove("actif")
        })
        hsliderindicators[index].classList.add("actif")
        hslidertracker=index
        hsliderimagectn.scroll({
            top:0,
            left:`${250*hslidertracker}`
        })
        //effacer l ancient interval et definir un nouveau synchronise le delai avant scroll automatique
        clearInterval(interval)
        interval = setInterval(() => {
            next= ((hslidertracker+1) > 6)? 0:hslidertracker+1
            hsliderindicators[next].click()
        }, 5000);
    })
})

interval = setInterval(() => {
    next= ((hslidertracker+1) > 6)? 0:hslidertracker+1
    hsliderindicators[next].click()
}, 5000);