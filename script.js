document.getElementById('firstname').addEventListener('keyup', () => {
	
	let firstnameValue = firstname.value.trim();
	
	if(!validate(firstnameValue, 2)) {
		document.getElementById('firstname').style.borderColor = "red";
		document.getElementById('fn-small').innerText = "Firstname is required!";
		document.getElementById('fn-small').style.color = "red";

	} else {
		document.getElementById('firstname').style.borderColor = "green";
        document.getElementById('fn-small').innerText = "";		
    }
});

document.getElementById('lastname').addEventListener('keyup', (e) => {
	e.preventDefault();
	let lastnameValue = lastname.value.trim();
	
	if(!validate(lastnameValue, 2)) {
		document.getElementById('lastname').style.borderColor = "red";
		document.getElementById('ln-small').innerText = "Lastname is required!";
		document.getElementById('ln-small').style.color = "red";
	
	} else {
		document.getElementById('lastname').style.borderColor = "green";
        document.getElementById('ln-small').innerText = "";		
    }
});

document.getElementById('email').addEventListener('keyup', (e) => {
	e.preventDefault();
	let emailValue = email.value.trim();
	
	if(!validate(emailValue ,''))  {
		document.getElementById('email').style.borderColor = "red";
		document.getElementById('e-small').innerText = "Email is required!"; 
		document.getElementById('e-small').style.color = "red";
	
    } else if (!isEmail(emailValue)) {
		document.getElementById('email').style.borderColor = "red";
		document.getElementById('e-small').innerText = "Not a valid email! (email@example.com)";
		document.getElementById('e-small').style.color = "red"; 
	
    } else {
		document.getElementById('email').style.borderColor = "green";
		document.getElementById('e-small').innerText = "";	
    }
});

document.getElementById('phonenumber').addEventListener('keyup', (e) => {
	e.preventDefault();
	let phonenumberValue = phonenumber.value.trim();
	
	if(!validate(phonenumberValue, 10)) {
		document.getElementById('phonenumber').style.borderColor = "red";
		document.getElementById('ph-small').innerText = "Phonenumber is required!"; 
		document.getElementById('ph-small').style.color = "red";
	
    } else if (isNaN(phonenumberValue))  {
		document.getElementById('phonenumber').style.borderColor = "red";
		document.getElementById('ph-small').innerText = "Must contain a min. of 10 digits!";
		document.getElementById('ph-small').style.color = "red"; 
	
    } else {
		document.getElementById('phonenumber').style.borderColor = "green";
		document.getElementById('ph-small').innerText = "";		
    }
});

document.getElementById('streetadress').addEventListener('keyup', (e) => {
	e.preventDefault();
	let streetadressValue = streetadress.value.trim();
	
	if(!validate(streetadressValue, 2))  {
		document.getElementById('streetadress').style.borderColor = "red";
		document.getElementById('a-small').innerText = "Street adress is required!";
		document.getElementById('a-small').style.color = "red";
	
	} else {
		document.getElementById('streetadress').style.borderColor = "green";
		document.getElementById('a-small').innerText = "";	
    }
});

document.getElementById('postalcode').addEventListener('keyup', (e) => {
	e.preventDefault();
	let postalcodeValue = postalcode.value.trim();
	
	if(!validate(postalcodeValue, 5)) {
		document.getElementById('postalcode').style.borderColor = "red";
		document.getElementById('pc-small').innerText = "Postal code is required!";
		document.getElementById('pc-small').style.color = "red";  
	
    } else if (isNaN(postalcodeValue))  {
		document.getElementById('postalcode').style.borderColor = "red";
		document.getElementById('pc-small').innerText = "Postal code is required!"; 
		document.getElementById('pc-small').style.color = "red";
	
    } else {
		document.getElementById('postalcode').style.borderColor = "green";
		document.getElementById('pc-small').innerText = "";	
    }
});

document.getElementById('city').addEventListener('keyup', (e) => {
	e.preventDefault();
	let cityValue = city.value.trim();
	
    if(!validate(cityValue, 2)) {
		document.getElementById('city').style.borderColor = "red";
		document.getElementById('c-small').innerText = "City is required!";
		document.getElementById('c-small').style.color = "red";
	
	} else {
		document.getElementById('city').style.borderColor = "green";
		document.getElementById('c-small').innerText = "";	
	}
	
});



class User {
	constructor(firstname, lastname, email, phonenumber, streetadress, postalcode, city) {
		this.firstname = firstname
		this.lastname = lastname
		this.email = email
		this.phonenumber = phonenumber
		this.streetadress = streetadress
		this.postalcode = postalcode		
		this.city = city
	}
	get id() {
		return this.create_UUID
	}
}	


let users = []
let user = new User;


let inputs = document.querySelectorAll('input');
document.getElementById('button').addEventListener('click', () => {
	saveUser()
	inputs.forEach(input => input.style.removeProperty('border'))
});

// functions
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

function validate(value, min) {
    if(value.length >= min)
    return true
    else
    return false
} 


function saveUser(){


	user = {
		id: create_UUID(),
		firstname: document.getElementById('firstname').value,
		lastname: document.getElementById('lastname').value,
		email: document.getElementById('email').value,
		phonenumber: document.getElementById('phonenumber').value, 
		streetadress: document.getElementById('streetadress').value, 
		postalcode: document.getElementById('postalcode').value, 
		city: document.getElementById('city').value
	};

	users.push(user);
	
	console.log('added', {users});
	createElement();
	fillPanel();

	document.getElementById('button').disabled = true;
	document.getElementById('form').reset();
}

 
function createElement () {
	//create elements
	userDiv = document.createElement('div')
	flipDiv = document.createElement('div')
	panelDiv = document.createElement('div')
	
	//set class and set id to the elements
	flipDiv.className = "flip"
	panelDiv.className = "panel"
	userDiv.id = `${user.id}`
	flipDiv.id = `${user.id}-flip`
	panelDiv.id = `${user.id}-panel`
	
		
	flipDiv.innerText = `${user.firstname}` + ` ${user.lastname}`

	//adding the elements to DOM
	var currentDiv = document.getElementById('users');
	currentDiv.appendChild(userDiv)
	userDiv.appendChild(flipDiv)
	userDiv.appendChild(panelDiv)
}

//Filling the created elements with user info
function fillPanel() {

	idElement = document.createElement("p")
	idElement.innerText = `Id: ${user.id}`
  
	emailElement = document.createElement("p")
	emailElement.innerText = `E-mail: ${user.email}`
	emailElement.id = `${user.id}-email`

	phonenumberElement = document.createElement("p")
	phonenumberElement.innerText = `Phonenumber: ${user.phonenumber}`
	phonenumberElement.id = `${user.id}-phonenumber`

	streetadressElement = document.createElement("p")
	streetadressElement.innerText = `Streetadress: ${user.streetadress}`
	streetadressElement.id = `${user.id}-streetadress`

	postalcodeElement = document.createElement("p")
	postalcodeElement.innerText = `Postalcode: ${user.postalcode}`
	postalcodeElement.id = `${user.id}-postalcode`
	
	cityElement = document.createElement("p")
	cityElement.innerText = `City: ${user.city}`
	cityElement.id = `${user.id}-city`
	  
  
	panelDiv.appendChild(idElement)
	panelDiv.appendChild(emailElement)
	panelDiv.appendChild(phonenumberElement)
	panelDiv.appendChild(streetadressElement)
	panelDiv.appendChild(postalcodeElement)
	panelDiv.appendChild(cityElement)	 
}



//JQuery

	// prevent the browser from executing the default action 
	$("#form").submit(function(e) {
		e.preventDefault();
	});

	//setting jquery toggle
	$("body").delegate(".flip", "click", function(){
		$('.panel').not($(this).next(".panel").slideToggle("slow")).slideUp("slow");
	});

	$('#firstname, #lastname, #email, #phonenumber, #streetadress, #postalcode, #city').bind('keyup', function() {
		if(allFilled()) $('#button').removeAttr('disabled');
		
	});
	
	function allFilled() {
		var filled = true;
		$('body input').each(function() {
			if($(this).val() == '') filled = false;
			else {$('#button').prop("disabled", true)}
		});
		return filled;

	}