import "./config"
import config from "./config";
export default  function(url, data={}, method="GET") {
    return new Promise(
        (resolve, reject) =>{
            wx.request({
                url: config.host + url,
                data,
                method,
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success: (res) => {
                    resolve(res.data);
                },
                fail(err) {

                    reject(err);
                }
            });
        }
    );

}