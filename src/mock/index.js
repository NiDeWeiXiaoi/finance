const Mock = require('mockjs')

Mock.mock("/new/article", "GET", () => {
    return {
        state: "ok",
        data: {
            title: "新闻",
            content: "新闻内容"
        }
    }
});

// 导航列表
Mock.mock("/nav/list", "GET", () => {
    return {
        state: "ok",
        navList: [
            { title: "大盘行情", src: "/imgs/nav1.png" },
            { title: "股票组合", src: "/imgs/nav2.png" },
            { title: "股票开户", src: "/imgs/nav3.png" },
            { title: "选股攻略", src: "/imgs/nav4.png" },
            { title: "指数选基", src: "/imgs/nav5.png" },
            { title: "基金组合", src: "/imgs/nav6.png" },
            { title: "私募基会", src: "/imgs/nav7.png" },
            { title: "基金必看", src: "/imgs/nav8.png" },
        ],
    }
});