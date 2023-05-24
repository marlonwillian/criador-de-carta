// img // 

let img_raridade = document.getElementById("iraridade")
let img_pais = document.getElementById("ipais")
let img_clube = document.getElementById("iclube")
let img_jogador = document.getElementById("ijogador")
let img_entrosamento = document.getElementById("ientrosamento")

// geral, posição e nome //

let geral = document.getElementById("geral")
let posicao = document.getElementById("posicao")
let nome = document.getElementById("nome")

// stats - lado esquerdo //

let ritmo = document.getElementById("srit")
let finalizacao = document.getElementById("sfin")
let passe = document.getElementById("spas")

// stats - lado direito //

let conducao = document.getElementById("scon")
let defesa = document.getElementById("sdef")
let fisico = document.getElementById("sfis")

// informações personalizadas //

let input_nome = document.getElementById("inpnome")

// informações personalizadas - info 1 //

let sel_clube = document.getElementById("selclube")
let sel_pais = document.getElementById("selpais")
let sel_posicao = document.getElementById("selposicao")

// informações personalizadas - info 2 //

let sel_raridade = document.getElementById("selraridade")
let sel_jogador = document.getElementById("seljogador")
let sel_entrosamento = document.getElementById("selentrosamento")

// descrições //

let des_raridade = document.getElementById("desraridade")
let des_entrosamento = document.getElementById("desentrosamento")

// section //

let sec_customizacao = document.getElementById("customizacao")

// diplay: block -> height = 740px
// display: none -> height = 620px

let dmudastats = document.getElementById("mudastats")
let btn = document.getElementById("bmudastats")
let btnsalvar = document.getElementById("salvar")

btn.addEventListener('click', function() {
    if(dmudastats.style.display === 'none') {
        sec_customizacao.style.height = "740px"
        dmudastats.style.display = 'block'
        btn.innerHTML = "Esconder"
    } else {
        dmudastats.style.display = 'none'
        sec_customizacao.style.height = "620px"
        btn.innerHTML = "Mostrar"
    }
})

function salvarAlteracoes() {
    // FOTOS //

    img_raridade.src = `img/cartas/${sel_raridade.value}.png`
    img_pais.src = `img/paises/${sel_pais.value}.png`
    img_clube.src = `img/clubes/${sel_clube.value}.png`
    img_jogador.src = `img/jogadores/${sel_jogador.value}.png`
    img_entrosamento.src = `img/entrosamento/${sel_entrosamento.value}.png`

    // GERAL, POSIÇÃO, NOME E STATS // 

    geral.innerHTML = ``
}