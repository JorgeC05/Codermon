import { guion } from "../guion.js";


export const HomeComponent = {
    render() {
        let htmlHomeView = `<div class="texto"> `; 
        guion.forEach(({texto}) => {     
            htmlHomeView += ` <li>${texto}</li>  `;
        });
        htmlHomeView += `</div>`
        
        return htmlHomeView
    }    
};

