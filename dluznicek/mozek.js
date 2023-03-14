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
		polozka.appendChild(document.createTextNode(uzivatele[i]));
		seznam.appendChild(polozka);
	}
}