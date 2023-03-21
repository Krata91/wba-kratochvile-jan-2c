var uzivatele = [];

function pridatUzivatele() {
	var jmeno = document.getElementById("jmeno").value;
	if (jmeno != "") {
		uzivatele.push(jmeno);
		document.getElementById("jmeno").value = "";
		vykresliSeznam();
	}
}

function vykresliSeznam() {
	var seznam = document.getElementById("seznam");
	seznam.innerHTML = "";
	for (var i = 0; i < uzivatele.length; i++) {
		var polozka = document.createElement("li");
		var jmeno = document.createElement("span");
		jmeno.appendChild(document.createTextNode(uzivatele[i].jmeno));
		polozka.appendChild(jmeno);
		var castka = document.createElement("input");
		castka.type = "number";
		castka.value = uzivatele[i].castka;
		castka.addEventListener("change", function() {
			uzivatele[i].castka = parseInt(this.value);
			vypocitejCelkovouCastku();
		});
		polozka.appendChild(castka);
		seznam.appendChild(polozka);
	}
}


function vypocitejCelkovouCastku() {
	var celkovaCastka = 0;
	for (var i = 0; i < uzivatele.length; i++) {
		celkovaCastka += uzivatele[i].castka;
	}
	document.getElementById("celkova-castka").textContent = celkovaCastka;
}


function inicializuj() {
	vykresliSeznam();
	vypocitejCelkovouCastku();
}


window.onload = inicializuj;