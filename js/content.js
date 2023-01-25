// ==UserScript==
// @name         Youtube Tools Bets tools for youtube download NOW cool settings Activar modo oscuro / Active Dark Theme
// @namespace    https://github.com/DeveloperMDCM/
// @homepage     https://github.com/DeveloperMDCM/
// @version      6.3
// @description  Nuevas opciones para modificar la interfaz de YouTube añadiendo caracteristicas cool more  options to customize youtube @MDCM2022
// @author       MDCM
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @match        *://*.youtube.com/*
// @exclude      *://music.youtube.com/*
// @exclude      *://*.music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @connect      youtube.com
// ==/UserScript==

(function () {
  // Youtube tools by: DeveloperMDCM MDCM
// https://github.com/DeveloperMDCM/Youtube-toos-extension
// API return dislikes  https://returnyoutubedislike.com/
function cargarScript() {
console.log('Scrip en ejecución by: DeveloperMDCM  MDCM');
alert('Script by: DeveloperMDCM')
// alert('Script activado: Projecto en : https://github.com/DeveloperMDCM/Youtube-toos-extension');
let urlEnlace = '';
let verificar = true;
let ad = true;
let mp3;
const addDislike = document.createElement('P');
const menuBotones = `
<meta http-equiv="Expires" content="0">
<meta http-equiv="Last-Modified" content="0">
<meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
<meta http-equiv="Pragma" content="no-cache">
<style>

.mdcm:hover {
  cursor: pointer;
}
.mdcm{
  font-size: 10px;
}

#subscribe-button > ytd-subscribe-button-renderer > yt-button-shape > button:hover {
  zoom: 0.9;
}
  .containerButtons {
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    user-select: none;
  }

  .containerButtons button , input {
    display: flex;
    flex-direction: column-reverse;
    margin: 0 4px;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
    
  }
  .containerButtons h1, h2 {
    user-select: none;
  }
 
  #MDCM {
    animation: mdcm 10s infinite alternate;
    position: relative;
    transition: 4s;
  }

  @keyframes mdcm {
    0%, 100%{
      right: 300px;
    }
    50% {
      right: -300px;
    }
  }

  .containerButtons button .containerButtons button svg {
    width: 50px;
    height: 40px;
  }

  #color, #eyes {
    opacity:0;position:absolute;height: 93%;bottom: 0; top: 2px; width: 62px;
  }

  .containerall {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .container .botoncalidades {
    margin: 3px 2px;
    width: 24.6%;
  }
  
  
  .botoncalidades:first-child {
    background-color: red;
  }
  
  .selectcalidades , .botoncalidades{
    width: 50%;
    height: 27.8px;
    background-color: #fff;
    color: #000;
    font-size: 25px;
    text-align: center;
    border: none;
    font-size: 20px;
    margin: 2px 2px;
  }
  .botoncalidades {
    width: 50px;
    height: 30px;
    background-color: rgb(4, 156, 22);
    border: 0px solid #000;
    color: #fff;
    font-size: 20px;
    margin: 2px 2px;
  
  }
  .botoncalidades:hover, .bntcontainer:hover {
    cursor: pointer;
  }
  
  .ocultarframe {
    display: none;
  }
  
  
</style>
<div class="container">
  <form>
    <div class="containerButtons">
      <div style="position:relative; display:inline-block ">
      <button type="button" class="btn btn-secondary"><img width="35" src="https://cdn-icons-png.flaticon.com/512/674/674468.png"><input id="color" list type="color" value="#ffffff" ></button></div>
      <button type="button"  id="imagen"> <img width="35" src="https://cdn-icons-png.flaticon.com/512/3342/3342119.png"></button>
      <button type="button"  id="boton"> <img width="35" src="https://cdn-icons-png.flaticon.com/512/817/817711.png"></button>
      <button type="button"  id="fondo"> <img width="35" src="https://cdn-icons-png.flaticon.com/512/4789/4789442.png"></button>
      <button type="button"  id="reset"> <img width="35" src="https://cdn-icons-png.flaticon.com/512/5632/5632370.png"></button>
      <div style="position:relative; display:inline-block ">
      <button type="button"><img width="35" src="https://cdn-icons-png.flaticon.com/512/5946/5946143.png"><input id="eyes" list="presetColors" type="color" value="#ffffff" ></button>
      <datalist id="presetColors">
      <option value="#000000"/>
      <option value="#fbff00"/>
      <option value="#ff0000"/>
      <option value="#00ff00"/>
      <option value="#0000ff"/>
    </datalist>
      </div>
    </div>
      <div>
      </div>
      <h1 id="rating" style="text-align: center;  margin: 5px 0"></h1>
      <h2 style="text-align: center; margin: 5px 0" id="ratingtext" >Rating</h2>
  </form>
  <div id="ojosprotect" style="position: fixed; pointer-events: none; width: 100%; height: 100%; left: 0px; top: 0px; opacity: 0.2; z-index: 10; display: block;"></div>
 
</div>
<div class="containerall">
  <button class="botoncalidades btn1">MP4</button>
  <button class="botoncalidades btn2">MP3</button>
</div>
<form class="formulariodescarga" action="">
<div class="containerall">
  <select class="selectcalidades ocultarframe" required>
    <option selected disabled>Calidad del video / Quiality video</option> 
    <option value="360">360p Mp4</option>
    <option value="480">480p Mp4</option>
    <option value="720">720p Mp4 Default</option>
    <option value="1080">1080p Mp4</option>
    <option value="4k">2160p Mp4</option>
    <option value="8k">4320p Mp4</option>
    </select>
    <iframe id="descargando"  style="z-index: 99; border: none; height: 27.4px; width: 50%;"  class="containerall ocultarframe" src="" frameborder="0"></iframe>
  </div>
</form>

`;



setTimeout(() => { // se repite cada 1 segundo
    const addButton = document.querySelector(".style-scope .ytd-watch-metadata");
    if (addButton != undefined && verificar) {
        addButton.insertAdjacentHTML('beforebegin', menuBotones);
        verificar = false;
        document.querySelector('video').style.borderRadius = '30px';
  
        const formulariodescarga = document.querySelector('.formulariodescarga');
        const framedescarga = document.querySelector('#descargando');
        formulariodescarga.addEventListener('click', e=> {
          e.preventDefault();
        });
      
        const btn1mp4 = document.querySelector('.btn1');
        const btn2mp3 = document.querySelector('.btn2');
        const selectcalidades = document.querySelector('.selectcalidades');
        selectcalidades.addEventListener('click', ()=> {
    
        })
        
       
        selectcalidades.addEventListener('change', (e)=> {
          console.log(e.target.value);
          framedescarga.src = `https://loader.to/api/button/?url=${window.location.href}&f=${e.target.value}`;
          framedescarga.classList.remove('ocultarframe');
        })
    
        btn1mp4.onclick = () =>{
          selectcalidades.classList.remove('ocultarframe');
          framedescarga.classList.add('ocultarframe');
          formulariodescarga.classList.remove('ocultarframe')
          formulariodescarga.reset();
        }
        btn2mp3.onclick = () =>{
          mp3 = 'mp3';
          selectcalidades.classList.add('ocultarframe');
            framedescarga.classList.remove('ocultarframe');
            framedescarga.src = `https://loader.to/api/button/?url=${window.location.href}&f=${mp3}`;
            formulariodescarga.reset();
            formulariodescarga.classList.remove('ocultarframe');

        }
    
    const reverse = document.querySelector("#columns");
    const btnReset = document.querySelector('#reset');
    const InputColor = document.querySelector('#color');
    const btnImagen = document.querySelector('#imagen');
    const formularioButtons = document.querySelector('#eyes');
    const btnFondo = document.querySelector('#fondo');
    const boton = document.querySelector('#boton');
    const buttonsVideo = document.querySelector('#top-row.ytd-watch-metadata');
      reverse.style.flexDirection = 'row';
        buttonsVideo.style = '    display: flex;flex-direction: column;justify-content: center;align-items: center ;';
        document.querySelector("#title > h1").style = 'text-align: center; color: red;';
        document.querySelector("#owner").style.justifyContent = 'center';
        document.querySelector('#search-icon-legacy.ytd-searchbox').style.backgroundColor = 'black';
    btnFondo.onclick = function () {
      if( document.querySelector("#cinematics > div") != undefined){
        document.querySelector("#cinematics > div").style = 'position: fixed; inset: 0px; pointer-events: none; transform: scale(1.5, 2)';
        document.querySelector("#cinematics > div > canvas:nth-child(1)").style = 'position: absolute; width: 100%; height: 100%;';
        document.querySelector("#cinematics > div > canvas:nth-child(2)").style = 'position: absolute; width: 100%; height: 100%; opacity: 0.4;';
        document.querySelector("html[dark] [dark]").style.backgroundColor = 'transparent';
        document.body.style.setProperty('--yt-spec-general-background-a', 'transparent');
        document.querySelector("ytd-playlist-panel-renderer[modern-panels]:not([within-miniplayer]) #container.ytd-playlist-panel-renderer").style = "border: 3px solid red; background-color: #352e2e29";
      }else {
        mostrarAlerta('Activar modo oscuro / Active Dark Theme');
        }
    };
   
    let count = 1;
    boton.onclick = function() {
      if (count === 1 && reverse != undefined) {
        count = 2;
        reverse.style.flexDirection = 'row-reverse';
      } else {
        reverse.style.flexDirection = 'row';
        count = 1;
      }
    };


    formularioButtons.addEventListener('input', function () {
      document.querySelector('#ojosprotect').style.backgroundColor = formularioButtons.value;
      // console.log(formularioButtons.value);
    });

    // Input color
    InputColor.addEventListener('input', function() {
      if(document.querySelector("#cinematics > div") != undefined){
        document.body.style.setProperty('--yt-spec-text-primary', InputColor.value);
        document.body.style.setProperty('--yt-spec-text-secondary', '#ffffff');
        document.body.style.setProperty('--yt-spec-static-overlay-background-brand', 'red');
        document.body.style.setProperty('--yt-spec-static-brand-red', InputColor.value);
        document.body.style.setProperty('--yt-spec-static-brand-white', InputColor.value);
        document.body.style.setProperty('--ytd-searchbox-legacy-border-color', InputColor.value);
        document.body.style.setProperty('--ytd-searchbox-legacy-border-shadow-color', InputColor.value);
        document.querySelector("#logo-icon").style.color = InputColor.value;
        document.querySelector("#subscribe-button > ytd-subscribe-button-renderer > yt-button-shape > button").style = 'color: black; background-color: white; border: 2px solid black; ';
        
      }else {
        mostrarAlerta('Activar modo oscuro / Active Dark Theme');
      }
    })
    // Boton para resetear
    btnReset.onclick = function() {
      if(document.querySelector("#cinematics > div") != undefined){
      document.body.style.setProperty('--yt-spec-text-primary', '#ffffff');
      // document.body.style.setProperty('--yt-spec-text-secondary', '#ffffff');
      document.body.style.setProperty('--yt-spec-static-overlay-background-brand', '#ffffff');
      document.querySelector("#cinematics > div").style = 'position: relative; inset: 0px; pointer-events: none; transform: scale(1.5, 2)';
      document.body.style.setProperty('--yt-spec-static-overlay-background-brand', 'red');
      document.body.style.setProperty('--yt-spec-static-brand-red', '#ff0000');
      document.body.style.setProperty('--yt-spec-static-brand-white', 'gray');
      document.querySelector('#ojosprotect').style.backgroundColor = 'transparent';
      document.body.style.setProperty('--ytd-searchbox-legacy-border-color', '#ffffff');
      document.body.style.setProperty('--ytd-searchbox-legacy-border-shadow-color', '#ffffff');
      document.querySelector("#logo-icon").style.color = '#ffffff';
      document.body.style.setProperty('--yt-spec-general-background-a', '#000000');
      document.querySelector("html[dark] [dark]").style.backgroundColor = '#000000';
      document.querySelector("ytd-playlist-panel-renderer[modern-panels]:not([within-miniplayer]) #container.ytd-playlist-panel-renderer").style = "";
      } else {
        mostrarAlerta('Activar modo oscuro / Active Dark Theme');
      }
      reverse.style.flexDirection = 'row';
    };
    //
    btnImagen.onclick = function () {
      let enlace;
      enlace = document.baseURI.split('=')[1].split('&')[0];
      window.open(`https://i.ytimg.com/vi/${enlace}/maxresdefault.jpg`, '_blank');
    };
    
}}, 1000); // Termina

// Función para ratinh de los videos
function MDCM() {
  if(document.querySelector('#below > ytd-watch-metadata > div.container > form') != undefined){
    const mdcm = document.querySelector('#MDCM');
    const sms = document.querySelector('#below > ytd-watch-metadata');
    if(!mdcm) {
      if (sms != undefined) {
        const mdcm = document.createElement('P');
        mdcm.innerHTML = '<a id="MDCM" target="_blank" style="margin: 10px 0; font-size: 14px; color: #005ea5;text-decoration-style: wavy; display: flex; align-items: center; justify-content: center;" href="https://github.com/DeveloperMDCM/Youtube-toos-extension">GitHub Repository<h4></h4</a>';
        sms.appendChild(mdcm);
    }
  }
}
}

let validoUrl = document.location.href;
// Función para adaptar dislikes
function cargarDislikes() {
  mp3 = 'mp3';
  validoUrl = document.location.href;
  const btnDislike = document.querySelector("#segmented-dislike-button yt-button-shape > button");
  const validoVentana = document.querySelector("#below > ytd-watch-metadata > div.container > form > div.containerButtons");
  const resultado = document.querySelector("#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button > yt-touch-feedback-shape");
  if(validoUrl.split('/')[3] !== 'shorts' && validoVentana != undefined && validoUrl != 'https://www.youtube.com/'){
      validoUrl = document.baseURI.split('=')[1].split('&')[0];
      const url = `https://returnyoutubedislikeapi.com/Votes?videoId=${validoUrl}`;
      fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
          const {dislikes, dateCreated, rating } = datos; // Objeto
          addDislike.textContent = `${FormatiarNumero(dislikes, 0)}`;
          btnDislike.style = 'width: 100px';
          resultado.style = 'margin: 0 6px';
          resultado.insertAdjacentElement('afterend', addDislike);
          const iconLike = document.querySelector("#segmented-like-button > ytd-toggle-button-renderer > yt-button-shape > button > div.yt-spec-button-shape-next__icon > yt-icon > yt-animated-icon")
          const inconDislike = document.querySelector("#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button > div > yt-icon");
          if(iconLike != undefined && iconLike != inconDislike){

            document.querySelector("#segmented-like-button > ytd-toggle-button-renderer > yt-button-shape > button > div.yt-spec-button-shape-next__icon > yt-icon > yt-animated-icon").innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
              </svg>`;
            document.querySelector("#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button > div > yt-icon").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" />
            </svg>
            `;
          }

          let start = rating;
          const startRating = document.querySelector("#below > ytd-watch-metadata > div.container > form > h1");
          const ratingtext = document.querySelector("#ratingtext");
          const date = new Date();
          while (startRating.firstChild) {
            startRating.removeChild(startRating.firstChild);
        } // Rating califiacion del video
          for (let i = 1; i <= Math.round(start); i++) {
            startRating.textContent += '⭐';
            ratingtext.innerHTML = `Rating <br>${dateCreated.split('T')[0].split('-')[0]} - ${date.getFullYear()}` ;
          }
         
      })
  }
}


// Función para formatear los dislikes
function FormatiarNumero(num, digits) {
 
  const lookup = [{
      value: 1,
      symbol: ""
    },
    {
      value: 1e3,
      symbol: " K"
    },
    {
      value: 1e6,
      symbol: " M"
    }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup.slice().reverse().find((item) => {
    return num >= item.value
  })
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0"
}

// Función para mostrar los dislikes en shorts
function shortDislike() {
  validoUrl = document.location.href;
  const validoVentanaShort = document.querySelectorAll('#dislike-button > yt-button-shape > label > div > span');
    if(validoVentanaShort != undefined && document.location.href.split('/')[3] === 'shorts'){
      validoUrl = document.location.href.split('/')[4];
      const urlShorts = `https://returnyoutubedislikeapi.com/Votes?videoId=${validoUrl}`;
      fetch(urlShorts)
        .then(respuestas => respuestas.json())
        .then(datosShort => {
          const { dislikes } = datosShort;
          for(var i = 0; i < validoVentanaShort.length; i++){
            validoVentanaShort[i].textContent = `${FormatiarNumero(dislikes, 0)}`;
          }
        })
      }
}




// Mostrar alerta de activar modo oscuro
function mostrarAlerta(mensaje) {
  const addButton = document.querySelector('#below > ytd-watch-metadata > div.container > form');
  const existeAlerta = document.querySelector('.alerta');
  if(!existeAlerta) {
    if (addButton != undefined) {
      const modeDark = document.createElement('P');
      modeDark.innerHTML = `
      <h1 class="alerta" style="color: red; background-color: white; border: 2px solid white; text-aling: center; display: flex;  align-items: center; justify-content: center;">${mensaje}</h1>
      `;
      addButton.appendChild(modeDark);
    setTimeout(() =>{
      modeDark.remove();
    }, 3000)
  }
      
}
}
// Función para eliminar los posibles anuncios
function eliminarAnuancios() { // Skip ads video / saltar publicidad
    const buttonSkip = document.querySelector('.ytp-ad-skip-button.ytp-button');
    const validar = undefined;
    let ytpminiplayerscrim = document.querySelector('ytp-miniplayer-scrim');
    let cross = document.getElementsByClassName("ytp-ad-overlay-close-container")[0];
    let skip = document.getElementsByClassName("ytp-ad-skip-button")[0];
    let ad1 = document.querySelector("#contents > ytd-promoted-sparkles-web-renderer")
    let ad2 = document.querySelector("#player-ads > ytd-player-legacy-desktop-watch-ads-renderer");
    let ad3 = document.querySelector("#action-companion-click-target");
    let ad4 = document.querySelector("#player-overlay\\:0 > div.ytp-ad-player-overlay-flyout-cta.ytp-ad-player-overlay-flyout-cta-rounded");
    let ad5 = document.querySelector("#invideo-overlay\\:0 > div > div.ytp-ad-image-overlay");
    let ad6 = document.querySelector("#root");
    let ad7 = document.querySelector("#rendering-content > ytd-video-masthead-ad-v3-renderer");
    let ad8 = document.querySelector("#player-ads > ytd-player-legacy-desktop-watch-ads-renderer");
    let ad9 = document.querySelector('.ytp-ad-text-overlay');
    const adVideo = document.querySelectorAll('.ad-showing')[0];
    const adTimeVideo = document.querySelector('.ytp-ad-text.ytp-ad-preview-text');
    const video = document.querySelector('video');
    if (adVideo != validar && video != validar && adTimeVideo != validar) {
        video.currentTime = video.duration;
    }
    if (ytpminiplayerscrim != validar) alert('eliminado');
    if (ad1 != validar) ad1.remove();
    if (ad2 != validar) ad2.remove();
    if (ad3 != validar) ad3.remove();
    if (ad4 != validar) ad4.remove();
    if (ad5 != validar) ad5.remove();
    if (ad6 != validar && ad) {
        ad6.style.display = 'none';
        ad = false;
    }
    if (ad7 != validar) ad7.remove();
    if (ad8 != validar) ad8.remove();
    if (ad9 != validar) ad9.remove();
    if (cross != validar) cross.click();
    if (skip != validar) skip.click();
        if (buttonSkip != validar) {
          buttonSkip.click();
        }
    }
   
// Validar que la url a cambiado por una nueva
let descargo = true;
let prevUrl = undefined; // Sin cambios
setInterval(() => {
  const currUrl = window.location.href;

  if (currUrl != prevUrl) {
    cargarDislikes();
    MDCM();
    // URL changed / Cambio
    const formulariodescarga = document.querySelector('.formulariodescarga');
    setTimeout(() =>{
      if(formulariodescarga != undefined){
        formulariodescarga.classList.add('ocultarframe');
      }
    },500)
    prevUrl = currUrl;
    setTimeout(()=>{
      cargarDislikes();
      shortDislike();
    },1000);
  }
  
  const ventanaShortComentarios = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-paper-dialog > ytd-engagement-panel-section-list-renderer");
  const historias = document.querySelectorAll("#shorts-inner-container");
  if(ventanaShortComentarios && historias){
    limpiarHTML();
    // console.log('Ventana de historias');
  }
  eliminarAnuancios();
}, 500); // Cada 2 segundos se ejecuta mientras la url cambie
eliminarAnuancios();
}


// Variables para la traduccion de comentarios
let traducido; // Texto traducido
let urlLista; // Url lista
//TODO: Traducir comentarios
function traductor() {
  const texto = document.querySelectorAll('#content-text');
  let o = `?client=dict-chrome-ex&sl=auto&tl=${navigator.language}&q=`;
  for (let i = 0; i < texto.length; i++) {
      // console.log(datos[0][0])
      const botonTraducir = document.createElement('BUTTON');
      botonTraducir.classList.add('mdcm');
      botonTraducir.textContent = 'Traducir';
      botonTraducir.style.backgroundColor = 'white';
      botonTraducir.style.color = 'black';
      botonTraducir.style.borderRadius = '5px';
      botonTraducir.setAttribute('id', `btn${i}`)
      texto[i].insertAdjacentElement('afterend', botonTraducir);
      const mdcm = document.querySelectorAll(`.mdcm`);
      mdcm[i].onclick = (function () {
          traducido = o;
          urlLista = traducido + texto[i].textContent;
          fetch("https://translate.googleapis.com/translate_a/t" + urlLista) //API
              .then(response => response.json())
              .then(datos => {
                  texto[i].textContent = datos[0][0];
                  mdcm[i].textContent = 'Traducido';
              });
          });
  }
}

// Limpiar botones de comentarios
function limpiarHTML() {
  var buttons = document.querySelectorAll('.mdcm');
  [].forEach.call(buttons, function (buttons) {
      buttons.remove();
  });
  traductor();
};

const max = document.documentElement.scrollHeight;
let min;
// TODO: verificar si ya llegue al final de la pagina
window.onscroll = () => {
  min = document.documentElement.scrollHeight;
  const divEl = document.querySelector("#content-text");
  if (divEl != undefined && min > max) {
      limpiarHTML();
  }
};
setTimeout(() =>{cargarScript()},1500)
})();
