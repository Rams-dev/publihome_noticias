
async function getNewscatcher(val = "", page = 1){
    keyCatcher ="383ad32b14mshd63195d015ea45cp11698bjsn5dd5fb680116";
    const res = await fetch(`https://newscatcher.p.rapidapi.com/v1/search?q=oaxaca&media=True&sort_by=date&topic=${val}&lang=es&country=mx&page=${page}`,{
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
            componentNew.innerHTML += `
            <div class="col-md-4 col-lg-4 col-sm-6 mt-2">
            <div class="card">
                <div class="header">
                    <div class="title">
                        
                    </div>
                    <div class="date">
                       ${data[i]["published_date"]}
                    </div>
                </div>
                <div class="imge">
                    <img src="${data[i]["media"] != null ? data[i]["media"] : "./assets/imagen_no_disponible.png" }" alt="" class="img_imagen">
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
        }
}

    getNewscatcher()

const btnModalSus = document.querySelector("#btnModalSus")
btnModalSus.addEventListener('click', function(e){
    e.preventDefault();
    $("suscripcion").modal("show")
    count--;

})

window.frm_sus.addEventListener("submit", function(e){
    e.preventDefault();
    let formData = new FormData(e.currentTarget)
    // console.log(e.currentTarget)
    // console.log(formData);
    sendDataServer(formData);
})


// window.onscroll = (e) =>{
//     let page = 2;
//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//         // getNewscatcher("",page);
//         page++
//     }
// }

const errortelefono = document.querySelector("#errortelefono")
const errornombre = document.querySelector("#errornombre")
const msg =  document.querySelector(".msg");
async function sendDataServer(data){
    const response = await fetch("./server/getData.php",{
        method:"post",
        body: data,
    })
    const res = await response.json();
    console.log(res);
    // window.suscripcion.modal("hide")
    if(res.ok){
        msg.innerHTML = `
        <div class="alert alert-primary text-center" role="alert">
             <small class="text-center">${res.ok}</small>
        </div>
        ` 
        // setInterval(()=>{
        //     console.log("hola")

        // },1000)
        // $("#suscripcion").modal("hide");
    }
    if(res.existe){
        msg.innerHTML = `
        <div class="alert text-center alert-danger alert-dismissible fade show" role="alert">
            <small class="text-center">${res.existe}</small>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
             <span aria-hidden="true">&times;</span>
             
        </div>
        `

    }
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

    if(res.fail){
        msg.innerHTML = `
        <div class="alert alert-danger" role="alert">
             ${res.fail}
        </div>
        ` 
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

// const btnDeportes = document.querySelector("#deportes")
// const btnPolitica = document.querySelector("#politica")

// btnDeportes.addEventListener('click',function(e){
//     e.preventDefault;
//     getNewscatcher("sport")
// })

// btnPolitica.addEventListener('click',function(e){
//     e.preventDefault;
//     getNewscatcher("politics")

// })



$('#telefono').mask('000-000-00-00');