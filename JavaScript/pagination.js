let perPage = 6;
let idPage = 1;
let start = 0;
let end = perPage;

const items = [
    {
        id: 1,
        image: ".././images/blog/cover-image/content-marketting-anhbia.png",
        title: "CONTENT MARKETING LÀ GÌ? Ý TƯỞNG VIẾT CONTENT MARKETING THU HÚT KHÁCH HÀNG",
        content:
            "Content marketing là gì? Viết content marketing như thế nào để thú hút khách hàng? Cùng Staspi tìm hiểu những thông tin thú vị về content marketing trong bài viết dưới đây nhé!",
        link: "'/page/blogs/content-marketing-la-gi-y-tuong-viet-content-marketing-thu-hut-khach-hang.html'",
    },
    {
        id: 2,
        image: ".././images/blog/cover-image/content-seo-anhbia.png",
        title: "LÀM THẾ NÀO ĐỂ VIẾT CONTENT SEO: HƯỚNG DẪN VIẾT CONTENT CHUẨN SEO VỚI 5 BƯỚC ĐƠN GIẢN",
        content: "Để một bài đăng được lên top tìm kiếm quả thật rất khó, bởi bài viết của bạn phải cạnh tranh với nhiều đối thủ khác trên thị trường. Bên cạnh những thủ thuật thì bài viết chuẩn SEO cũng là một trong những yêu cầu tiên quyết để leo rank trong cuộc đua xếp hạng tìm kiếm. Vậy làm thế nào để viết Content SEO? Trong bài viết này, Staspi sẽ hướng dẫn bạn cách viết content chuẩn SEO chỉ với 5 bước đơn giản có thể áp dụng được ngay.",
        link: "'/page/blogs/lam-the-nao-de-viet-content-seo-huong-dan-viet-content-chuan-seo-voi-5-buoc-don-gian.html'",
    },
    {
        id: 3,
        image: ".././images/blog/cover-image/social-media-anh-bia.jpg",
        title: "TỔNG HỢP KÍCH THƯỚC CHUẨN HÌNH ẢNH TRÊN CÁC KÊNH SOCIAL MEDIA",
        content: "Social Media là nền tảng mang đến nhiều tiềm năng phát triển cho doanh nghiệp. Khi biết cách tối ưu hình ảnh chuẩn trên Social Media sẽ mang đến ấn tượng tốt và sự chuyên nghiệp đến với khách hàng. Và dưới đây là tổng hợp kích thước chuẩn hình ảnh trên các kênh Social Media, bạn nhớ lưu lại và áp dụng nhé!",
        link: "'/page/blogs/tong-hop-kich-thuoc-chuan-hinh-anh-tren-cac-kenh-social-media.html'",
    },
    {
        id: 4,
        image: ".././images/image-footer.png",
        title: "title4",
        content: "content",
        link: "'/page/Blog.html'",
    },
    {
        id: 5,
        image: ".././images/image-footer.png",
        title: "title5",
        content: "content",
        link: "'/page/blog.html'",
    },
    {
        id: 6,
        image: ".././images/image-footer.png",
        title: "title6",
        content: "content",
        link: "'/page/blog.html'",
    },
    {
        id: 7,
        image: ".././images/image-footer.png",
        title: "title7",
        content: "content",
        link: "'/page/blog.html'",
    },
    {
        id: 8,
        image: ".././images/image-footer.png",
        title: "title8",
        content: "content",
        link: "'/page/blog.html'",
    },
    {
        id: 9,
        image: ".././images/image-footer.png",
        title: "title9",
        content: "content",
        link: "'/page/blog.html'",
    },
    {
        id: 10,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/blog.html'",
    },
    {
        id: 11,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/blog.html'",
    },
    {
        id: 12,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/blog.html'",
    },
    {
        id: 13,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/blog.html'",
    },
    {
        id: 14,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/blog.html'",
    },
    {
        id: 15,
        image: ".././images/image-footer.png",
        title: "title",
        content: "content",
        link: "'/page/blog.html'",
    },
];

// let itemArr = [];

let totalPages = Math.ceil(items.length / perPage);

function initRender(items, totalPage) {
    renderTopic(items);
    renderListPage(totalPage);
}

initRender(items, totalPages);

function getCurrentPage(indexPage) {
    start = (indexPage - 1) * perPage;
    end = indexPage * perPage;
    totalPages = Math.ceil(items.length / perPage);
}

getCurrentPage(1);

function renderTopic(topic) {
    html = "";
    const content = topic.map((item, index) => {
        if (index >= start && index < end) {
            html += '<div class="item-topic">';
            html += '<a class = onclick-image href = ' + item.link + '>';
            html +=
                "<img  src=" +
                item.image +
                " class = " +
                "'" +
                "image-item" +
                "'" +
                ">";
            html += "</a>"
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
    document.getElementById("topic").innerHTML = html;
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
            renderTopic(items);
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
    renderTopic(items);
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
    renderTopic(items);
});
