export const validationNameColor = (nomeCor) => {
    return nomeCor.trim().length > 3
 }
 
 export const validationColorHex = (corHexa) => {
    const padrao = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let erro = false
 
    if (corHexa.trim().length < 3) return false;
 
    corHexa.toUpperCase().split('').forEach(char => {
       if (!padrao.includes(char)) {
          erro = true
       }
    })
 
    return !erro
 }

