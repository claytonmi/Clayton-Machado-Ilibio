function ocultar(id){
   if( document.querySelector(id)){
        document.querySelector(id).style.display = 'none'; 
   }    
    return  document.querySelector(id).style.display == 'none';
}
function servOculta(id){
  setTimeout(function(){  
      var ocultou = ocultar(id)
      if( !ocultou ){
        servOculta(id);
      }
         
    } , 1);
}

servOculta('small');
/*servOculta('.site-footer-owner');
servOculta('.site-footer-credits');*/
