
const metodoPago = 'cheque';

switch (metodoPago){
  case 'tarjeta':
    console.log('pagaste con tarjeta');
    break;
  case 'cheque':
    console.log('pagaras con cheque')
    break;
  default:
    console.log('aun no has pagado')
    break;
}