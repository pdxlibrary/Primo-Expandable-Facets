jQuery(document).ready(function() {
                
	// make facet sections collapsable
	$(".EXLFacetContainer").addClass("expandable");
	$(".EXLFacetContainer").addClass("closed");
	
	$(".EXLFacetContainer h3").click( function () {
		var container = $(this).parent();
		if(container.hasClass("closed"))
		{
			// expand
			container.removeClass("closed").addClass("open");
			container.children("ol").slideDown("fast");
			container.children(".EXLDateRangeText").slideDown("fast");
		}
		else
		{
			// collapse
			container.removeClass("open").addClass("closed");
			container.children("ol").slideUp("fast");
			container.children(".EXLDateRangeText").slideUp("fast");
		}
	});
	
	$(".EXLFacetContainer h4").click( function () {
		var container = $(this).parent();
		if(container.hasClass("closed"))
		{
			// expand
			container.removeClass("closed").addClass("open");
			container.children("ol").slideDown("fast");
			container.children(".EXLDateRangeText").slideDown("fast");
		}
		else
		{
			// collapse
			container.removeClass("open").addClass("closed");
			container.children("ol").slideUp("fast");
			container.children(".EXLDateRangeText").slideUp("fast");
		}
	});
	
	// initially open show only and resource type facets
	$("#facetListTopLevel > .EXLFacetContainer").removeClass("closed").addClass("open");
	$("#facetListTopLevel > .EXLFacetContainer").children("ol").slideDown("fast");
	$("#exlidFacet0").removeClass("closed").addClass("open");
	$("#exlidFacet0").children("ol").slideDown("fast");
});
