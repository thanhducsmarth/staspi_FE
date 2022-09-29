let perPage;
let idPage = 1;
// mobileMedia.addEventListener()
const items = [
    {
        id: 1,
        image: "../../images/image-footer.png",
        title: "title1",
        content: "content",
        link: "'/page/Blog_items.html'",
    },
    {
        id: 2,
        image: "../../images/image-footer.png",
        title: "title2",
        content: "content",
        link: "'/page/Blog_items.html'",
    },
    {
        id: 3,
        image: "../../images/image-footer.png",
        title: "title3",
        content: "content",
        link: "'/page/Blog_items.html'",
    },
    {
        id: 4,
        image: "../../images/image-footer.png",
        title: "title4",
        content: "content",
        link: "'/page/Blog_items.html'",
    },
    {
        id: 4,
        image: "../../images/image-footer.png",
        title: "title4",
        content: "content",
        link: "'/page/Blog_items.html'",
    },
    {
        id: 5,
        image: "../../images/image-footer.png",
        title: "title5",
        content: "content",
        link: "'/page/Blog_items.html'",
    },
    {
        id: 6,
        image: "../../images/image-footer.png",
        title: "title6",
        content: "content",
        link: "'/page/Blog_items.html'",
    },
    {
        id: 7,
        image: "../../images/image-footer.png",
        title: "title7",
        content: "content",
        link: "'/page/Blog_items.html'",
    },
    {
        id: 8,
        image: "../../images/image-footer.png",
        title: "title8",
        content: "content",
        link: "'/page/Blog_items.html'",
    },
    {
        id: 9,
        image: "../../images/image-footer.png",
        title: "title9",
        content: "content",
        link: "'/page/Blog_items.html'",
    },
];

// let itemArr = [];
var mobileResponsive = () =>{
    if (window.innerWidth < 829){
        perPage = 1;
    }
    else {
        perPage = 3;
    }
    return perPage;
}
mobileResponsive();


let start = 0;
let end = perPage;
let totalPages = Math.ceil(items.length / perPage);

// console.log("check total pages:",totalPages);
var clearPageItem = () => {
    const prePage = document.querySelector('.posts .pagination .pre-page');
    const nxtPage = document.querySelector('.posts .pagination .nxt-page');
    if(totalPages === 0 || totalPages === 1){
        prePage.style.display = 'none';
        nxtPage.style.display = 'none';
     }
}
function initRender(items, totalPage) {
    clearPageItem();
    renderPost(items);
    renderListPage(totalPage);
}


initRender(items, totalPages);

function getCurrentPage(indexPage) {
    start = (indexPage - 1) * perPage;
    end = indexPage * perPage;
    totalPages = Math.ceil(items.length / perPage);
}

getCurrentPage(1);

function renderPost(post) {
    html = "";
    const content = post.map((item, index) => {
        if (index >= start && index < end) {
            html += '<div class="item-post">';
            html += '<a class = onclick-image href = ' + item.link + '>';
            html +=
                "<img  src=" +
                item.image +
                " class = " +
                "'" +
                "image-item" +
                "'" +
                ">";
                html += "</a>";
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
            html += "<a href =" + item.link  + ">";
            html += '<div class = "title-mobile" >' + item.title + "</div>";
            html += "</a>"
            html += '<div class = "content-mobile">' + item.content + "</div>";
            html += "</div>";
            return html;
        }
    });
    document.getElementById("post").innerHTML = html;
}

function renderListPage(totalPages) {
    let html = "";
    html += `<li class=" page-item cur-page active"><a class = "page-link">${1}</a></li>`;
    for (let i = 2; i <= totalPages; i++) {
        html += `<li class=" page-item cur-page"><a class = "page-link">${i}</a></li>`;
    }
    if (totalPages === 0) {
        html = "";
    }
    document.getElementById("page-number").innerHTML = html;
}

function changePage() {
    const idPages = document.querySelectorAll(".page-number li");
    const a = document.querySelectorAll(".page-number li a");
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
            renderPost(items);
        };
    }
}

changePage();

$(".nxt-page").on("click", () => {
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
    renderPost(items);
});

$(".pre-page").on("click", () => {
    idPage--;
    if (idPage <= 0) {
        idPage = 1;
    }
    if (idPage == 1) {
        $(".pre-page").addClass("disable");
    } else {
        $(".pre-page").removeClass("disable");
    }
    const btnNext = document.querySelector(".nxt-page");
    btnNext.classList.remove("disable");
    $(".page-number li").removeClass("active");
    $(`.page-number li:eq(${idPage - 1})`).addClass("active");
    getCurrentPage(idPage);
    renderPost(items);
});
