<template>
    <div id="Home" class="rcorners">
        <select v-model="selectedOption" class="custom-select">
            <option value="NJ100">联盟一区</option>
            <option value="GZ100">联盟二区</option>
            <option value="CQ100">联盟三区</option>
            <option value="TJ100">联盟四区</option>
            <option value="TJ101">联盟五区</option>
            <option value="HN1">艾欧尼亚</option>
            <option value="HN10">黑色玫瑰</option>
            <option value="BGP2">峡谷之巅</option>
        </select>
        <input v-model="summonerName" type="text" class="custom-input"
               placeholder="请输入您要查询的召唤师名称（记得加上尾标）"/>
        <div class="oval-button" @click="search">
            <svg width="2em" height="2em" viewBox="0 0 48 48" fill="none">
                <path
                    d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
                    fill="none" stroke="#ffffff" stroke-width="4" stroke-linejoin="round"></path>
                <path d="M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431"
                      stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M33.2216 33.2217L41.7069 41.707" stroke="#ffffff" stroke-width="4" stroke-linecap="round"
                      stroke-linejoin="round"></path>
            </svg>
        </div>
    </div>
</template>

<script setup>

import {ref} from 'vue';
import router from "./router.js";
import axios from "axios";

const selectedOption = ref('HN1'); // 默认选项的值
const summonerName = ref(''); // 输入框的内容

async function GetPuuid(path, gameName, tagline) {
    const params = {
        gameName: gameName,
        tagLine: tagline
    };
    return await axios.get(path, {params});
}

//单身壹族丶你武哥#81742
function search() {
    // console.log("选中的区:", selectedOption.value);
    // console.log("召唤师名称:", summonerName.value);
    if (summonerName.value.includes('#')) {

        const [gameName, tagline] = summonerName.value.split('#').map(part => part.trim())
        console.log("Game Name'", gameName);  // 打印切割后的游戏名称
        console.log("Tagline'", tagline);      // 打印切割后的标签
        if (gameName && tagline) {
            // 调用 GetPuuid 函数，将分割后的值传入
            GetPuuid('/api/puuidByName', gameName, tagline)
                .then((res) => {
                    // 处理返回结果
                    const {puuid} = res.data[0];
                    // console.log(res.data);
                    // 可以在这里进行路由跳转或其他操作

                    router.push({ path: "/about", query: { environment : selectedOption.value,puuid: puuid,tagline: tagline } });
                })
                .catch((error) => {
                    console.error("请求失败:", error);
                });
        } else {
            console.error("召唤师名称和标签不正确");
        }
    } else {
        console.error("召唤师名称格式不正确，应包含 '#'");
    }
}
</script>

<style>
.rcorners {
    border-radius: 30px;
    border: 1px solid #5eb2d1;
    width: 720px;
    height: 60px;
    margin: 200px auto;
    position: relative; /* 为了使用绝对定位 */
    padding: 0; /* 去掉内边距 */
    display: flex;
}

.custom-select {
    border: 1px solid #5eb2d1;
    border-radius: 5px; /* 下拉框圆角 */
    padding: 5px 10px; /* 内边距 */
    width: 140px; /* 设置固定宽度 */
    height: 40px; /* 设置固定高度 */
    font-size: 18px; /* 字体大小 */
    outline: none; /* 去掉默认轮廓 */
    background-color: #fff; /* 背景颜色 */
    position: absolute; /* 绝对定位 */
    left: 25px; /* 距离左侧的距离 */
    top: 10px; /* 距离顶部的距离 */
}

.custom-input {
    border: 0px solid #5eb2d1;
    border-radius: 5px; /* 文本框圆角 */
    height: 48px; /* 设置固定高度 */
    font-size: 18px; /* 字体大小 */
    outline: none; /* 去掉默认轮廓 */
    width: 458px; /* 文本框宽度 */
    margin-left: 170px;
    margin-top: 4px;
}

.oval-button {
    width: 82px; /* 椭圆宽度 */
    height: 56px; /* 椭圆高度 */
    background-color: #583bff; /* 椭圆填充颜色 */
    border-radius: 30px; /* 设置为椭圆 */
    display: flex; /* 使用flex布局 */
    justify-content: center; /* 水平居中对齐 */
    align-items: center; /* 垂直居中对齐 */
    margin-left: 4px;
    margin-top: 2px;
    cursor: pointer;
}
</style>
