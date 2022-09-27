//export es para utilizar la función por fuera o desde otros archivos
export function Henry(){

    let nombre="Henry Gomez"
    //interpolar=controlar la interfaz gráfica desde JS
    return(
        //Fragment es un agrupar universal de react
        //a las etiquetas que no tienen cierre como hr o img hay que ponerselo necesariamente en react
        <>
            <h1>Hola react soy {nombre} </h1>

            <hr/>
            
        </>
        
    )
}