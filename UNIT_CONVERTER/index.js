function convert() {
	let from_unit = document.getElementById("from_unit").value;
	let to_unit = document.getElementById("to_unit").value;
	let from_value = parseFloat(document.getElementById("from_value").value);
	let to_value;

	
 //converting from one form to another
	if (from_unit == "kilometers") {
		if (to_unit == "miles") {
			to_value = from_value * 0.621371;
		} else if (to_unit == "meters") {
			to_value = from_value * 1000;
		} else {
			to_value = from_value;
		}
	} else if (from_unit == "miles") {
		if (to_unit == "kilometers") {
			to_value = from_value * 1.60934;
		} else if (to_unit == "meters") {
			to_value = from_value * 1609.34;
		} else {
			to_value = from_value;
		}
	} else {
		if (to_unit == "kilometers") {
			to_value = from_value / 1000;
		} else if (to_unit == "miles") {
			to_value = from_value / 1609.34;
		} else {
			to_value = from_value;
		}
	}

	document.getElementById("to_value").value = to_value.toFixed(2);
}

