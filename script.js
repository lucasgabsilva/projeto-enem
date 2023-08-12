function verificar(){
    var n1 = window.document.getElementById('inota1')
    var n2 = window.document.getElementById('inota2')
    var n3 = window.document.getElementById('inota3')
    var n4 = window.document.getElementById('inota4')
    var n5 = window.document.getElementById('inota5')
    var corte = window.document.getElementById('icorte')

    var media = (Number(n1.value) + Number(n2.value) + Number(n3.value) + Number(n4.value) + Number(n5.value))/5
    var ncorte = Number(corte.value)

    if (Number(n1.value) < 0 || Number(n1.value) > 1000){
        window.alert('[ERRO] A nota em linguagens não pode ser menor que 0 ou maior que 1000')
        res.innerHTML = 'Verifique os dados e tente novamente '
    } else if (Number(n2.value) < 0 || Number(n2.value) > 1000){
        window.alert('[ERRO] A nota em matemática não pode ser menor que 0 ou maior que 1000')
        res.innerHTML = 'Verifique os dados e tente novamente '
    } else if (Number(n3.value) < 0 || Number(n3.value) > 1000){
        window.alert('[ERRO] A nota em ciências da natureza não pode ser menor que 0 ou maior que 1000')
        res.innerHTML = 'Verifique os dados e tente novamente '
    } else if (Number(n4.value) < 0 || Number(n5.value) > 1000){
        window.alert('[ERRO] A nota em redação não pode ser menor que 0 ou maior que 1000')
        res.innerHTML = 'Verifique os dados e tente novamente '
    } else if (ncorte < 450 || ncorte > 1000){
        window.alert('A nota de corte não pode ser menor que 450 ou maior que 1000')
        res.innerHTML = 'Verifique os dados e tente novamente '
    } else {
        res.innerHTML = `Sua nota em linguagens foi de: <strong>${Number(n1.value)}</strong><br>`
        res.innerHTML += `Sua nota em matemática foi de: <strong>${Number(n2.value)}</strong><br>`
        res.innerHTML += `Sua nota em ciências da natureza foi de: <strong>${Number(n3.value)}</strong><br>`
        res.innerHTML += `Sua nota em ciências humanas foi de: <strong>${Number(n4.value)}</strong><br>`
        res.innerHTML += `Sua nota em redação foi de: <strong>${Number(n5.value)}</strong><br>`
        res.innerHTML += `Sua média geral no enem foi de: <strong>${media}</strong>`
            if (media < ncorte){
                var abaixo = ncorte - media
                res.innerHTML += `<br><br>Como a nota de corte do curso que deseja ingressar é de <strong>${ncorte}</strong> e a sua média foi de <strong>${media}</strong>, informamos que, infelizmente, você foi reprovado por estar <strong>${abaixo}</strong> pontos abaixo da nota necessária.`
            } else {
                var acima = media - ncorte
                res.innerHTML += `<br><br>Como a nota de corte do curso que deseja ingressar é de <strong>${ncorte}</strong> e a sua média foi de <strong>${media}</strong>, informamos que você foi <strong>APROVADO</strong> ficando <strong>${acima}</strong> pontos acima da nota necessária.`
            }
    }           
}




