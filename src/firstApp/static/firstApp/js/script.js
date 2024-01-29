

function telecharge(){
    
    var certificat = document.getElementById('attestation');
    
     var opt = {
                margin: 0,
                filename: `Attestation_Ambassadeur${localStorage.getItem("nom")}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: {unit: 'px', format: [800, 500], orientation: 'landscape'} // Définir l'orientation sur 'landscape' pour le mode paysage
            };
         html2pdf(certificat, opt);

         Swal.fire({
            title: "Telechargement Réussi !",
            text: "Cliquez sur le button!",
            icon: "success",
         
                
          });
    
}
function capitalize(prenom) {
    const partiesPrenom = prenom.split(" ");

// Formate chaque partie du prenom
const prenomFormate = partiesPrenom.map(prenom => `${prenom.charAt(0).toUpperCase()}${prenom.slice(1).toLowerCase()}`).join(" ");
  
 return prenomFormate;
}

    const start = document.querySelector(".start");
    start.addEventListener("click", ()=>{
        const body = document.querySelector("body");
        body.innerHTML = `<div class="formdiv " id="form">
        <form class=" w-full h-full bg-white shadow-md max-h-[400px] max-w-[400px] p-3 mx-2">
            <h1 class="text-center font-bold text-2xl">Enregistrez vos infomations
            </h1>
            <div class="mx-auto">
                <div>
                    <input type="text" placeholder="Votre Nom"   class="input form_nom">
                </div>
                <div>
                    <input type="text" placeholder="Votre Prénom"  class="input form_prenom">
                </div>
                <div>
                <small class="font-bold">La date d'adhesion : </small>
                    <input type="date" name="" id="" class="input form_date">
                </div>
                <div>
               
                    <input  type="button" value="SOUMETTRE" class=" mt-3 bg-slate-900 text-white text-center p-3 block w-full" onclick="afficherPDF()">
                </div>
            </div>
        </form>
        </div> `
    })

    function afficherPDF(){
        
        const form_nom = document.querySelector(".form_nom").value;
        const form_prenom = document.querySelector(".form_prenom").value;
        const form_date = document.querySelector(".form_date").value;

        localStorage.setItem("nom", form_prenom)
     
       
     
        const body = document.querySelector("body");

        if(form_nom && form_prenom && form_date){
           
            body.innerHTML = `<div class="w-full h-screen flex flex-col justify-center items-center bg-white">
            <div class="">
                <button onclick="telecharge()" class="text-white bg-slate-900 mt-2 p-4 hover:font-bold">DOWNLOAD</button>
            </div>
            
            <div class="w-full h-screen flex  flex-col justify-center  bg-white " >
                <div class="attestation w-[800px] h-[500px] mx-auto relative  overflow-hidden" id="attestation">
                
                <img src="./assets/background.png" alt="" class="absolute top-0 left-0 right-0 bottom-0 ">
                <img src="./assets/bordure.png" alt="" class="absolute top-0 left-0 right-0 bottom-0 w-[800px] h-[500px] ">
                <div class="w-full  absolute top-4">
                    <div class="entete flex justify-evenly items-center px-3">
                        <img src="./assets/logo.png" alt="" class="w-32 h-32 object-cover mt-6 -ml-[70px] ">
                        <h1 class="text-4xl font-bold font-cinzel mt-6 tracking-wider">ATTESTATION <br class="mt-4"> <span class="text-3xl text-center">D'AMBASSADEUR</span></h1>
                        <img src="./assets/logo.png" alt="" class="w-32 h-32 object-cover mt-5 -mr-[70px]">
                    </div>
                    
                
                    <div class="contenu flex flex-col justify-center items-center  ">
                        <p class="text-xl mt-2">Décerné à :</p>
                        <h2 class="text-2xl font-bold mt-3 font-glacial">${capitalize(form_prenom)} ${form_nom.toUpperCase()}</h2>
                        <hr class="h-5 w-[200px] border-slate-600 mt-2">
                        <p class="text-xl">Est Ambassadeur de <span class="text-human font-bold">Human AI</span></p>
                        <p class="text-xl">Depuis le <span>${(new Date(form_date)).toLocaleDateString('fr-FR')}</span></p>
                    </div>
        
        
                    <div class="flex justify-center -mt-2">
                        <img src="./assets/bagde.png" alt="" class="w-32 h-40 object-cover">                        
                    </div>
                    <div class="relative -top-44 ">
                        <img src="./assets/Cachet_Human_AI.png" alt="" class=" relative w-60 h-48 float-end mr-[134px] object-cover">
                        
                     </div>
                     
                    
                </div>
              
             
           
        
        
                </div>
                
              
            </div>
           </div>`
          
        }else{
    
        
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Veuillez remplir toute les informations",
                
              });
        }
    }
     

