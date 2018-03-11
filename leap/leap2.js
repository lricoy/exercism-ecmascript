/**

     [OK] - São bissextos todos os anos múltiplos de 400, p.ex: 1600, 2000, 2400, 2800...
    
     [OK] - São bissextos todos os múltiplos de 4, 
        exceto se for múltiplo de 100 mas não de 400

     p.ex: 1996, 2000, 2004, 2008, 2012, 2016…

     [OK] - Não são bissextos todos os demais anos.
 */
const divisible = (divisor, dividend) => divisor % dividend === 0;
export default year => {
    if (divisible(year, 400)) {
        return true;
    }
    return (year % 4 === 0 || year % 100 === 0) && year % 400 !== 0;
};
