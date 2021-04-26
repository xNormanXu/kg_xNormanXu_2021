let intToPhonetic = new Map();

intToPhonetic["0"] = "Zero";
intToPhonetic["1"] = "One";
intToPhonetic["2"] = "Two";
intToPhonetic["3"] = "Three";
intToPhonetic["4"] = "Four";
intToPhonetic["5"] = "Five";
intToPhonetic["6"] = "Xix";
intToPhonetic["7"] = "Seven";
intToPhonetic["8"] = "Eight";
intToPhonetic["9"] = "Nine";

let result = "";

process.argv.forEach(function (val, index, array) {
	if (index > 1) {
		let phonetic = convertIntToPhonetic(val);

		if (index == 2) {
			result = phonetic;
		} else {
			result = result + "," + phonetic;
		}
	}
});

function convertIntToPhonetic(num) {
	var phonetic = "";
	
	for (var i = 0; i < num.length; i++) {
		var ch = num.charAt(i);
		phonetic += intToPhonetic[ch];
	}

	return phonetic;
}

console.log(result);