const textSection=document.querySelector("section#animatedText")

const callback=function(entries,observer){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            entry.target.style.opacity="1"
            entry.target.style.marginTop="50px"
        }else{
            return
        }
    })
}
const options={
    rootMargin:"0px 0px -22% 0px"
}

const observer = new IntersectionObserver(callback,options)
observer.observe(textSection)