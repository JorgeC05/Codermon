// import { request } from "./ajax.js";
import { avatar } from "./avatar.js";
import { pokemons } from "./pokemones.js";
import { HomeComponent } from "../js/components/HomeComponent.js";


/**
 * FUNCIONES
 */

export function saveInfoInStorage(e){

    let validatorAvatar = e.target.classList.contains('selectAvatar');
    let validatorPokemon = e.target.classList.contains('selectPokemon');


    if(validatorAvatar){    
        let getId = e.target.dataset.id;
        let avatarFound = avatar.find(({id})=> id == getId);
        localStorage.setItem('avatarSelected', JSON.stringify( avatarFound ) );
        renderAvatarStorage();
    }else{
        // console.log('Seleccionó Pokemon');
        if(validatorPokemon){
            let getId = e.target.dataset.id;
            let pokemonFound = pokemons.find(({id})=> id == getId);
            localStorage.setItem('pokemonSelected', JSON.stringify( pokemonFound ) );       
            renderPokemonStorage();
            $('.MiPokemon').show()
        }
    }
};

export function alimentacionUp(e){

    let validatorclick = e.target.classList.contains('alimentacion');

    if(validatorclick){
        let pokemon = JSON.parse(localStorage.getItem('pokemonSelected'));
        pokemon.alimentacion ++;
        localStorage.setItem('pokemonSelected', JSON.stringify( pokemon ) );
        let alert = `
        <div class="alert alert-dismissible alert-light alert-custom">
            <strong>Genial!</strong> Tu pokemón se ha Alimentado , vuelve ahora y te darás cuenta.
        </div>
        `;
        $('main').append(alert);
        $('.alert-custom').fadeOut(5000)
    }
}

export function bienestarUp(e){

    let validatorclick = e.target.classList.contains('bienestar');

    if(validatorclick){
        let pokemon = JSON.parse(localStorage.getItem('pokemonSelected'));
        pokemon.bienestar ++;
        localStorage.setItem('pokemonSelected', JSON.stringify( pokemon ) );
        let alert = `
        <div class="alert alert-dismissible alert-light alert-custom">
            <strong>Genial!</strong> Tu pokemón aumentó su Bienestar , vuelve ahora y te darás cuenta.
        </div>
        `;
        $('main').append(alert);
        $('.alert-custom').fadeOut(5000)
    }
}

export function descansoUp(e){

    let validatorclick = e.target.classList.contains('descanso');

    if(validatorclick){
        let pokemon = JSON.parse(localStorage.getItem('pokemonSelected'));
        pokemon.descanso ++;
        localStorage.setItem('pokemonSelected', JSON.stringify( pokemon ) );
        let alert = `
        <div class="alert alert-dismissible alert-light alert-custom">
            <strong>Genial!</strong> Tu pokemón descansó exitosamente , vuelve ahora y te darás cuenta.
        </div>
        `;
        $('main').append(alert);
        $('.alert-custom').fadeOut(5000)
    }
}

export function addPokemon(e){

    let validatorclick = e.target.classList.contains('selectAjax');

    if(validatorclick){
        let alert = `
        <div class="alert alert-dismissible alert-light alert-custom">
            <strong>Agregaste un pokemón!</strong> Ve a a lista de deseos para verificar que se encuentre allí.
        </div>
        `;
        $('main').append(alert);
        $('.alert-custom').fadeOut(5000)
    }
    $('.Deseos').show()
}



export function AddwishListPokemon(e){


    let validatorclick = e.target.classList.contains('selectAjax');

    if(validatorclick){
        let idAjax = e.target.dataset.id;
        $.get({
            url: `https://pokeapi.co/api/v2/pokemon/${idAjax}`,
            success: function (data) {
                let { sprites, name, id ,base_experience }  = data;
                let poke = {
                    name,
                    id,
                    imagen: sprites.front_default,
                    base_experience
                }; 
                incluirArray(poke) ;
            }
        });
    }
}

export let lista = []
function incluirArray(pokemon) {
    lista.push(pokemon);
    localStorage.setItem('wishList', JSON.stringify(lista));
}





// Render el avatar seleccionado y que se encuentra en el Storage
export function renderAvatarStorage(){
    let avatar = JSON.parse(localStorage.getItem('avatarSelected'));
    $('.imageAvatar').attr("src", avatar.imagen);
    $('.card-title-avatar').text(`${avatar.nombre}`)
};

// Render el pokemon seleccionado y que se encuentra en el Storage
export function renderPokemonStorage(){
    let pokemon = JSON.parse(localStorage.getItem('pokemonSelected'));
    $('.imagePokemon').attr("src", pokemon.imagen.presentacion);
    $('.card-title-pokemon').text(`${pokemon.nombre}`)
};

export function renderHome(){
    const htmlHome = HomeComponent.render();
    $('#main').html( htmlHome );
}





