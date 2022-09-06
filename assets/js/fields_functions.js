const cargaBaseDatos = (datos)=> {
    fetch(datos)
    .then((response)=> response.json())
    .then((data)=> { 
        contenidoJSON = data
        contenidoJSON.forEach(contenido => {
            let article = document.createElement('article')
            article.className = 'field'
            article.innerHTML = `
                                    <img src="${contenido.descripción.img}" alt="#" id="fieldImage">
                                    <div class="field_description">
                                        <h3 class="field_name" id="fieldTitle">${contenido.nombre}</h3>
                                        <p class="field_location" id="fieldLocationStreet">${contenido.direccion.calle}</p>
                                        <p class="field_location" id="fieldLocationCity">${contenido.direccion.partido}</p>
                                    </div>
                                `
        
            fieldsContainer.appendChild(article)
        })    
    })
}