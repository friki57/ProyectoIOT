module.exports = (arreglo,filtro)=>
{
  for (var atr in filtro) {
    if (filtro.hasOwnProperty(atr)) {
        switch (filtro[atr].tipo) {
          case 'rango':
            arreglo = arreglo.filter(ele => ele[atr] >= filtro[atr].min && ele[atr] <= filtro[atr].max);
            break;
          case 'igual':
            arreglo = arreglo.filter(ele => ele[atr] == filtro[atr].valor);
            break;
          case 'contieneString':
            arreglo = arreglo.filter(ele => ele[atr].includes(filtro[atr].valor));
            break;
        }
    }
  }
  return arreglo;
}
