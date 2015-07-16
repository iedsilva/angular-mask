app.directive('masked', function () {
	return {
		restrict: 'A',
		link: function (scope, elem, attr, ctrl) {
			if (attr.mask) elem.mask(attr.mask, { 
				placeholder: attr.maskPlaceholder 
			});
		}
	};
});