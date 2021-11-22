import { HomeComponent } from '../components/HomeComponent.js'
import { SelectionComponent } from '../components/SelectionComponent.js'
import { MyPokemonComponent } from '../components/MyPokemonComponent.js'
import { PokeListComponent } from '../components/PokeListComponent.js'
import { WishListComponent } from '../components/WishListComponent.js'
import { ErrorComponent } from "../components/ErrorComponent.js";

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/Seleccionar', component: SelectionComponent },
    { path: '/MiPokemon', component: MyPokemonComponent },
    { path: '/ListaPokemones', component: PokeListComponent },
    { path: '/Deseos', component: WishListComponent }
];

function parseLocation() {
    return location.hash.slice(1) || '/';
}

function findComponent( clickPath ){
    const ruta = routes.find(  route  => { return route.path === clickPath } );
    return ruta

}

export function router(){
    const userPath = parseLocation();
    const  { component = ErrorComponent }  = findComponent(userPath) || {};
    const render = component.render()
    $('#main').html( render );
}