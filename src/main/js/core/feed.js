org_hudsonci.Feed = name_edwards_dean_Base.extend({
	constructor: function(id, name, url, lastFail) {
		this.id = id;
		this.name = name;
		this.url = url;
		this.lastFail = lastFail;
	},
	getId: function() {
		return this.id;
	},
	getName: function() {
		return this.name;
	},
	getUrl: function() {
		return this.url;
	},
	getLastFail: function() {
		return this.lastFail;
	},
	setId: function(id) {
		this.id = id;
	},
	setName: function(name) {
	   this.name = name;
	},
	setUrl: function(url) {
	   this.url = url;
	},
	setLastFail: function(lastFail) {
		this.lastFail = lastFail;
	},
	isJob: function() {
		var isJob = false;
		if (this.url.match('/job/[^/]+') !== null) {
			isJob = true;
		}
		return isJob;
	},
	isView: function() {
		var isView = false;
		if (this.url.match('/view/[^/]+') !== null) {
			isView = true;
		}
		return isView;
	},
	getHostName: function() {
		return String(this.url.match('https?://[^/]+')).replace(/https?:\/\//, '');
	},
	getItemName: function() {
		var itemName = null;
		if (this.isJob()) {
			itemName = String(this.url.match('/job/[^/]+')).replace(/\/job\//, '');
		} else if (this.isView()) {
			itemName = String(this.url.match('/view/[^/]+')).replace(/\/view\//, '');
		}
		return itemName;
	},
	getExecutorUrl: function() {
		return this.url.replace(/\/rss.*/, '').replace(/\/(job|view).*/, '') + '/computer/api/xml?depth=1';
	},
	getDashboardUrl: function() {
		return this.url.match('^.+/');
	},
	getBuildUrl: function() {
		return this.getUrl().match('.*/job/[^/]+') + '/build?delay=0sec';
	},
	isIgnored: function() {
		var isIgnored = true;
		if (this.url !== null && this.url.length > 0) {
			isIgnored = false;
		}
		return isIgnored;
	},
	isEmpty: function() {
		var isEmpty = false;
		if ((this.name === null || this.name.length === 0) && (this.url === null || this.url.length === 0)) {
			isEmpty = true;
		}
		return isEmpty;
	}
});