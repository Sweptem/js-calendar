var months = [
"january",
"february",
"march",
"april",
"may",
"june",
"july",
"august",
"september",
"october",
"novermber",
"december"
];

document.getElementById("january").innerHTML = months[0];
document.getElementById("february").innerHTML = months[1];
document.getElementById("march").innerHTML = months[2];
document.getElementById("april").innerHTML = months[3];
document.getElementById("may").innerHTML = months[4];
document.getElementById("june").innerHTML = months[5];
document.getElementById("july").innerHTML = months[6];
document.getElementById("august").innerHTML = months[7];
document.getElementById("september").innerHTML = months[8];
document.getElementById("october").innerHTML = months[9];
document.getElementById("november").innerHTML = months[10];
document.getElementById("december").innerHTML = months[11];



function monthButton() {
  var x = document.getElementById("month");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function monthSwitch() {
	if (months === "january"){
		months[0].style.display = "block";
		months[1].style.display = "none";
		months[2].style.display = "none";
		months[3].style.display = "none";
		months[4].style.display = "none";
		months[5].style.display = "none";
		months[6].style.display = "none";
		months[7].style.display = "none";
		months[8].style.display = "none";
		months[9].style.display = "none";
		months[10].style.display = "none";
		months[11].style.display = "none";
	}
	if (months === "february"){
		months[0].style.display = "none";
		months[1].style.display = "block";
		months[2].style.display = "none";
		months[3].style.display = "none";
		months[4].style.display = "none";
		months[5].style.display = "none";
		months[6].style.display = "none";
		months[7].style.display = "none";
		months[8].style.display = "none";
		months[9].style.display = "none";
		months[10].style.display = "none";
		months[11].style.display = "none";
	}
	if (months === "march"){
		months[0].style.display = "none";
		months[1].style.display = "none";
		months[2].style.display = "block";
		months[3].style.display = "none";
		months[4].style.display = "none";
		months[5].style.display = "none";
		months[6].style.display = "none";
		months[7].style.display = "none";
		months[8].style.display = "none";
		months[9].style.display = "none";
		months[10].style.display = "none";
		months[11].style.display = "none";
	}
	if (months === "april"){
		months[0].style.display = "none";
		months[1].style.display = "none";
		months[2].style.display = "none";
		months[3].style.display = "block";
		months[4].style.display = "none";
		months[5].style.display = "none";
		months[6].style.display = "none";
		months[7].style.display = "none";
		months[8].style.display = "none";
		months[9].style.display = "none";
		months[10].style.display = "none";
		months[11].style.display = "none";
	}
	if (months === "may"){
		months[0].style.display = "none";
		months[1].style.display = "none";
		months[2].style.display = "none";
		months[3].style.display = "none";
		months[4].style.display = "block";
		months[5].style.display = "none";
		months[6].style.display = "none";
		months[7].style.display = "none";
		months[8].style.display = "none";
		months[9].style.display = "none";
		months[10].style.display = "none";
		months[11].style.display = "none";
	}
	if (months === "june"){
		months[0].style.display = "none";
		months[1].style.display = "none";
		months[2].style.display = "none";
		months[3].style.display = "none";
		months[4].style.display = "none";
		months[5].style.display = "block";
		months[6].style.display = "none";
		months[7].style.display = "none";
		months[8].style.display = "none";
		months[9].style.display = "none";
		months[10].style.display = "none";
		months[11].style.display = "none";
	}
	if (months === "july"){
		months[0].style.display = "none";
		months[1].style.display = "none";
		months[2].style.display = "none";
		months[3].style.display = "none";
		months[4].style.display = "none";
		months[5].style.display = "none";
		months[6].style.display = "block";
		months[7].style.display = "none";
		months[8].style.display = "none";
		months[9].style.display = "none";
		months[10].style.display = "none";
		months[11].style.display = "none";
	}
	if (months === "august"){
		months[0].style.display = "none";
		months[1].style.display = "none";
		months[2].style.display = "none";
		months[3].style.display = "none";
		months[4].style.display = "none";
		months[5].style.display = "none";
		months[6].style.display = "none";
		months[7].style.display = "block";
		months[8].style.display = "none";
		months[9].style.display = "none";
		months[10].style.display = "none";
		months[11].style.display = "none";
	}
	if (months === "september"){
		months[0].style.display = "none";
		months[1].style.display = "none";
		months[2].style.display = "none";
		months[3].style.display = "none";
		months[4].style.display = "none";
		months[5].style.display = "none";
		months[6].style.display = "none";
		months[7].style.display = "none";
		months[8].style.display = "block";
		months[9].style.display = "none";
		months[10].style.display = "none";
		months[11].style.display = "none";
	}
	if (months === "october"){
		months[0].style.display = "none";
		months[1].style.display = "none";
		months[2].style.display = "none";
		months[3].style.display = "none";
		months[4].style.display = "none";
		months[5].style.display = "none";
		months[6].style.display = "none";
		months[7].style.display = "none";
		months[8].style.display = "none";
		months[9].style.display = "block";
		months[10].style.display = "none";
		months[11].style.display = "none";
	}
	if (months === "november"){
		months[0].style.display = "none";
		months[1].style.display = "none";
		months[2].style.display = "none";
		months[3].style.display = "none";
		months[4].style.display = "none";
		months[5].style.display = "none";
		months[6].style.display = "none";
		months[7].style.display = "none";
		months[8].style.display = "none";
		months[9].style.display = "none";
		months[10].style.display = "block";
		months[11].style.display = "none";
	}
	if (months === "december"){
		months[0].style.display = "none";
		months[1].style.display = "none";
		months[2].style.display = "none";
		months[3].style.display = "none";
		months[4].style.display = "none";
		months[5].style.display = "none";
		months[6].style.display = "none";
		months[7].style.display = "none";
		months[8].style.display = "none";
		months[9].style.display = "none";
		months[10].style.display = "none";
		months[11].style.display = "block";
	}
	else {
		months.style.display = "none";
	}
}