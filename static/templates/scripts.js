function showmenu() {
	if (document.getElementById("menurow").style.display == "block") {
		document.getElementById("menurow").style.display = "none";
		document.getElementById("navbars").style.display = "block";
		document.getElementById("xsymbol").style.display = "none";
	} else {
		document.getElementById("menurow").style.display = "block";
		document.getElementById("navbars").style.display = "none";
		document.getElementById("xsymbol").style.display = "block";
	}
}

function changesubtitle(enter) {
	if (enter) {
		document.getElementById("welcomesubtitle").innerHTML = "Enter&raquo;";
		document.getElementById("welcomesubtitle").style.textTransform = "uppercase";
		document.getElementById("welcomesubtitle").style.letterSpacing = "1vw";
	}
	else {
		document.getElementById("welcomesubtitle").innerHTML = "Student. Engineer. Musician.";
		document.getElementById("welcomesubtitle").style.textTransform = "none";
		document.getElementById("welcomesubtitle").style.letterSpacing = "0.5vw";
	}
}