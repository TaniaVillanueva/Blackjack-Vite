import _ from 'underscore';

export const a = 'Hola mundo';

/***
 * @param {Array<string>} tiposDeCarta Ejemplo ['C','D','H','S'];
 * @param {Array<string>} tiposEspeciales ejemplo ['A','J','Q','K'];
 * @returns {Array} -retorna un nuevo deck de cartas 
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta ) throw new Error('tiposDeCarta es obligatorio');
    if ( !tiposDeCarta || tiposDeCarta.length === 0) throw new Error('Tipos de carta es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

