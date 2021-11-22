export const MyPokemonComponent = {
    render() {

        let infoPokemonStorage = JSON.parse(localStorage.getItem('pokemonSelected'));

        let { habilidades } = infoPokemonStorage;
        $('.only').hide();
        
        let htmlMipokeView = `<div class="MiPokeContainer">`
        let htmlPokemon = `
        <div class="vistaPokemon">
        <div class="card" style="width: 18rem;">
            <img src=${infoPokemonStorage.imagen.presentacion} class="card-img-top img-pokemon" alt=${infoPokemonStorage.nombre}>
            <div class="card-body">
                <h5 class="card-title card-title-pokemon">${infoPokemonStorage.nombre}</h5>
            </div>
        </div>
        </div>
        <div class="caracteristicas">
            <div class="vistaHabilidades">
                <div class="lista">
                    <div class="lista-item">
                        <h5 class="item-titulo">Nombre</h5>
                        <p class="item-valor">${habilidades[0].nombre}</p>
                    </div>
                    <div class="lista-item">
                        <h5 class="item-titulo">Tipo</h5>
                        <p class="item-valor">${habilidades[0].tipo}</p>
                    </div>
                    <div class="lista-item">
                        <h5 class="item-titulo">Poder</h5>
                        <p class="item-valor">${habilidades[0].poder}</p>
                    </div>
                </div>
                <div class="lista">
                    <div class="lista-item">
                        <h5 class="item-titulo">Nombre</h5>
                        <p class="item-valor">${habilidades[1].nombre}</p>
                    </div>
                    <div class="lista-item">
                        <h5 class="item-titulo">Tipo</h5>
                        <p class="item-valor">${habilidades[1].tipo}</p>
                    </div>
                    <div class="lista-item">
                        <h5 class="item-titulo">Poder</h5>
                        <p class="item-valor">${habilidades[1].poder}</p>
                    </div>
                </div>
                <div class="lista">
                    <div class="lista-item">
                        <h5 class="item-titulo">Nombre</h5>
                        <p class="item-valor">${habilidades[2].nombre}</p>
                    </div>
                    <div class="lista-item">
                        <h5 class="item-titulo">Tipo</h5>
                        <p class="item-valor">${habilidades[2].tipo}</p>
                    </div>
                    <div class="lista-item">
                        <h5 class="item-titulo">Poder</h5>
                        <p class="item-valor">${habilidades[2].poder}</p>
                    </div>
                </div>
                <div class="lista">
                    <div class="lista-item">
                        <h5 class="item-titulo">Nombre</h5>
                        <p class="item-valor">${habilidades[3].nombre}</p>
                    </div>
                    <div class="lista-item">
                        <h5 class="item-titulo">Tipo</h5>
                        <p class="item-valor">${habilidades[3].tipo}</p>
                    </div>
                    <div class="lista-item">
                        <h5 class="item-titulo">Poder</h5>
                        <p class="item-valor">${habilidades[3].poder}</p>
                    </div>
                </div>
            </div>
            <div class="vistaEstado">
                <div class="lista">
                    <div class="lista-item">
                        <h5 class="item-titulo">Alimentación</h5>
                        <p class="item-valor">${infoPokemonStorage.alimentacion}</p>
                        <button class="btn btn-secondary alimentacion"></button> 
                    </div>
                </div>
                <div class="lista">
                    <div class="lista-item">
                        <h5 class="item-titulo">Bienestar</h5>
                        <p class="item-valor">${infoPokemonStorage.bienestar}</p>
                        <button class="btn btn-secondary bienestar"></button> 
                    </div>
                </div>
                <div class="lista">
                    <div class="lista-item">
                        <h5 class="item-titulo">Descanso</h5>
                        <p class="item-valor">${infoPokemonStorage.descanso}</p>
                        <button class="btn btn-secondary descanso"></button> 
                    </div>
                </div>
                <div class="lista">
                    <div class="lista-item">
                        <h5 class="item-titulo">Vida</h5>
                        <p class="item-valor">${infoPokemonStorage.vida}</p>
                        <button class="btn btn-outline-dark"></button>
                    </div>
                </div>
                <div class="lista">
                    <div class="lista-item">
                        <h5 class="item-titulo">Nivel</h5>
                        <p class="item-valor">${infoPokemonStorage.nivel}</p>
                        <button class="btn btn-outline-dark"></button>
                    </div>
                </div>
            </div>
        </div>
        `;


        htmlMipokeView += htmlPokemon;
        htmlMipokeView += `</div>`

        return htmlMipokeView
    }    
};