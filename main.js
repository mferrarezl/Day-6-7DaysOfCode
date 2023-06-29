var congelados = [];
var cong = document.getElementById('btncong');
var congHTML = document.getElementById('licong');
var delcong = document.getElementById('btnremovecong');

var cafedamanha = [];
var cafe = document.getElementById('btncafe');
var cafeHTML = document.getElementById('licafe');
var delcafe = document.getElementById('btnremovecafe');

var higieneebeleza = [];
var higi = document.getElementById('btnhigi');
var higiHTML = document.getElementById('lihigi');
var delhigi = document.getElementById('btnremovehigi');

var hortifrutis = [];
var hort = document.getElementById('btnhort');
var hortHTML = document.getElementById('lihort');
var delhort = document.getElementById('btnremovehort');

var acougue = [];
var acou = document.getElementById('btnacou');
var acouHTML = document.getElementById('liacou');
var delacou = document.getElementById('btnremoveacou');

var frioselaticinios = [];
var frios = document.getElementById('btnfrios')
var frioHTML = document.getElementById('lifrio');
var delfrio = document.getElementById('btnremovefrio');

var limpeza = [];
var limp = document.getElementById('btnlimp');
var limpHTML = document.getElementById('lilimp');
var dellimp = document.getElementById('btnremovelimp');

var bazar = [];
var baza = document.getElementById('btnbazar');
var bazarHTML = document.getElementById('libazar');
var delbazar = document.getElementById('btnremovebazar');

var festivos = [];
var fest= document.getElementById('btnfest');
var festHTML = document.getElementById('lifest');
var delfest = document.getElementById('btnremovefest');

var mercearia = [];
var merc = document.getElementById('btnmerc');
var mercHTML = document.getElementById('limerc');
var delmerc = document.getElementById('btnremovemerc');

var bebidas = [];
var bebi = document.getElementById('btnbebi');
var bebiHTML = document.getElementById('libebi');
var delbebi = document.getElementById('btnremovebebi');

var petshop = [];
var pet = document.getElementById('btnpet');
var petHTML = document.getElementById('lipet');
var delpet = document.getElementById('btnremovepet');

var mamaeebebe = [];
var mamae = document.getElementById('btnmamae');
var mamaeHTML = document.getElementById('limamae');
var delmamae = document.getElementById('btnremovemamae');

const erro = `Por favor, preencha o campo com o nome do item.`;

var prdt = document.getElementById('produto');

function comecar() {
    document.getElementById('comeco').style.display = 'none';
    document.getElementById('inicio').style.display = 'block';
    document.getElementById('remover').style.display = 'block';
    document.getElementById('removeritem').style.display = 'none';
}

function novoProduto() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('remover').style.display = 'none';
    document.getElementById('produtos').style.display = 'block';
    document.getElementById('categorias').style.display = 'block';
    document.getElementById('removeritem').style.display = 'none';
}

function perguntarNovamente() {
        document.getElementById('inicio').style.display = 'block';
        document.getElementById('remover').style.display = 'block';
        document.getElementById('produtos').style.display = 'none';
        document.getElementById('categorias').style.display = 'none';
        document.getElementById('removeritem').style.display = 'none';
}

function removerProduto() {
    document.getElementById('remover').style.display = 'none';
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('removeritem').style.display = 'block';
}

function addCong() {
    if (cong.onclick) {
        congelados.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    } 
        prdt.value = "";
        perguntarNovamente();
}

function addCafe() {
    if (cafe.onclick) {
        cafedamanha.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
     }   
        prdt.value = "";
        perguntarNovamente();
}

function addHigi() {
    if (higi.onclick) {
        higieneebeleza.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }    
        prdt.value = "";
        perguntarNovamente();
}     

function addHort() {
    if (hort.onclick) {
        hortifrutis.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }    
    }
        prdt.value = "";
        perguntarNovamente();
}

function addAcou() {
    if (acou.onclick)  {
        acougue.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }    
        prdt.value = "";
        perguntarNovamente();
}

function addFrios() {
    if (frios.onclick) {
        frioselaticinios.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }    
        prdt.value = "";
        perguntarNovamente();
}

function addLimp() {
    if (limp.onclick) {
        limpeza.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }    
        prdt.value = "";
        perguntarNovamente();
}

function addBazar() {
    if (baza.onclick) {
        bazar.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }
        prdt.value = "";
        perguntarNovamente();
}

function addFest() {
    if (fest.onclick) {
        festivos.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }
        prdt.value = "";
        perguntarNovamente();
}

function addMerc() {
    if (merc.onclick) {
        mercearia.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }
        prdt.value = "";
        perguntarNovamente();
}

function addBebi() {
    if (bebi.onclick) {
        bebidas.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }
        prdt.value = "";
        perguntarNovamente();
}

function addPet() {
    if (pet.onclick) {
        petshop.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }
        prdt.value = "";
        perguntarNovamente();
}
    
function addMamae() {
    if (mamae.onclick) {
        mamaeebebe.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }
        prdt.value = "";
        perguntarNovamente();
}

function delCong() {
    congelados.pop();
    perguntarNovamente();
}

function delCafe() {
    cafedamanha.pop();
    perguntarNovamente();
}

function delHigi() {
    higieneebeleza.pop();
    perguntarNovamente();
}

function delHort() {
    hortifrutis.pop();
    perguntarNovamente();
}

function delAcou() {
    acougue.pop();
    perguntarNovamente();
}

function delFrio() {
    frioselaticinios.pop();
    perguntarNovamente();
}

function delLimp() {
    limpeza.pop();
    perguntarNovamente();
}

function delBazar() {
    bazar.pop();
    perguntarNovamente();
}

function delFest() {
    festivos.pop();
    perguntarNovamente();
}

function delMerc() {
    mercearia.pop();
    perguntarNovamente();
}

function delBebi() {
    bebidas.pop();
    perguntarNovamente();
}

function delPet() {
    petshop.pop();
    perguntarNovamente();
}

function delMamae() {
    mamaeebebe.pop();
    perguntarNovamente();
}



 function encerrarLista() {
     document.getElementById('inicio').style.display = 'none';
     document.getElementById('lista').style.display = 'block';
     document.getElementById('remover').style.display = 'none';
    congHTML.innerHTML = congelados;
    cafeHTML.innerHTML = cafedamanha;
    higiHTML.innerHTML = higieneebeleza;
    hortHTML.innerHTML = hortifrutis;
    acouHTML.innerHTML = acougue;
    frioHTML.innerHTML = frioselaticinios;
    limpHTML.innerHTML = limpeza;
    bazarHTML.innerHTML = bazar;
    festHTML.innerHTML = festivos;
    mercHTML.innerHTML = mercearia;
    bebiHTML.innerHTML = bebidas;
    petHTML.innerHTML = petshop;
    mamaeHTML.innerHTML = mamaeebebe;

}
