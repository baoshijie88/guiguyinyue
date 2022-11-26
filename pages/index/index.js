// index.js



import request from "../../utils/request";

Page({
    data: {
        //轮播图列表
        bannerList: [],
        //推荐列表
        recommendList: [],
        //排行榜列表
        topList: [],
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
        let idx = 0;
        let topArray = [];
        while(idx < 5) {
            let topRes = await request("/top/list", {idx: idx++});
            //将原数据进行处理, 拼接成新的数据项
            let topItem = {name: topRes.playlist.name, tracks: topRes.playlist.tracks.slice(0, 4)};
            topArray.push(topItem);
            this.setData({topList: topArray});
        }

    },
    onMyEvent: function(e){
        console.log(e.detail) // 自定义组件触发事件时提供的 detail 对象
    }



})