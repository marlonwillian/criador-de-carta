// img // 

let img_raridade = document.getElementById("iraridade")
let img_pais = document.getElementById("ipais")
let img_clube = document.getElementById("iclube")
let img_jogador = document.getElementById("ijogador")
let img_fundoj = document.getElementById("ifundoj")
let img_fundoc = document.getElementById("ifundoc")
let img_entrosamento = document.getElementById("ientrosamento")

// geral, posição e nome //

let geral = document.getElementById("geral")
let posicao = document.getElementById("posicao")
let nome = document.getElementById("nome")

// stats - lado esquerdo //

let ritmo = document.getElementById("srit")
let finalizacao = document.getElementById("sfin")
let passe = document.getElementById("spas")

let t_ritmo = document.getElementById("rit")
let t_finalizacao = document.getElementById("fin")
let t_passe = document.getElementById("pas")

// stats - lado direito //

let conducao = document.getElementById("scon")
let defesa = document.getElementById("sdef")
let fisico = document.getElementById("sfis")

let t_conducao = document.getElementById("con")
let t_defesa = document.getElementById("def")
let t_fisico = document.getElementById("fis")

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

// section //

let titulo_r = document.getElementById("titulo_raridade")
let sec_customizacao = document.getElementById("customizacao")

// diplay: block -> height = 760px
// display: none -> height = 620px

let dmudastats = document.getElementById("mudastats")
let btn = document.getElementById("bmudastats")
let salvar = document.getElementById("salvar")

btn.addEventListener('click', function() {
    if(dmudastats.style.display === 'none') {
        sec_customizacao.style.height = "785px"
        dmudastats.style.display = 'block'
        btn.innerHTML = "Esconder"
        salvar.style.top = '283px'
    } else {
        dmudastats.style.display = 'none'
        sec_customizacao.style.height = "620px"
        btn.innerHTML = "Mostrar"
        salvar.style.top = '320px'
        // top: 283px;
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
    img_fundoc.src = `img/clubes/${sel_clube.value}.png`
    img_jogador.src = `img/jogadores/${sel_jogador.value}.png`
    img_fundoj.src = `img/jogadores/${sel_jogador.value}.png`
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
        nome.style.textShadow = '0.0em 0.2em 0.2em white'

    } if (sel_raridade.value[0] === 'e' && sel_jogador.value[0] !== 'e') {

        // carta especial e jogador normal

        img_jogador.style.left = '30px'
        img_jogador.style.height = '150px'
        img_jogador.style.width = '150px'
        img_jogador.style.bottom = '320px'

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

    let ar_stats1 = [ritmo, finalizacao, passe, conducao, defesa, fisico]

    let t_stats = [t_ritmo, t_finalizacao, t_passe, t_conducao, t_defesa, t_fisico]

    if (sel_raridade.value == 'ouro_raro') {
        titulo_r.innerHTML = 'carta ouro raro'
        des_raridade.innerHTML = 'Ouro Raro é uma das cartas normais dos jogadores, o geral dessas cartas vão de 83 a 94.'

        geral.style.textShadow = 'none'
        geral.style.color = 'black'
        posicao.style.textShadow = 'none'
        posicao.style.color = 'black'
        nome.style.textShadow = 'none'
        nome.style.color = 'black'
        img_jogador.style.filter = 'grayscale(0%)'
        img_entrosamento.style.filter = 'invert(0%)'
        for (let c = 0; c < ar_stats1.length; c++) {
            ar_stats1[c].style.color = 'black'
            t_stats[c].style.color = 'black'
        }
    } else if (sel_raridade.value == 'prata_raro') {
        titulo_r.innerHTML = 'carta prata raro'
        des_raridade.innerHTML = 'Prata Raro é uma das cartas normais dos jogadores, o geral dessas cartas vão de 65 a 74.'

        geral.style.textShadow = 'none'
        geral.style.color = 'black'
        posicao.style.textShadow = 'none'
        posicao.style.color = 'black'
        nome.style.textShadow = 'none'
        nome.style.color = 'black'
        img_jogador.style.filter = 'grayscale(0%)'
        img_entrosamento.style.filter = 'invert(0%)'
        for (let c = 0; c <= ar_stats1.length; c++) {
            ar_stats1[c].style.color = 'black'
            t_stats[c].style.color = 'black'
        }
    } else if (sel_raridade.value === 'ouro_comum') {
        titulo_r.innerHTML = 'carta ouro comum'
        des_raridade.innerHTML = 'Ouro Comum é uma das cartas normais dos jogadores, o geral dessas cartas vão de 75 a 83.'

        geral.style.textShadow = 'none'
        geral.style.color = 'black'
        posicao.style.textShadow = 'none'
        posicao.style.color = 'black'
        nome.style.textShadow = 'none'
        nome.style.color = 'black'
        img_jogador.style.filter = 'grayscale(0%)'
        img_entrosamento.style.filter = 'invert(0%)'
        for (let c = 0; c < ar_stats1.length; c++) {
            ar_stats1[c].style.color = 'black'
            t_stats[c].style.color = 'black'
        }
    } else if (sel_raridade.value === 'prata_comum') {
        titulo_r.innerHTML = 'carta prata comum'
        des_raridade.innerHTML = 'Prata Comum é uma das cartas normais dos jogadores, o geral dessas cartas vão de 65 a 74.'

        geral.style.textShadow = 'none'
        geral.style.color = 'black'
        posicao.style.textShadow = 'none'
        posicao.style.color = 'black'
        nome.style.textShadow = 'none'
        nome.style.color = 'black'
        img_jogador.style.filter = 'grayscale(0%)'
        img_entrosamento.style.filter = 'invert(0%)'

        for (let c = 0; c < ar_stats1.length; c++) {
            ar_stats1[c].style.color = 'black'
            t_stats[c].style.color = 'black'
        }
    } else if (sel_raridade.value === 'e_icon') {
        titulo_r.innerHTML = 'carta icon'
        des_raridade.innerHTML = 'Icon é uma das cartas especiais dos jogadores, o geral dessas cartas vão de 85 a 99, e os jogadores que tem uma carta dessas já se aposentaram e são lendas do futebol.'

        geral.style.textShadow = 'none'
        geral.style.color = 'black'
        posicao.style.textShadow = 'none'
        posicao.style.color = 'black'
        nome.style.textShadow = 'none'
        nome.style.color = 'black'
        img_entrosamento.style.filter = 'invert(0%)'
        img_jogador.style.filter = 'grayscale(0%)'
        for (let c = 0; c < ar_stats1.length; c++) {
            ar_stats1[c].style.color = 'black'
            t_stats[c].style.color = 'black'
        }
    } else if (sel_raridade.value === 'e_toty') {
        titulo_r.innerHTML = 'carta toty'
        des_raridade.innerHTML = 'TOTY é uma das cartas especiais dos jogadores, o geral dessas cartas vão de 93 a 99, e são dadas aos melhores jogadores da temporada.'
        nome.style.textShadow = 'none'

        geral.style.textShadow = 'none'
        geral.style.color = 'rgb(249, 233, 159)'
        posicao.style.textShadow = 'none'
        posicao.style.color = 'rgb(249, 233, 159)'
        nome.style.textShadow = 'none'
        nome.style.color = 'rgb(249, 233, 159)'
        img_entrosamento.style.filter = 'invert(100%)'
        img_jogador.style.filter = 'grayscale(0%)'
        for (let c = 0; c < ar_stats1.length; c++) {
            ar_stats1[c].style.color = 'rgb(249, 233, 159)'
            t_stats[c].style.color = 'rgb(249, 233, 159)'
        }
    } else if (sel_raridade.value === 'e_totw') {
        titulo_r.innerHTML = 'carta totw'
        des_raridade.innerHTML = 'TOTW é uma das cartas especiais dos jogadores, o geral dessas cartas vão dos gerais normais dos jogadores a 99, e são dadas aos melhores jogadores de cada semana.'

        geral.style.textShadow = 'none'
        geral.style.color = 'rgb(249, 233, 159)'
        posicao.style.textShadow = 'none'
        posicao.style.color = 'rgb(249, 233, 159)'
        nome.style.textShadow = 'none'
        nome.style.color = 'rgb(249, 233, 159)'
        img_entrosamento.style.filter = 'invert(100%)'
        img_jogador.style.filter = 'grayscale(0%)'
        for (let c = 0; c < ar_stats1.length; c++) {
            ar_stats1[c].style.color = 'rgb(249, 233, 159)'
            t_stats[c].style.color = 'rgb(249, 233, 159)'
        }
    } else if (sel_raridade.value === 'e_otw') {
        titulo_r.innerHTML = 'carta otw'
        des_raridade.innerHTML = 'OTW é uma das cartas especiais dos jogadores, o geral dessas cartas iniciam no geral padrão, e vão aumentando conforme o número de cartas TOTW dos jogadores, e são dadas aos atletas que mudaram de time na janela de transferências.'

        geral.style.textShadow = 'none'
        geral.style.color = 'rgb(194, 221, 70)'
        posicao.style.textShadow = 'none'
        posicao.style.color = 'rgb(194, 221, 70)'
        nome.style.textShadow = 'none'
        nome.style.color = 'rgb(194, 221, 70)'
        img_entrosamento.style.filter = 'invert(100%)'
        img_jogador.style.filter = 'grayscale(0%)'
        for (let c = 0; c < ar_stats1.length; c++) {
            ar_stats1[c].style.color = 'rgb(249, 233, 159)'
            t_stats[c].style.color = 'rgb(249, 233, 159)'
        }
    }

    let ar_stats2 = [geral, ritmo, finalizacao, passe, conducao, defesa, fisico]
    let ar_input = [input_ger, input_rit, input_fin, input_pas, input_con, input_def, input_fis]

    for (let c = 0; c <= ar_stats2.length; c++) {
        if (Number(ar_input[c].value) > 0 && Number(ar_input[c].value) <= 99) {
            ar_stats2[c].innerHTML = `<strong>${Number(ar_input[c].value)}</strong>`
        } else {
            if (Number(ar_input[c].value) > 99) {
                alert("Apenas estatísticas menores que 100 são válidas.")
                break
            }
        }
    }
}

let iconbtn = document.getElementById("efeitoicon")

function efeitoIcon() {
    if (img_jogador.style.filter !== 'grayscale(0%)') {
        img_jogador.style.filter = 'grayScale(0%)'
        iconbtn.value = 'Remover Efeito Icon'
    } else if (img_jogador.style.filter !== 'grayscale(90%)') {
        img_jogador.style.filter = 'grayScale(90%)'
        iconbtn.value = 'Efeito Icon'
    } 
}