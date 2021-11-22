export const PokeListComponent = {
    render() {
        let urls = []
        let htmlListView = `<div class="listaPokemon">`

        $.get({
            url: 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0',
            success: function(data){
                let pokeList = data.results;
                pokeList.forEach(({url}) => {
                    urls.push(url);
                    $.get({
                        url,
                        success: function(data){
                            let { sprites, name, id }  = data; 
                            $('.listaPokemon').append(`
                                <div class="card card-ajax" style="width: 10rem;">
                                    <img src=${sprites.other.dream_world.front_default} class="card-img-top" alt="${name}">
                                    <div class="card-body">
                                        <h5 class="card-title">${name}</h5>
                                        <button class="btn btn-primary btnSelect selectAjax" data-id="${id}">Añadir</button>                        
                                    </div>
                                </div>
                            `)                     
                        }
                    })
                });
            }            
        });
        htmlListView += `</div>`
        return htmlListView
    }   
}    

