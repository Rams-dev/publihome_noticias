const KEY = "861600999a2f42908a1f70af0d278377";
async function getNews(){
    let response = await fetch(`http://newsapi.org/v2/top-headlines?country=mx&apiKey=${KEY}`);
    let res =  await response.json();
    console.log(res)
    fillDomNews(res.articles)
}

function fillDomNews(data){
    console.log(data)
    const componentNew = document.querySelector("#componentNew");
            for(let i = 0; i<data.length;i++){
            // console.log(data[i]["author"])
            componentNew.innerHTML += `
                <div class="card col-md-3 mt-3 mx-2";">
                <div class="card-header">
                <div class="text-end">
                <smal class="text-end">${data[i]["published_date"]}<small>
                </div>
                </div>
                    <img src="${data[i]["media"]}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text">${data[i]["title"]}.</p>
                        <p class="text-primary">Author:  ${data[i]["author"]} </p>
                        <a href="${data[i]["link"]}" target="_blank" class="btn btn-primary btn-block">Nota</a>
                    </div>
                </div>
        
            `
    //  });
        }
}

// getNews();

async function getNews2(){
    const response = await fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?pageSize=50&q=oaxaca&autoCorrect=true&pageNumber=1&language=es&toPublishedDate=null&fromPublishedDate=null", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "383ad32b14mshd63195d015ea45cp11698bjsn5dd5fb680116",
            "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
        }
    })
    let res = await response.json();
    console.log(res);
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.error(err);
    // });
}


// getNews2();


async function getNewsQ(){
    let url = `https://newsapi.org/v2/top-headlines?country=mx&apiKey=${KEY}`
    let response = await fetch(url);
    let res =  await response.json();
    console.log(res)
     fillDomNews(res.articles)
}


// getNewsQ()



function getNewsMediaStack(){
    let keyMS = "663382fcf7f02eeca1c66fe273c78a23"
    $.ajax({
        url: 'http://api.mediastack.com/v1/news',
        data: {
        access_key: keyMS,
        languages: 'es',
        countries: 'mx',
        limit: 30,
        offset: 30,
        keywords:"oaxaca"
        }
    }).done(function(data) {
        // let response = JSON.parse(data)
        console.log(data);
    });

}
// getNewsMediaStack()



async function getNewscatcher(){
    keyCatcher ="383ad32b14mshd63195d015ea45cp11698bjsn5dd5fb680116";

    const res = await fetch("https://newscatcher.p.rapidapi.com/v1/search_free?q=oaxaca&media=True&lang=es&page=mx",{
        "method": "GET",
        "headers": {
            "x-rapidapi-key": keyCatcher,
            "x-rapidapi-host": "newscatcher.p.rapidapi.com"
        }
    })
    const data = await res.json()
    console.log(data)
    fillDomNews2(data.articles)


}

function fillDomNews2(data){
    console.log(data)
    const componentNew = document.querySelector("#componentNew");
            for(let i = 0; i<data.length;i++){
            // console.log(data[i]["author"])
            componentNew.innerHTML += `
            <div class="col-md-4 mt-2">
            <div class="card">
                <div class="header">
                    <div class="title">
                        
                    </div>
                    <div class="date">
                       ${data[i]["published_date"]}
                    </div>
                </div>
                <div class="imge">
                    <img src="${data[i]["media"] != "null" ? data[i]["media"] : "https://www.google.com/url?sa=i&url=https%3A%2F%2Foscaps.mx%2Fproductos.php%3Fid_categoria%3D4&psig=AOvVaw38CFJFuLpJNjhKWIDlS64k&ust=1605995373536000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiO1pGNku0CFQAAAAAdAAAAABAD" }" alt="" class="img_imagen">
                </div>  
                <div class="body">
                    <div class="sumary">
                        <p>${data[i]["summary"]}</p>
                    </div>
                    <div class="button">
                        <a href="${data[i]["link"]}" target="_blanck" class="button_link">Ir a la nota</a>
                    </div>
                </div>
            </div>
        </div>
        
            `
    //  });
        }
}

 getNewscatcher()



window.frm_sus.addEventListener("submit", function(e){
    e.preventDefault();
    let formData = new FormData(e.currentTarget)
    // console.log(e.currentTarget)
    // console.log(formData);
    sendDataServer(formData);
})


const errortelefono = document.querySelector("#errortelefono")
const errornombre = document.querySelector("#errornombre")
async function sendDataServer(data){
    const response = await fetch("./server/getData.php",{
        method:"post",
        body: data,
    })
    const res = await response.json();
    console.log(res);
    // window.suscripcion.modal("hide")
    if(res == "ok"){
        // setInterval(()=>{
        //     console.log("hola")

        // },1000)
        $("#suscripcion").modal("hide");
    }else{
        for(let i=0; i<res.length;i++){
            if(res[i].nombre){
                console.log(res[i].nombre)
                errornombre.innerHTML = res[i].nombre 
                window.nombre.classList.add('is-invalid')
            }
            if(res[i].telefono){
                console.log(res[i].telefono)
                errortelefono.innerHTML = res[i].telefono 
                window.telefono.classList.add('is-invalid')
            }
        }
    }
}

const video = document.querySelector("#video");
 const option = {
 }

 function callback(entries,observer){
     console.log("video")
     if(entries[0].isIntersecting){
         video.removeAttribute("muted");
         video.play();
     }else{
         video.pause();
     }
 }
 const observer = new IntersectionObserver(callback)
 observer.observe(video)


let count =1;
window.addEventListener("scroll", function(e){
    // console.log(e)
    console.log(window.scrollY)
    // console.log("escroll")
    if(window.scrollY > "995"){
        showModalSus()
    }
})

function showModalSus(){
    if(count == 1){
        $("#suscripcion").modal('show')
        count--;
    }
}





$('#telefono').mask('000-000-00-00');