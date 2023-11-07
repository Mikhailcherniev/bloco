const novaNota = document.getElementById("nova-nota")
const adicionarNota = document.getElementById("adicionar-nota")
const limparNotas = document.getElementById("notas-salvas")

//verifica se ha alguma nota no armazenamento local
if(localStorage.getItem('notas')) {
//recupera o valor do item "notas" do localStorage
const notas = JSON.parse(localStorage.getItem("notas"))

//porcorre cada nota usando um loop e usa a função criarNota()
notas.forEach(function (nota, index){
    criarNota(nota, index)
})
}

adicionarNota.addEventListener("click", function(){
    //pega o texto que estava na textarea e salva no textoNota removendo espaços no começo e no final
    const textoNota = novaNota.value.trim()
    if(textoNota !== ''){
        criaNota(textoNota)
        salvarNota()
        novaNota.value = ''
    }


})
// apaga todas as notas quando clicar no botão
limparNotas.addEventListener("click", function(){
    notasSalvas.innerHTML = ''
    localStorage.removeItem('notas')
})

//função para criar uma nova nota 
function criarNota(texto, index) {
    const div = document.createElement("div")
    const p = document.createElement("p")
    const botaoEditar = document.createElement("button")
    const botaoExcluir = document.createElement("button")
    const inputCor = document.createElement("input")
    inputCor.type = "color"

    p.textCotent = texto
    botaoEditar.textCOntent = "Editar"
    botaoExcluir.textContent = "Excluir"

    div.appendChild(p)
    div.appendChild(botaoEditar)
    div.appendChild(botaoExcluir)
    div.appendChild(inputColor)

    div.className = "nota"

    //verifica se o indice é idefinido
    if(index !== undefined){
        const notas = JSON.parse
        (localStorage.getiItem("notas"))
        inputCor.value = notas[index].cor;
        div.style.backgoundColor = notas [index].cor
    }
    notasSalvas.appendChild(div)

    //função para editar a nota
    botaoEditar.addEventListener("click",function(){
        editarNotar(p, div, inputCor)
    })

    //função para excluir a nota
    botaoExcluir.addEventListener("click", function(){
        if(confirm("Tem certeza que deseja excluir esta nota?")){
            div.remove()
            salvarNota()
        }
    })
}

function editarNota(p, div, inputColor){
    const textAreaEdicao = document.createElement("textarea")
    textAreaEdicao.value = p.textContent.div.replaceChild(textareaEdicao, p)

    const botaoSalvar = document.createElement("button")
    botaoSalvar.textContent = "Salvar"
    div.appendChild(botaoSalvar)

    botaoSalvar.addEventListener("click", function(){
        p.textContent = textareaEdicao.value
        div.replaceChild(p, textareaEdicao)
        div.removeChild(botaoSalvar)
        div.style.backgroundColor = inputCor.value
        salvarNota()
    })
}

//função para salvar as notas no armazenamento local
function salvaNota(){
    const notas = []
    const divsNotas = notasSalvas.querySelectorAll(".nota")

    divsNotas.forEach(function(div){
        const p = div.querySelector('p')
        const inputCor = div.querySelector('input')
        notas.push({
            texto: p.textContent,
            cor: input
        })
    })
}
