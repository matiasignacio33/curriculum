 /** animaciones curriculum */



 window.addEventListener('scroll',function(){

    let animacion=document.getElementById('contenedor1');
   
   
    let posicionobj1=animacion.getBoundingClientRect ().top;

     console.log(posicionobj1);


     let tamañodepantalla=window.innerHeight;



        animacion.style.animation='mover 2s ease-out'
   }
)


window.addEventListener('scroll',function(){

    let animacion=document.getElementById('contenedordos');
   
   
    let posicionobj1=animacion.getBoundingClientRect ().top;

     console.log(posicionobj1);


     let tamañodepantalla=window.innerHeight;



        animacion.style.animation='mover 2s ease-out'
   }
)


window.addEventListener('scroll',function(){

    let animacion=document.getElementById('contenedortres');
   
   
    let posicionobj1=animacion.getBoundingClientRect ().top;

     console.log(posicionobj1);


     let tamañodepantalla=window.innerHeight;



        animacion.style.animation='mover 2s ease-out'
   }
)







    /** contacto.  clonado del repositorio de git hub de Leonidas Esteban */

    const form2 = document.querySelector('#form')
    form2.addEventListener('submit', handleSubmit)
    function handleSubmit(event) {
      event.preventDefault()
      const form = new FormData(this)
      trucazo.setAttribute('href', `mailto:matiasibustos27@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
      trucazo.click()
   




    }
