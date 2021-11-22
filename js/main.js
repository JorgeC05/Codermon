import { router } from '../js/routes/routes.js';
// import { pokemons } from '../js/pokemones.js';
// import { avatar } from '../js/avatar.js'





// Impotaciones
import { 
    // existAvatar, 
    // existPoke, 
    saveInfoInStorage, 
    // savePokemonInStorage, 
    // renderAvatares, 
    // renderPokemones, 
    renderAvatarStorage, 
    renderPokemonStorage, 
    // associateParams,
    // cleanAndShow,
    // cleanStorage,
    // showModal,
    renderHome,
    alimentacionUp,
    bienestarUp,
    descansoUp,
    AddwishListPokemon,
    addPokemon
    // lista
} from "./funciones.js";


//Listeners


window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('hashchange', router);


    let existAvatar = localStorage.getItem('avatarSelected');
    let existPoke = localStorage.getItem('pokemonSelected');
    let existList = localStorage.getItem('wishList');

        
    if(existAvatar && existPoke){
        try{
            $('.only').hide();
            $('.MiPokemon').show()         
        } catch(err){
            console.log(err)
        }
    } 
    
    
    if(existAvatar || existPoke){
        try{
            renderAvatarStorage();
            renderPokemonStorage();            
        } catch(err){
            console.log(err)
        }
    } 

    if(existList){
        $('.Deseos').show()
    }


} );

$(()=>{
    renderHome();
    
    $('.nav-link').click( function(){
        $(this).toggleClass('active');
    } );

    $('#main').click( saveInfoInStorage );
    $('#main').click( alimentacionUp );
    $('#main').click( bienestarUp );
    $('#main').click( descansoUp );
    $('#main').click( AddwishListPokemon );
    $('#main').click( addPokemon );
});


