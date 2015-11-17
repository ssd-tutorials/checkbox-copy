var systemObject = {
	isEmpty : function(thisValue) {
		"use strict";
		return (thisValue === '' || typeof thisValue === 'undefined') ? true : false;
	},
	checkCopy : function(thisIdentity) {
		"use strict";
		$('form').on('change', thisIdentity, function(e) {
			var thisTarget = $(this).data('target');
			var thisTargets = $('.' + thisTarget);
			if (!systemObject.isEmpty(thisTarget) && thisTargets.length > 0) {
				var thisItem;
				var thisValue;
				var thisItems;
				if ($(this).is(':checked')) {
					$.each(thisTargets, function(k, v) {
						thisItem = $(this).data('field');
						thisItems = thisItem.split(' ');
						thisValue = $(this).val();
						if (thisItems.length > 1) {
							$.each(thisItems, function(ik, iv) {
								if ($('#' + iv).length > 0) {
									$('#' + iv).val(thisValue);
								}
							});
						} else {
							if ($('#' + thisItem).length > 0) {
								$('#' + thisItem).val(thisValue);
							}
						}
					});
				} else {
					$.each(thisTargets, function(k, v) {
						thisItem = $(this).data('field');
						thisItems = thisItem.split(' ');
						if (thisItems.length > 1) {
							$.each(thisItems, function(ik, iv) {
								if ($('#' + iv).length > 0) {
									$('#' + iv).val('');
								}
							});
						} else {
							if ($('#' + thisItem).length > 0) {
								$('#' + thisItem).val('');
							}
						}
					});
				}
			}
		});
	}
};
$(function() {
	systemObject.checkCopy('.checkCopy');
});