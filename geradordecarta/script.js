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
        sec_customizacao.style.height = "785px"
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

function aplicarAlteracoes() {
    // FOTOS //

    img_raridade.src = `img/cartas/${sel_raridade.value}.png`
    img_pais.src = `img/paises/${sel_pais.value}.png`
    img_clube.src = `img/clubes/${sel_clube.value}.png`
    img_jogador.src = `img/jogadores/${sel_jogador.value}.png`
    img_entrosamento.src = `img/entrosamento/${sel_entrosamento.value}.png`

    // GERAL, POSIÇÃO, NOME E STATS //

    posicao.innerHTML = `<strong>${sel_posicao.value}</strong>`

    if (input_nome.value != ''){
        nome.innerHTML = `<strong>${input_nome.value.toUpperCase()}</strong>`
    }

    if (sel_raridade.value[0] !== 'e' && sel_jogador.value[0] !== 'e') {

        // carta normal e jogador normal

        geral.style.fontSize = '55px'
        geral.style.bottom = '335px'
        posicao.style.bottom = '285px'
        img_pais.style.bottom = '247px'
        img_clube.style.bottom = '210px'

        img_jogador.style.left = '30px'
        img_jogador.style.width = '150px'
        img_jogador.style.height = '150px'
        img_jogador.style.bottom = '319px'
        img_jogador.style.filter = 'grayscale(0%)'
        nome.style.textShadow = 'none'

    } else {
        if (sel_raridade.value[0] === 'e' && sel_jogador.value[0] === 'e') {

        // carta especial e jogador especial

        geral.style.fontSize = '45px'
        geral.style.bottom = '320px'
        posicao.style.bottom = '275px'
        img_pais.style.bottom = '237px'
        img_clube.style.bottom = '207px'

        img_jogador.style.left = '10px'
        img_jogador.style.width = '190px'
        img_jogador.style.height = '190px'
        img_jogador.style.bottom = '310px'
        img_jogador.style.filter = 'grayscale(90%)'
        nome.style.textShadow = '0.0em 0.2em 0.2em white'

    } if (sel_raridade.value[0] === 'e' && sel_jogador.value[0] !== 'e') {

        // carta especial e jogador normal

        img_jogador.style.left = '30px'
        img_jogador.style.height = '150px'
        img_jogador.style.width = '150px'
        img_jogador.style.bottom = '320px'
        img_jogador.style.filter = 'grayscale(90%)'

        geral.style.fontSize = '45px'
        geral.style.bottom = '320px'
        posicao.style.bottom = '275px'
        img_pais.style.bottom = '237px'
        img_clube.style.bottom = '207px'
        nome.style.textShadow = '0.0em 0.2em 0.2em white'

    } if (sel_raridade.value[0] !== 'e' && sel_jogador.value[0] === 'e') {

            // carta normal e jogador especial

            geral.style.fontSize = '55px'
            geral.style.bottom = '335px'
            posicao.style.bottom = '285px'
            img_pais.style.bottom = '247px'
            img_clube.style.bottom = '210px'

            img_jogador.style.left = '10px'
            img_jogador.style.width = '190px'
            img_jogador.style.height = '195px'
            img_jogador.style.bottom = '325px'
            img_jogador.style.filter = 'grayscale(0%)'
            nome.style.textShadow = 'none'
        }
    }

    // filter: grayscale(50%);


    let ar_input = [input_ger, input_rit, input_fin, input_pas, input_con, input_def, input_fis]

    let ar_stats = [geral, ritmo, finalizacao, passe, conducao, defesa, fisico]

    for (let c = 0; c <= ar_stats.length; c++) {
        if (Number(ar_input[c].value) > 0 && Number(ar_input[c].value) <= 99) {
            ar_stats[c].innerHTML = `<strong>${Number(ar_input[c].value)}</strong>`
        } else {
            if (Number(ar_input[c].value) > 99) {
                alert("Apenas estatísticas menores que 100 são válidas.")
                break
            }
        }
    }
}

// function estiloEntrosamento() {
    
// }

iconbtn = document.getElementById("efeitoicon")

function efeitoIcon() {
    img_jogador.style.filter = 'grayScale(0%)'
    if (img_jogador.style.filter == 'grayscale(90%)') {
        img_jogador.style.filter = 'grayScale(0%)'
        iconbtn.innerHTML = 'Efeito Icon'
    } else if (img_jogador.style.filter == 'grayscale(0%)') {
        img_jogador.style.filter = 'grayScale(90%)'
        iconbtn.innerHTML = 'Remover Efeito Icon'
    }
}