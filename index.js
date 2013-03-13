ko.bindingHandlers.selectedDataAttribute = {
	init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
		var dataAttribute = ko.utils.unwrapObservable(valueAccessor().bind);
		var viewModelProperty = valueAccessor().to;
		var dataAttributeValue = $(element).find(':selected').attr(dataAttribute);
		viewModel[viewModelProperty](dataAttributeValue);
		
		$(element).change(function() {
			var dataAttribute = ko.utils.unwrapObservable(valueAccessor().bind);
			var viewModelProperty = valueAccessor().to;
			var dataAttributeValue = $(element).find(':selected').attr(dataAttribute);
			viewModel[viewModelProperty](dataAttributeValue);
		});
	},
	update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
		var dataAttribute = ko.utils.unwrapObservable(valueAccessor().bind);
		var viewModelProperty = valueAccessor().to;
		var value = viewModel[viewModelProperty]();
		$("option", element).filter(function(option) { return $(option).attr(dataAttribute) === value; }).prop("selected", "selected");
	}
}

$(function() {
	var viewModel = {
		cityId: ko.observable(1),
		country: ko.observable()
	};
	
	ko.applyBindings(viewModel);
});