const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

	constructor(Direct) {
		this.Direct = (Direct === false);
	}

	encrypt(str, key) {
		if (!str || !key) throw new Error;
		key = key.repeat(Math.ceil(str.length / key.length));
		let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let result = "";
		let keyIndex = 0;
		for (let i = 0; i < str.length; i++) {
			if (/^[a-zA-Z]{1}$/.test(str[i])) {
				result += alphabet.charAt((alphabet.indexOf(str.charAt(i)) + alphabet.indexOf(key.charAt(i - keyIndex))) % alphabet.length);
			}
			else {
				result += str[i];
				keyIndex++;
			};

		}
		result = this.Direct ? [...result].reverse().join('') : result;
		return result.toUpperCase();
	}
	decrypt(str, key) {
		if (!str || !key) throw new Error;
		key = key.repeat(Math.ceil(str.length / key.length));
		let keyIndex = 0;
		let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let result = "";
		for (let i = 0; i < str.length; i++) {
			if (/^[a-zA-Z]{1}$/.test(str[i])) {
				result += alphabet.charAt(((alphabet.indexOf(str.charAt(i)) + alphabet.length) - alphabet.indexOf(key.charAt(i - keyIndex))) % alphabet.length);
			}
			else {
				result += str[i];
				keyIndex++;
			};
		}
		result = this.Direct ? [...result].reverse().join('') : result;
		return result.toUpperCase();
	}
}

module.exports = VigenereCipheringMachine;
