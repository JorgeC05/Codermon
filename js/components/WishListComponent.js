export const WishListComponent = {
    render() {
        let listadoPokemon = JSON.parse(localStorage.getItem('wishList'));
        let htmlCarritoView = `<div class="listaCarrito">`
        let htmlLista = `
        <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Pokemon</th>
                <th scope="col">Nombre</th>
                <th scope="col">Poder</th>
            </tr>
        </thead>
        `
        listadoPokemon.forEach(pokemon => {
            let { imagen, name, base_experience, id } = pokemon;
            htmlLista += `
            <tbody>
                <tr class="table-dark">
                    <td>${id}</td>
                    <td><img src=${imagen} class="pokemonList" alt="${name}"></td>
                    <td>${name}</td>
                    <td>${base_experience} exp</td>
                </tr>
            </tbody>            
            `;
                    

        });

        htmlLista += `</table>`
        htmlCarritoView += htmlLista
        htmlCarritoView += `</div>`
        return htmlCarritoView
    }    
};