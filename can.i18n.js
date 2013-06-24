can.Construct('i18n', {
	defaults: {
			'lang': $('head').attr('lang')
	},

	t: function(lstring) {
		return this.translate(lstring);
	},

	translate: function(lstring, wrapped) {
		if (typeof wrapped === 'undefined') {
			wrapped = true;
		}

		if (typeof this.defaults.lang === 'undefined' || this.defaults.lang === '') {
			throw new Error('A language has not been set and one couldn\'t be found on the markup.');
		}

		if (typeof can.getObject('locale.' + this.defaults.lang) === 'undefined') {
			throw new Error('The specified locale is not defined.');
		}

		_lstring = 'locale.' + this.defaults.lang + '.' + lstring;

		var _l = can.getObject(_lstring);
		_l = (typeof _l === 'undefined') ? 'Translation missing for: ' + _lstring + '.' : _l;

		var $span = $('<span>', {
			text: _l,
			'data-translation-from': lstring
		});

		var _c = $('<div>').append($span);

		if (wrapped === true) {
			return _c.html();
		} else {
			return _l;
		}

	},

	update: function(lang) {
		var self = this;

		if (typeof lang !== 'undefined') {
			this.defaults.lang = lang;
		}

		var $elements = $('[data-translation-from]');
		
		$elements.each(function(i, el) {
			var $el = $(el);
			$el.text(self.translate($el.attr('data-translation-from'), false));
		});
	}
}, {});

can.EJS.Helpers.prototype.i18n = i18n;
can.EJS.Helpers.prototype.t = function(lstring) {
	return i18n.translate(lstring);
};