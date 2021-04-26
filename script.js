const konteineris = document.getElementById('vieta');
konteineris.style.display = "flex";
konteineris.style.flexWrap = "wrap";
konteineris.style.justifyContent ="center";

const fetchSalys = async() =>{
  try {
  
    const pazadas = await fetch ('https://restcountries.eu/rest/v2/all');
    //console.log(pazadas);
    const salys = await pazadas.json();

    //console.log(salys);

    //salys.forEach(salis=>{
     for (let i=0; i<salys.length; i++){
      console.log(salys[i].name+"/////");

      //console.log(salis.name);
    const vienaSalis = document.createElement('div');
    const vienaSalis1 = document.createElement('div');

    //vienaSalis1.classList.add("remas");
    vienaSalis1.style.width = "300px";
    vienaSalis1.style.marginBottom = "15px";
    vienaSalis1.style.height= "auto";

    const nuotrauka = document.createElement('img');
    const pavadinimas = document.createElement('h3');

    pavadinimas.style.textAlign = "center";
   // nuotrauka.src = salis.flag;
    nuotrauka.src =salys[i].flag;
    nuotrauka.style.height = "100px";
    nuotrauka.style.display ="block";
    nuotrauka.style.margin = "0 auto";
    nuotrauka.style.paddingTop = "20px";
    //  pavadinimas.innerText = salis.name;
 
    pavadinimas.innerText ="Country: "+salys[i].name;
    //console.log(salis.name);
    konteineris.appendChild(vienaSalis1);

    vienaSalis1.appendChild(vienaSalis);
    vienaSalis.appendChild(nuotrauka);
    vienaSalis.appendChild(pavadinimas);
    vienaSalis.style.backgroundColor = "#e3e1e1";
    vienaSalis.style.minHeight = "100%";
    vienaSalis.style.margin = "0px 20px 0px 20px";

    const kalba_p = document.createElement('p'); 

    kalba_p.innerText="Language: ";
    kalba_p.style.paddingLeft = "20px";

    vienaSalis.appendChild(kalba_p);

    const kalba_ul = document.createElement('ul'); 

        for (let x=0; x<salys[i].languages.length; x++){
          console.log(salys[i].languages[x].name)
        //  console.log(salis.languages[i].name)
          const kalba_li = document.createElement('li');

          kalba_li.innerText = salys[i].languages[x].name;
          kalba_ul.appendChild(kalba_li);
          vienaSalis.appendChild(kalba_ul);
        }

 //  for (let kalbos in salis.languages){
    //console.log(salis.languages[kalbos].name);
  //  const kalba = document.createElement('p');
  // kalba.innerText = salis.languages[kalbos].name;
  // vienaSalis.appendChild(kalba);  
 // }

    //})
    }


    }

  catch (error) {
    console.log(error);
  }
}

fetchSalys();