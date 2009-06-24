var HudsonFeedParser = Class.extend({
	init: function(xml, size) {
		this.root = new DOMParser().parseFromString(xml, "text/xml");
		this.size = size;
	},
	getElementValue: function(element, elementName) {
		return element.getElementsByTagName(elementName)[0].childNodes[0].nodeValue;
	},
	getAttributeValue: function(element, elementName, attributeName) {
		return element.getElementsByTagName(elementName)[0].attributes.getNamedItem(attributeName).value;
	}
});