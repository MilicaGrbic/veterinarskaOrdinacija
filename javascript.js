//kontakt
function myFunction() {
	var poruka, x, y;
	poruka=document.getElementById("p1");
	x=document.getElementById("ime").value;
	y=document.getElementById("prezime").value;
	try{
		if (x=="" || y=="") alert("Popunite sva polja!");	
		else if(!isNaN(x) || !isNaN(y))  alert ("Ime i prezime ne mogu da sadrze broj!");	
	}
	catch(err) {
		poruka.innerHTML="Greska!" + err;
	}
}


function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function kolacic(){
var x=document.getElementById("ime").value;
var z=document.getElementById("prezime").value;
if(x!='' || z!='')
createCookie('ime1',x,365);
createCookie('prezime1',z,365);
var y=readCookie('ime1');
var t=readCookie('prezime1');
return}

function popuni(){
document.getElementById("ime").value=readCookie('ime1');
document.getElementById("prezime").value=readCookie("prezime1");
return}



//pansion
function ljubimac(ime, prezime, vrsta, rasa) //ljubimac je klasa
{
this.ime=ime;
this.prezime=prezime;
this.vrsta=vrsta;
this.rasa=rasa}

function dodajLjubimca()
{

var ime=document.ljubimci.ime.value;
var prezime=document.ljubimci.prezime.value;
var vrsta=document.ljubimci.vrsta.value;
var rasa=document.ljubimci.rasa.value;

var lj1 = new ljubimac(ime, prezime, vrsta, rasa);

document.getElementById("im").innerHTML=ime;
document.getElementById("prez").innerHTML=prezime;
document.getElementById("vrs").innerHTML=vrsta;
document.getElementById("ras").innerHTML=rasa;

return false}



//galerija
var j=1;
var slike=new Array(12)
for(i=1;i<=12;i++)
slike[i]="slike/slika"+i+".jpg";

function slajder()
{
j++;

if(j>12)
j=1;

document.getElementById("sl").src=slike[j];
}

function slajder2()
{
j--;

if(j<1)
j=12;

document.getElementById("sl").src=slike[j];
}
var playS = true;
var play;
function auto()
{
	if(playS)
	{
		playS = false;
		play = setInterval(slajder, 1200);
		document.getElementById("play").innerHTML = "stop";
	}
	else 
	{		
		playS = true;
		clearInterval(play);
		document.getElementById("play").innerHTML = "play";
	}
}




//preventiva
function vakcinacija(){
	var x = prompt ("Pas, macka ili glodar?", "");
	if (x=="pas" || x== "Pas")
		alert ("Cena vakcinacije za pse iznosi 2000 dinara.");
	else if (x=="macka" || x=="Macka")
		alert ("Cena vakcinacije za macke iznosi 1800 dinara.");
	else if (x=="glodar" || x=="Glodar")
		alert ("Cena vakcinacije za glodare iznosi 1000 dinara.");
	else
		alert ("Greska!");
}

function zastitaS(){
	var x = prompt ("Pas, macka ili glodar?", "");
	if (x=="pas" || x== "Pas")
		alert ("Cena zastite od spoljasnjih parazita za pse iznosi 2000 dinara.");
	else if (x=="macka" || x=="Macka")
		alert ("Cena zastite od spoljasnjih parazita za macke iznosi 1500 dinara.");
	else if (x=="glodar" || x=="Glodar")
		alert ("Cena zastite od spoljasnjih parazita za glodare iznosi 800 dinara.");
	else
		alert ("Greska!");
}

function zastitaU(){
	var x = prompt ("Pas, macka ili glodar?", "");
	if (x=="pas" || x== "pas")
		alert ("Cena zastite od unutrasnjih parazita za pse iznosi 3000 dinara.");
	else if (x=="macka" || x=="Macka")
		alert ("Cena zastite od unutrasnjih parazita za macke iznosi 2000 dinara.");
	else if (x=="glodar" || x=="Glodar")
		alert ("Cena zastite od unutrasnjih parazita za glodare iznosi 1500 dinara.");
	else
		alert ("Greska!");
}

function ster(){
	var x = prompt ("Pas, macka ili glodar?", "");
	if (x=="pas" || x== "pas")
		alert ("Cena zastite od unutrasnjih parazita za pse iznosi 5000 dinara.");
	else if (x=="macka" || x=="Macka")
		alert ("Cena zastite od unutrasnjih parazita za macke iznosi 2500 dinara.");
	else if (x=="glodar" || x=="Glodar")
		alert ("Cena zastite od unutrasnjih parazita za glodare iznosi 2000 dinara.");
	else
		alert ("Greska!");
}

function sistematski(){
	var x = prompt ("Pas, macka ili glodar?", "");
	if (x=="pas" || x== "pas")
		alert ("Cena zastite od unutrasnjih parazita za pse iznosi 2200 dinara.");
	else if (x=="macka" || x=="Macka")
		alert ("Cena zastite od unutrasnjih parazita za macke iznosi 1600 dinara.");
	else if (x=="glodar" || x=="Glodar")
		alert ("Cena zastite od unutrasnjih parazita za glodare iznosi 700 dinara.");
	else
		alert ("Greska!");
}

function veterinari(){
var myObj, i, j, x = "";
myObj = {
  adresa:"Kralja Petra 15",
  grad:"Novi Sad 21000",
  veterinari: [
    {"mesto":"Ambulanta", "ime":["Marko Marković", "Milana Milić", "Petar Petrović"]},
    {"mesto":"Teren", "ime":["Jelena Jelić", "Nikola Nikolić", "Jovan Jovanović"]}
  ]
}
var myJSON = JSON.stringify(myObj)//kreiranje JSON stringa od JS objekta

for (i in myObj.veterinari) {
  x += "<h2 id=h1>" + myObj.veterinari[i].mesto + "</h2>";
  for (j in myObj.veterinari[i].ime) {
    x += myObj.veterinari[i].ime[j] + "<br>";
  }
}

var novi = window.open("","","height=300,width=300");
novi.document.write(x);
return;
}

