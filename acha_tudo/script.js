async function buscaCEP() {
let cep = txt_cep.value
const url = "https://viacep.com.br/ws/"+cep+"/json/"

let resposta = await fetch(url)
let dados_json = await resposta.json()

span_localidade.innerText = dados_json['localidade']
span_uf.innerText = dados_json['uf']
span_bairro.innerText = dados_json['bairro']
span_logradouro.innerText = dados_json['logradouro']
span_ddd.innerText = dados_json['ddd']

}