// // dependency library
// const axios = require('axios');

// // feature modules
// const DAL = require("./DAL");
// const { ERROR_CODES } = require("./error");
// const AppError = require("../../../lib/errorClasses/appError");
// const service = require('./../services/proxyIp')


// const getStory = async (headers, userId) => {

//   let endCursors = '';
//   let res;
//   let response = await service.getProxyIP();
//   console.log('proxy response : ', response.status);
//   if (response.status === 200) {

//     const proxy = response.data.data.proxies[0].split(':');
//     const instance = axios.create({
//       httpsAgent: new HttpsProxyAgent({ host: proxy[0], port: proxy[1] })
//     })

//     let config = {
//       method: 'get',
//       url: `https://www.instagram.com/graphql/query/?query_hash=90709b530ea0969f002c86a89b4f2b8d&variables={"reel_ids":["${userId}"],"tag_names":[],"location_ids":[],"highlight_reel_ids":[],"precomposed_overlay":true,"show_story_viewer_list":true,"story_viewer_fetch_count":50,"story_viewer_cursor":"","stories_video_dash_manifest":false}`,
//       headers: headers
//     };

//     try {
//       res = await instance(config);
//     }
//     catch (e) {
//       throw new AppError(ERROR_CODES.ERROR_FROM_INSTA_STORY_SERVER);
//     }

//     console.log("story completion scraping Done! ", userId, res.data, res.data.data.reels_media[0].items.length);
//     return res.data.data.reels_media[0].items;

//   } else {
//     throw new AppError(ERROR_CODES.ERROR_FROM_PROXY_SERVER);
//   }

// }


// module.exports = {
//   getStory
// };
