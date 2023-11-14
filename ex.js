//peso / altura **
function calculateImc(peso,altura){
    return new Promise((resolved,rejected)=>{
        if(typeof(peso) !== "number" || typeof(altura) !== "number" ){
            rejected("Dado não são numeros")
        }else{
            let imc = peso / (altura * altura)
            resolved(Math.round(imc))
        }

    })
}

function showImc(peso, altura){
    const imc = calculateImc(peso,altura)
    imc.then((imccalculated)=>{
           if(imccalculated >= 40){
            console.log(`Imc : ${imccalculated}, Obesidade Grave!`)
           } else if(imccalculated >= 30){
            console.log(`Imc: ${imccalculated}, Obesidade!`)
           }else if(imccalculated >= 25){
            console.log(`Imc: ${imccalculated}, Sobrepeso!`)
           }else if(imccalculated >= 18.5){
            console.log(`Imc ${imccalculated}, Normal!`)
           }else{
            console.log(`Imc: ${imccalculated}, Magreza!`)
           }
            }).catch((err)=>{
                console.log(`Erro ao calculcar, motivo : ${err}`)
            }).finally(()=>{
                console.log("Sistema encerrado")
            })

}
showImc(70,1.60)

