// index.js



import request from "../../utils/request";

Page({
    data: {
        //轮播图列表
        bannerList: [],
        //推荐列表
        recommendList: []
    },
    async onLoad() {
        let res = await request("/banner", {type: 2});
        this.setData({
                bannerList: res.banners
            });
        let rec = await request("/personalized", {limit: 30});
        this.setData({
            recommendList: rec.result
        })
    },
    onMyEvent: function(e){
        console.log(e.detail) // 自定义组件触发事件时提供的 detail 对象
    }



})