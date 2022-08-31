getPageList = (totalPages, page, maxLength) => {
    range = (start, end) => {
        return Array.from(Array(end - start + 1, (_, i) => i + start));
    };

    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
        return range(1, totalPages);
    }
    if (page <= maxLength - sideWidth - 1 - rightWidth) {
        return range(1, maxLength - sideWidth - 1).concat(
            0,
            range(totalPages - sideWidth + 1),
            totalPages
        );
    }

    if (page >= totalPages - sideWidth - 1 - rightWidth) {
        return range(1, sideWidth).concat(
            0,
            range(
                totalPages - sideWidth - 1 - rightWidth - leftWidth,
                totalPages
            )
        );
    }

    return range(1, sideWidth).concat(
        0,
        range(page - leftWidth, page + rightWidth),
        0,
        range(totalPages - sideWidth + 1, totalPages)
    );
};
$(function () {
    var numberOfItems = $(".topic-container .item-topic").length;
    var limitPerPage = 3;
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 7;
    var currentPage;

    function showPage(whichPage) {
        if (whichPage < 1 || whichPage > totalPages) return false;

        currentPage = whichPage;

        $(".topic-container .item-topic")
            .hide()
            .slider(
                (currentPage - 1) * limitPerPage,
                currentPage * limitPerPage
            )
            .show();
        $("pagination li").slice(1, -1).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach((item) => {
            $("<li>")
                .addClass("page-item")
                .addClass(item ? "cur-page" : "dots")
                .toggleClass("active", item === currentPage)
                .append(
                    $("<a>")
                        .addClass("page-link")
                        .attr({
                            href: "javascript:void(0)",
                        })
                        .text(item || "...")
                )
                .insertBefore(".nxt-page");
        });

        $(".pre-page").toggleClass("disable", currentPage === 1);
        $(".nxt-page").toggleClass("disable", currentPage === totalPages);
        return true;
    }
    $("pagination").append(
        $("<li>")
            .addClass("page-item")
            .addClass("pre-page")
            .append(
                $("<a>")
                    .addClass("page-link")
                    .addClass("ti-arrow-circle-left")
                    .attr({ href: "javascript:void(0)" })
                    .text("Prev")
            ),
        $("<li>")
            .addClass("page-item")
            .addClass("nxt-page")
            .append(
                $("<a>")
                    .addClass("page-link")
                    .attr({ href: "javascript:void(0)" })
                    .text("Next")
            )
    );
});
