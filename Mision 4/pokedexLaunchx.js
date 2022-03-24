const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status !="200"){
            console.log(res);
            pokeImage("./pokesad.png")
            document.getElementById("tipoB").innerHTML = "error";
            document.getElementById("elName").innerHTML = "error";
            document.getElementById("numero").innerHTML = "error";
            document.getElementById("hp").innerHTML = "error";
            document.getElementById("nhp").innerHTML = "error";
            document.getElementById("ataque").innerHTML = "error";
            document.getElementById("nataque").innerHTML = "error";
            document.getElementById("defensa").innerHTML = "error";
            document.getElementById("ndefensa").innerHTML = "error";
            document.getElementById("specialat").innerHTML = "error";
            document.getElementById("nspecialat").innerHTML = "error";
            document.getElementById("specialde").innerHTML = "error";
            document.getElementById("nspecialde").innerHTML = "error";
            document.getElementById("vel").innerHTML = "error";
            document.getElementById("nvel").innerHTML = "error";
            document.getElementById("tipoA").innerHTML = "error";
            document.getElementById("ataA").innerHTML = "error";
            document.getElementById("ataB").innerHTML = "error";
            document.getElementById("ataC").innerHTML = "error";
            document.getElementById("ataD").innerHTML = "error";
            document.getElementById("texto").innerHTML = "error";


        }
        else{
            return res.json();
        }
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);

        let gegege = "";

        document.getElementById("tipoB").innerHTML = gegege;
        document.getElementById("ataD").innerHTML = gegege;
        document.getElementById("ataC").innerHTML = gegege;
        document.getElementById("ataB").innerHTML = gegege;

        let ataa = "Ataque";

        document.getElementById("texto").innerHTML = ataa;        

        let nombrePKM = data.species.name;
        console.log(nombrePKM);
        document.getElementById("elName").innerHTML = nombrePKM;
        
        let pokeNumber = data.id;
        console.log(pokeNumber);
        document.getElementById("numero").innerHTML = pokeNumber;
        
        let pokehp = data.stats[0].stat.name;
        console.log(pokehp);
        document.getElementById("hp").innerHTML = pokehp;
        
        let pokenhp = data.stats[0].base_stat;
        console.log(pokenhp);
        document.getElementById("nhp").innerHTML = pokenhp;

        let pokeata = data.stats[1].stat.name;
        console.log(pokeata);
        document.getElementById("ataque").innerHTML = pokeata;
        
        let pokenata = data.stats[1].base_stat;
        console.log(pokenata);
        document.getElementById("nataque").innerHTML = pokenata;
        
        let pokedef = data.stats[2].stat.name;
        console.log(pokedef);
        document.getElementById("defensa").innerHTML = pokedef;
        
        let pokendef = data.stats[2].base_stat;
        console.log(pokendef);
        document.getElementById("ndefensa").innerHTML = pokendef;

        let pokesata = data.stats[3].stat.name;
        console.log(pokesata);
        document.getElementById("specialat").innerHTML = pokesata;
        
        let pokensata = data.stats[3].base_stat;
        console.log(pokensata);
        document.getElementById("nspecialat").innerHTML = pokensata;

        let pokesdef = data.stats[4].stat.name;
        console.log(pokesdef);
        document.getElementById("specialde").innerHTML = pokesdef;
        
        let pokensdef = data.stats[4].base_stat;
        console.log(pokensdef);
        document.getElementById("nspecialde").innerHTML = pokensdef;

        let pokevel = data.stats[5].stat.name;
        console.log(pokevel);
        document.getElementById("vel").innerHTML = pokevel;
        
        let pokenvel = data.stats[5].base_stat;
        console.log(pokenvel);
        document.getElementById("nvel").innerHTML = pokenvel;

        let poketa = data.types[0].type.name;
        console.log(poketa);
        document.getElementById("tipoA").innerHTML = poketa;

        let ataqA = data.moves[0].move.name;
        console.log(ataqA);
        document.getElementById("ataA").innerHTML = ataqA;

        let ataqB = data.moves[1].move.name;
        console.log(ataqB);
        document.getElementById("ataB").innerHTML = ataqB;

        let ataqC = data.moves[2].move.name;
        console.log(ataqC);
        document.getElementById("ataC").innerHTML = ataqC;

        let ataqD = data.moves[3].move.name;
        console.log(ataqD);
        document.getElementById("ataD").innerHTML = ataqD;

        var poktb = data.types[1].type.name;
        console.log(poktb);
        document.getElementById("tipoB").innerHTML = poktb;


   })
}




const fetchPokemonS = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status !="200"){
            console.log(res);
            pokeImage("./pokesad.png")
            document.getElementById("tipoB").innerHTML = "error";
            document.getElementById("elName").innerHTML = "error";
            document.getElementById("numero").innerHTML = "error";
            document.getElementById("hp").innerHTML = "error";
            document.getElementById("nhp").innerHTML = "error";
            document.getElementById("ataque").innerHTML = "error";
            document.getElementById("nataque").innerHTML = "error";
            document.getElementById("defensa").innerHTML = "error";
            document.getElementById("ndefensa").innerHTML = "error";
            document.getElementById("specialat").innerHTML = "error";
            document.getElementById("nspecialat").innerHTML = "error";
            document.getElementById("specialde").innerHTML = "error";
            document.getElementById("nspecialde").innerHTML = "error";
            document.getElementById("vel").innerHTML = "error";
            document.getElementById("nvel").innerHTML = "error";
            document.getElementById("tipoA").innerHTML = "error";
            document.getElementById("ataA").innerHTML = "error";
            document.getElementById("ataB").innerHTML = "error";
            document.getElementById("ataC").innerHTML = "error";
            document.getElementById("ataD").innerHTML = "error";
            document.getElementById("texto").innerHTML = "error";


        }
        else{
            return res.json();
        }
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_shiny;
        console.log(pokeImg);
        pokeImage(pokeImg)

        let gegege = "";

        document.getElementById("tipoB").innerHTML = gegege;
        document.getElementById("ataD").innerHTML = gegege;
        document.getElementById("ataC").innerHTML = gegege;
        document.getElementById("ataB").innerHTML = gegege;

        let ataa = "Ataque";

        document.getElementById("texto").innerHTML = ataa;        

        let nombrePKM = data.species.name;
        console.log(nombrePKM);
        document.getElementById("elName").innerHTML = nombrePKM;
        
        let pokeNumber = data.id;
        console.log(pokeNumber);
        document.getElementById("numero").innerHTML = pokeNumber;
        
        let pokehp = data.stats[0].stat.name;
        console.log(pokehp);
        document.getElementById("hp").innerHTML = pokehp;
        
        let pokenhp = data.stats[0].base_stat;
        console.log(pokenhp);
        document.getElementById("nhp").innerHTML = pokenhp;

        let pokeata = data.stats[1].stat.name;
        console.log(pokeata);
        document.getElementById("ataque").innerHTML = pokeata;
        
        let pokenata = data.stats[1].base_stat;
        console.log(pokenata);
        document.getElementById("nataque").innerHTML = pokenata;
        
        let pokedef = data.stats[2].stat.name;
        console.log(pokedef);
        document.getElementById("defensa").innerHTML = pokedef;
        
        let pokendef = data.stats[2].base_stat;
        console.log(pokendef);
        document.getElementById("ndefensa").innerHTML = pokendef;

        let pokesata = data.stats[3].stat.name;
        console.log(pokesata);
        document.getElementById("specialat").innerHTML = pokesata;
        
        let pokensata = data.stats[3].base_stat;
        console.log(pokensata);
        document.getElementById("nspecialat").innerHTML = pokensata;

        let pokesdef = data.stats[4].stat.name;
        console.log(pokesdef);
        document.getElementById("specialde").innerHTML = pokesdef;
        
        let pokensdef = data.stats[4].base_stat;
        console.log(pokensdef);
        document.getElementById("nspecialde").innerHTML = pokensdef;

        let pokevel = data.stats[5].stat.name;
        console.log(pokevel);
        document.getElementById("vel").innerHTML = pokevel;
        
        let pokenvel = data.stats[5].base_stat;
        console.log(pokenvel);
        document.getElementById("nvel").innerHTML = pokenvel;

        let poketa = data.types[0].type.name;
        console.log(poketa);
        document.getElementById("tipoA").innerHTML = poketa;

        let ataqA = data.moves[0].move.name;
        console.log(ataqA);
        document.getElementById("ataA").innerHTML = ataqA;

        let ataqB = data.moves[1].move.name;
        console.log(ataqB);
        document.getElementById("ataB").innerHTML = ataqB;

        let ataqC = data.moves[2].move.name;
        console.log(ataqC);
        document.getElementById("ataC").innerHTML = ataqC;

        let ataqD = data.moves[3].move.name;
        console.log(ataqD);
        document.getElementById("ataD").innerHTML = ataqD;

        var poktb = data.types[1].type.name;
        console.log(poktb);
        document.getElementById("tipoB").innerHTML = poktb;



    })
}

const arteO = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status !="200"){
            console.log(res);
            pokeImage("./pokesad.png")
            document.getElementById("tipoB").innerHTML = "error";
            document.getElementById("elName").innerHTML = "error";
            document.getElementById("numero").innerHTML = "error";
            document.getElementById("hp").innerHTML = "error";
            document.getElementById("nhp").innerHTML = "error";
            document.getElementById("ataque").innerHTML = "error";
            document.getElementById("nataque").innerHTML = "error";
            document.getElementById("defensa").innerHTML = "error";
            document.getElementById("ndefensa").innerHTML = "error";
            document.getElementById("specialat").innerHTML = "error";
            document.getElementById("nspecialat").innerHTML = "error";
            document.getElementById("specialde").innerHTML = "error";
            document.getElementById("nspecialde").innerHTML = "error";
            document.getElementById("vel").innerHTML = "error";
            document.getElementById("nvel").innerHTML = "error";
            document.getElementById("tipoA").innerHTML = "error";
            document.getElementById("ataA").innerHTML = "error";
            document.getElementById("ataB").innerHTML = "error";
            document.getElementById("ataC").innerHTML = "error";
            document.getElementById("ataD").innerHTML = "error";
            document.getElementById("texto").innerHTML = "error";


        }
        else{
            return res.json();
        }
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.other.home.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg)

        let gegege = "";

        document.getElementById("tipoB").innerHTML = gegege;
        document.getElementById("ataD").innerHTML = gegege;
        document.getElementById("ataC").innerHTML = gegege;
        document.getElementById("ataB").innerHTML = gegege;

        let ataa = "Ataque";

        document.getElementById("texto").innerHTML = ataa;        

        let nombrePKM = data.species.name;
        console.log(nombrePKM);
        document.getElementById("elName").innerHTML = nombrePKM;
        
        let pokeNumber = data.id;
        console.log(pokeNumber);
        document.getElementById("numero").innerHTML = pokeNumber;
        
        let pokehp = data.stats[0].stat.name;
        console.log(pokehp);
        document.getElementById("hp").innerHTML = pokehp;
        
        let pokenhp = data.stats[0].base_stat;
        console.log(pokenhp);
        document.getElementById("nhp").innerHTML = pokenhp;

        let pokeata = data.stats[1].stat.name;
        console.log(pokeata);
        document.getElementById("ataque").innerHTML = pokeata;
        
        let pokenata = data.stats[1].base_stat;
        console.log(pokenata);
        document.getElementById("nataque").innerHTML = pokenata;
        
        let pokedef = data.stats[2].stat.name;
        console.log(pokedef);
        document.getElementById("defensa").innerHTML = pokedef;
        
        let pokendef = data.stats[2].base_stat;
        console.log(pokendef);
        document.getElementById("ndefensa").innerHTML = pokendef;

        let pokesata = data.stats[3].stat.name;
        console.log(pokesata);
        document.getElementById("specialat").innerHTML = pokesata;
        
        let pokensata = data.stats[3].base_stat;
        console.log(pokensata);
        document.getElementById("nspecialat").innerHTML = pokensata;

        let pokesdef = data.stats[4].stat.name;
        console.log(pokesdef);
        document.getElementById("specialde").innerHTML = pokesdef;
        
        let pokensdef = data.stats[4].base_stat;
        console.log(pokensdef);
        document.getElementById("nspecialde").innerHTML = pokensdef;

        let pokevel = data.stats[5].stat.name;
        console.log(pokevel);
        document.getElementById("vel").innerHTML = pokevel;
        
        let pokenvel = data.stats[5].base_stat;
        console.log(pokenvel);
        document.getElementById("nvel").innerHTML = pokenvel;

        let poketa = data.types[0].type.name;
        console.log(poketa);
        document.getElementById("tipoA").innerHTML = poketa;

        let ataqA = data.moves[0].move.name;
        console.log(ataqA);
        document.getElementById("ataA").innerHTML = ataqA;

        let ataqB = data.moves[1].move.name;
        console.log(ataqB);
        document.getElementById("ataB").innerHTML = ataqB;

        let ataqC = data.moves[2].move.name;
        console.log(ataqC);
        document.getElementById("ataC").innerHTML = ataqC;

        let ataqD = data.moves[3].move.name;
        console.log(ataqD);
        document.getElementById("ataD").innerHTML = ataqD;

        var poktb = data.types[1].type.name;
        console.log(poktb);
        document.getElementById("tipoB").innerHTML = poktb;



    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

poktb = "";
