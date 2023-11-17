import { heroes } from '../data/heroes';


export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if(!validPublishers.includes(publisher)) {
        throw new Error(`El ${publisher} no existe en la lista, ingrese correctamente`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher);

}