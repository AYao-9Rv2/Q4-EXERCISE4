	function ViewLsec(){
	var Lsection=document.getElementById('Lsec').value;

	switch (Lsection){
		case "F": 
			document.getElementById('ViewLsec').innerHTML="this is fiction";
			break;
		case "N": 
			document.getElementById('ViewLsec').innerHTML="this is nonfiction";
			break;
		case "R": 
			document.getElementById('ViewLsec').innerHTML="this is a reference";
		default: 
			document.getElementById('ViewLsec').innerHTML="opps! this is invalid, try again"
		}
	}


	function ViewGsec(){
	var Gsection=document.getElementById('Gsec').value;

	switch (Gsection){
		case "1": 
			document.getElementById('ViewGsec').innerHTML="you are from emerald!";
			break;
		case "2": 
			document.getElementById('ViewGsec').innerHTML="you are from ruby!";
			break;
		case "3": 
			document.getElementById('ViewGsec').innerHTML="you are from sapphire!";
			break;
		case "4": 
			document.getElementById('ViewGsec').innerHTML="you are from topaz!";
		default: 
			document.getElementById('ViewGsec').innerHTML="opps! this is invalid, try again"
		}
	}


