import { avatar } from "../avatar.js";
import { pokemons } from "../pokemones.js";

export const SelectionComponent = {

    render() {
        
        let htmlSelectionView = ``;
        let htmlAvatarView = `<div id="avatares">`;
        
        avatar.forEach((avatar)=>{   
            htmlAvatarView += `
                <div class="card card-reduce" style="width: 16rem;">
                    <img src=${avatar.imagen} class="card-img-top avatarImage" alt="${avatar.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${avatar.nombre}</h5>
                        <button class="btn btn-success btnSelect selectAvatar" data-id="${avatar.id}">Seleccionar</button>                        
                    </div>
                </div>
            `
        });
        htmlAvatarView += `</div>`;

        let htmlPokemonView = `<div id="pokemones">`        
        pokemons.forEach((pokemon)=>{
            htmlPokemonView += `
                <div class="card card-reduce" style="width: 16rem;">
                    <img src=${pokemon.imagen.presentacion} class="card-img-top avatarImage" alt="${pokemon.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${pokemon.nombre}</h5>
                        <button class="btn btn-success btnSelect selectPokemon" data-id="${pokemon.id}">Seleccionar</button>                        
                    </div>
                </div>
            `
        });
        htmlPokemonView += `</div>`;

        htmlSelectionView += htmlAvatarView;
        htmlSelectionView += htmlPokemonView;


        return htmlSelectionView
    }    
};




