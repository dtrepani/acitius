export default class FormatString {
	static spacesToDashes(str) {
		return str.replace(/ /g, '-').toLowerCase();
	}
	
	static removeSpaces(str) {
		return str.replace(/ /g, '').toLowerCase();
	}
}
