let perPage = 6;
let idPage = 1;
let start = 0;
let end = perPage;

const items = [
    {
        id: 1,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/Blog.html'",
    },
    {
        id: 2,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/Contact.html'",
    },
    {
        id: 3,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/Blog.html'",
    },
    {
        id: 4,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "/page/Blog.htm",
    },
    {
        id: 5,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/Blog.html'",
    },
    {
        id: 6,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/Blog.html'",
    },
    {
        id: 7,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/Blog.html'",
    },
    {
        id: 8,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/Blog.html'",
    },
    {
        id: 9,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/Blog.html'",
    },
    {
        id: 10,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/Blog.html'",
    },
    {
        id: 11,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/Blog.html'",
    },
    {
        id: 12,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/Blog.html'",
    },
    {
        id: 13,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/Blog.html'",
    },
    {
        id: 14,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/Blog.html'",
    },
    {
        id: 15,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/Blog.html'",
    },
];

// let itemArr = [];

let totalPages = Math.ceil(items.length / perPage);

function initRender(items, totalPage) {
    renderTopic(items);
    // renderListPage(totalPage);
}

initRender(items, totalPages);

function getCurrentPage(indexPage) {
    start = (indexPage - 1) * perPage;
    end = indexPage * perPage;
    totalPages = Math.ceil(items.length / perPage);
    // countTotalPage.innerHTML = `Total pages: ${totalPages}`;
    // countTotalProduct.innerHTML = `Total Topic:  ${items.length}`;
}

getCurrentPage(1);

function renderTopic(topic) {
    html = "";
    const content = topic.map((item, index) => {
        if (index >= start && index < end) {
            html += '<div class="item-topic">';
            html +=
                "<img  src=" +
                item.image +
                " class = " +
                "'" +
                "image-item" +
                "'" +
                ">";
            html +=
                "<div " +
                "onclick =" +
                "location.href=" +
                item.link +
                " class = " +
                "'" +
                "overlay-item" +
                "'" +
                ">";
            html += '<div class = "title-item">' + item.title + "</div>";
            html += '<p class = "content-item">' + item.content + "</p>";
            html += "</div>";
            html += "</div>";
            console.log("check html:", html);
            console.log("check link :", item.link);
            return html;
        }
    });
    document.getElementById("topic").innerHTML = html;
}

// function renderListPage(totalPages) {
//     let html = "";
//     html += `<li class=" page-item cur-page active"><a>${1}</a></li>`;
//     for (let i = 2; i <= totalPages; i++) {
//         html += `<li class=" page-item cur-page><a>${i}</a></li>`;
//     }
//     if (totalPages === 0) {
//         html = "";
//     }
//     document.getElementById("page-number").innerHTML = html;
// }

function changePage() {
    const idPages = document.querySelectorAll(".number-page li");
    const a = document.querySelectorAll(".number-page li a");
    for (let i = 0; i < idPages.length; i++) {
        idPages[i].onclick = function () {
            let value = i + 1;
            const current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace("active", "");
            this.classList.add("active");
            if (value > 1 && value < idPages.length) {
                $(".btn-prev").removeClass("btn-active");
                $(".btn-next").removeClass("btn-active");
            }
            if (value == 1) {
                $(".btn-prev").addClass("btn-active");
                $(".btn-next").removeClass("btn-active");
            }
            if (value == idPages.length) {
                $(".btn-next").addClass("btn-active");
                $(".btn-prev").removeClass("btn-active");
            }
            idPage = value;
            getCurrentPage(idPage);
            renderProduct(productArr);
        };
    }
}

changePage();

$(".page-item .nxt-page").on("click", () => {
    idPage++;
    if (idPage > totalPages) {
        idPage = totalPages;
    }
    if (idPage == totalPages) {
        $(".nxt-page").addClass("disable");
    } else {
        $(".nxt-page").removeClass("disable");
    }
    console.log(idPage);
    const btnPre = document.querySelector(".pre-page");
    btnPre.classList.remove("disable");
    $(".page-number li").removeClass("active");
    $(`.page-number li:eq(${idPage - 1})`).addClass("active");
    getCurrentPage(idPage);
    renderProduct(productArr);
});

$(".pre-page").on("click", () => {
    idPage--;
    if (idPage <= 0) {
        idPage = 1;
    }
    if (idPage == 1) {
        $(".pre-page").addClass("active");
    } else {
        $(".pre-page").removeClass("active");
    }
    const btnNext = document.querySelector(".nxt-page");
    btnNext.classList.remove("disable");
    $(".page-number li").removeClass("active");
    $(`.page-number li:eq(${idPage - 1})`).addClass("active");
    getCurrentPage(idPage);
    renderProduct(productArr);
});
