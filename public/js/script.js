
const IMAGES_DATA = {
    categorias: {
        sinreserva: [
            "Atp-",
            "13",
            "16",
            "18",
            "Cxxx-"
        ],
        conreserva: [
            "Atp-Adv",
            "13Adv",
            "16-",
            "18Adv"
        ]
    },
    leyendas: [
        "7-45",
        "10-46",
        "Adulta-44"
    ],
    ddDataSinReserva: [],
    ddDataConReserva: [],
    ddDataLeyendas: []
}

let selectCatSinReserva = $("#select-categoria-sinreserva");
let selectCatConReserva = $("#select-categoria-conreserva");
let selectLeyenda = $("#select-leyenda");
let checkboxDescriptores = $("#checkbox-descriptores");

function cargarSelectCategorias(){

    let categorias = IMAGES_DATA.categorias;

    for (const cat of categorias.sinreserva) {

        let imgUrl = "assets/calificacion-edad/Caec_" + cat + "Trans.png";

        selectCatSinReserva.innerHTML += `<option></option>`;

        IMAGES_DATA.ddDataSinReserva.push({
            imageSrc: imgUrl,
            value: imgUrl,
            selected: false
        })
    }

    for (const cat of categorias.conreserva) {

        let imgUrl = "assets/calificacion-edad/Caec_" + cat + "Trans.png";

        selectCatConReserva.innerHTML += `<option></option>`;

        IMAGES_DATA.ddDataConReserva.push({
            imageSrc: imgUrl,
            value: imgUrl,
            selected: false
        })
    }

}


function cargarSelectLeyendas(){

    let leyendas = IMAGES_DATA.leyendas;

    for (const leyenda of leyendas) {

        let imgUrl = "assets/leyendas/Caec_Leyenda-" + leyenda + ".png";

        selectLeyenda.innerHTML += `<option></option>`;

        IMAGES_DATA.ddDataLeyendas.push({
            imageSrc: imgUrl,
            value: imgUrl,
            selected: false
        })
    }

}


function cargarCheckboxDescriptores(){

    let imgSrc = IMAGES_DATA.descriptores;
}



function descargarLogo(){
    html2canvas(document.querySelector("#logo")).then((canvas) => {
        let a = document.createElement('a');
        document.body.appendChild(a)
        a.href = canvas.toDataURL("image/png", 1.0);
        a.download = 'logo.png';
        a.click();
        
    })
}



document.addEventListener("DOMContentLoaded", function(){
 
    cargarSelectCategorias()

    cargarSelectLeyendas()

    selectCatSinReserva.ddslick({
        data: IMAGES_DATA.ddDataSinReserva,
        selectText: "Categoría sin reservas",
        onSelected: function(data){
            document.getElementById("logo-categoria").innerHTML = `
                <div><img class="logo-categoria" src="${data.selectedData.value}"></div>
            `
        }   
    });

    selectCatConReserva.ddslick({
        data: IMAGES_DATA.ddDataConReserva,
        selectText: "Categoría con reservas",
        onSelected: function(data){
            document.getElementById("logo-categoria").innerHTML = `
                <div><img class="logo-categoria" src="${data.selectedData.value}"></div>
            `
        }   
    });

    selectLeyenda.ddslick({
        data: IMAGES_DATA.ddDataLeyendas,
        selectText: "Leyenda",
        onSelected: function(data){
            if(data.selectedData.value=="sinleyenda"){
                document.getElementById("logo-leyenda").innerHTML = "";
                document.getElementById("categoria-separacion").style.display = "none"
            } else {
                document.getElementById("categoria-separacion").style.display = "flex"
                document.getElementById("logo-leyenda").innerHTML = `
                    <div><img class="logo-leyenda" src="${data.selectedData.value}"></div>
                `
            }
      
        }
    })

})