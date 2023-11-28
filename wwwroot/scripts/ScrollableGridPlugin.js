(function ($) {
    $.fn.Scrollable = function (options) {
        var defaults = {
            ScrollHeight: 0,
            Width: 0
        };
        var options = $.extend(defaults, options);
        return this.each(function () {
            var grid = $(this).get(0);
            var gridWidth = grid.offsetWidth;
            var headerCellWidths = new Array();
            var parentDiv = grid.parentNode;
            var scrollableDiv = document.createElement("div");
            gridWidth = parseInt(gridWidth) + 17;
            scrollableDiv.style.cssText = "overflow:auto;";
            scrollableDiv.appendChild(grid);
            parentDiv.appendChild(scrollableDiv);
        });
    };
})(jQuery);