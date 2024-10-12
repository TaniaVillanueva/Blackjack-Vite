import { pedirCarta } from "./pedir-carta";

/** 
 * 
 * @param {Array} carta 
 * @returns {Const}
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}