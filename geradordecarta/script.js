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

// diplay: block -> height = 760px
// display: none -> height = 620px

let dmudastats = document.getElementById("mudastats")
let btn = document.getElementById("bmudastats")

btn.addEventListener('click', function() {
    if(dmudastats.style.display === 'none') {
        sec_customizacao.style.height = "760px"
        dmudastats.style.display = 'block'
        btn.innerHTML = "Esconder"
    } else {
        dmudastats.style.display = 'none'
        sec_customizacao.style.height = "620px"
        btn.innerHTML = "Mostrar"
    }
})

// STATS PERSONALIZADAS //

let input_nome = document.getElementById("inpnome")
let input_ger = document.getElementById("iger")
let input_rit = document.getElementById("irit")
let input_fin = document.getElementById("ifin")
let input_pas = document.getElementById("ipas")
let input_con = document.getElementById("icon")
let input_def = document.getElementById("idef")
let input_fis = document.getElementById("ifis")

function salvarAlteracoes() {
    // FOTOS //

    img_raridade.src = `img/cartas/${sel_raridade.value}.png`
    img_pais.src = `img/paises/${sel_pais.value}.png`
    img_clube.src = `img/clubes/${sel_clube.value}.png`
    img_jogador.src = `img/jogadores/${sel_jogador.value}.png`
    img_entrosamento.src = `img/entrosamento/${sel_entrosamento.value}.png`

    // GERAL, POSIÇÃO, NOME E STATS // 

    nome.innerHTML = `<strong>${input_nome.value.toUpperCase()}</strong>`

    let ar_input = [input_ger, input_rit, input_fin, input_pas, input_con, input_def, input_fis]

    let ar_stats = [geral, ritmo, finalizacao, passe, conducao, defesa, fisico]

    for (let c = 0; c <= ar_stats.length; c++) {
        if (ar_input[c] < 1 || ar_input[c] > 99) {
            ar_stats[c].innerHTML = ar_stats[c]
        } else {
            ar_stats[c].innerHTML = `<strong>${Number(ar_input[c].value)}</strong>`
        }
    }
    // geral.innerHTML = `<strong>${Number(input_ger.value)}</strong>`
    // ritmo.innerHTML = `<strong>${Number(input_rit.value)}</strong>`
    // finalizacao.innerHTML = `<strong>${Number(input_fin.value)}</strong>`
    // passe.innerHTML = `<strong>${Number(input_pas.value)}</strong>`
    // conducao.innerHTML = `<strong>${Number(input_con.value)}</strong>`
    // defesa.innerHTML = `<strong>${Number(input_def.value)}</strong>`
    // fisico.innerHTML = `<strong>${Number(input_fis.value)}</strong>`
}