document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector(".img");
    const city = document.querySelector(".city");
    const mountain = document.querySelector(".mountain");
    const sports = document.querySelector(".sports");
    city.addEventListener("click", function() {
        console.log("city");
        console.log(image);
        if(window.innerWidth > 500){
            image.src = "/assets/city-bg-ms.gif";
        }else{
            image.src = "/assets/city-bg-ms.gif";
        }
    });
    mountain.addEventListener("click", function() {
        console.log("city");
        console.log(image);
       image.src = "/assets/mountain-bg-ds.gif";
    });
    sports.addEventListener("click", function() {
        console.log("city");
        console.log(image);
       image.src = "/assets/sports-bg-ds.gif";
    });
});


document.querySelector(".city").addEventListener("click",function(){
    console.log("city");
    document.querySelector(".preference").style.display="none";
    document.querySelector(".hide-container").style.display="block";

})


