let cep = document.getElementById('cep');
let logradouro = document.querySelector('#logradouro');
let complemento = document.querySelector('#complemento');
let bairro = document.querySelector('#bairro');
let localidade = document.querySelector('#localidade');
let uf = document.querySelector('#uf');
let btn = document.querySelector('#btn');
let reset = document.querySelector('#reset');
let inviseble = document.querySelector('.invisible')
let loader = document.querySelector('.loader')

btn.addEventListener('click',()=>{
    let url = `http://viacep.com.br/ws/${cep.value}/json/`;
   
fetch(url).then(resposta=>{
    return resposta.json();
}).then(data=>{
    logradouro.value = data.logradouro;
    bairro.value = data.bairro;
    localidade.value = data.localidade;
    uf.value = data.uf;
}).catch(err=>{
    alert("Local não encontrado")
    logradouro.value = ""
    bairro.value = ""
    localidade.value = ""
    uf.value = "";
    
  
});

if(cep.value){
    
    loader.style.display="flex"
}

function tempo(){
    inviseble.style.display="block"

   loader.style.display="none"
  
   

}
setTimeout( tempo, 2000);
});


cep.addEventListener('keypress',(e)=>{
    if(e.keyCode ==13){
        btn.click()
    }
})

reset.addEventListener('click',()=>{
    if(reset){
        inviseble.style.display="none"
    }
})
