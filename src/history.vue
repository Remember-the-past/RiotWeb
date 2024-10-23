<template>
    <div class="container">
        <br/>
        <div class="box profile">
            <div class="profile-bar">
                <div class="header-wrapper">
                    <div
                        class="icon-wrapper"
                        :style="{ background: `conic-gradient(rgb(97, 152, 253), rgb(97, 152, 253) ${summonerData.ratio}%, rgb(219, 219, 219) ${summonerData.ratio}%) ` }"
                    >
                        <img class="header" :src="summonerData.icon" />
                    </div>
                    <div class="score">{{ summonerData.level }}</div>
                </div>
                <div class="summoner-info">
                    <div class="tag is-light is-size-7"><b>{{ summonerData.currentYear }}赛季</b></div>
                    <div class="is-size-4">
                        <b>{{ summonerData.internalName }}</b>
                        <span>&nbsp;</span>
                        <span class="has-text-grey">#{{ summonerData.tagline }}</span>
                    </div>
                    <div>
                        <span>当前生涯状态</span>
                        <span>&nbsp;</span>
                        <span
                            class="tag has-text-white"
                            :class="{
                                'is-warning': summonerData.isPublic,
                                'is-danger': !summonerData.isPublic
                            }"
                        >
                            {{ summonerData.puborpri }}
                        </span>
                    </div>
                    <div class="tag is-size-6">
                        <font-awesome-icon icon="user-secret"/>
                        <span>&nbsp;</span>
                        {{ summonerData.env }}
                    </div>
                    <div class="has-text-grey is-size-7">上次游戏时间 {{ summonerData.lastgametime }}</div>
                </div>
            </div>
        </div>

        <div class="box sporting-wrapper">
            <div class="sporting">
                <div class="sporting-header">
                    <div class="sporting-header-title">
                        <font-awesome-icon :icon="['fas', 'filter']"/>
                        <span>&nbsp;</span>
                        筛选
                        <div class="sporting-header-title-filter">
                            <img class="xxxxxxxxx" src="./assets/icon.jpg" height="100" width="100"/>
                        </div>
                    </div>
                </div>
                <div class="sporting-list">
                    <div
                        class="sporting-item"
                        v-for="(item, idx) in sportingList"
                        :class="{ active: item.active,
                    'success': item.win === Win.success,
                    'failed': item.win === Win.failed,
                    'none': item.win === Win.none,
                    }"
                        @click="handleClickSportingItem(item)"
                    >
                        <img class="list-header" src="./assets/icon.jpg" height="50" width="50"/>
                        {{ item.name }}
                    </div>
                </div>
                <div class="sporting-footer"></div>
            </div>
            <div class="sporting-detail">
                <div class="sporting-title">
                    <div class="vsdata-type">
                        <div
                            class="vsdata-type-item"
                            v-for="(item) in vsdatatypeList"
                            :class="{ key: item.key,value: item.value}"
                        >
                            <div class="vsdata-type-title">{{ item.key }}</div>
                            <div class="vsdata-type-desc">{{ item.value }}</div>
                        </div>
                    </div>
                </div>
                <div class="sporting-info">
                    <div
                        v-for="info in sportingInfoList"
                        :class="{
                            'sporting-info-Win':info.type==1,
                            'sporting-info-Fail':info.type==0
                        }">
                        <div class="sporting-info-item">
                            <div class="team-data-hd">
                                xxxx xxxx xxxx xxxx xxxx
                            </div>
                            <div class="team-data-bd"
                                 v-for="(item) in termData"
                                 :class="{aaa : item.aaa,bbb : item.bbb,ccc : item.ccc,ddd : item.ddd}"
                            >
                                {{ item.aaa }} {{ item.bbb }} {{ item.ccc }} {{ item.ddd }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, reactive, onMounted} from "vue"
import axios from "axios"
import {useRoute} from "vue-router";
const route = useRoute();
const tagline = route.query.tagline;
const environment = route.query.environment;
const puuid = route.query.puuid;
let summonerData = ref({
    accountId: '',
    expPoints: '',
    expToNextLevel: '',
    id:'',
    internalName: '',
    isPublic: true,
    lastGameDate: '',
    level: '',
    levelAndXpVersion: '',
    name: '',
    nameChangeFlag: false,
    privacy: '',
    profileIconId: '',
    puborpri: '隐藏',
    puuid: '',
    revisionDate: '',
    revisionId: '',
    unnamed: '',
    ratio: '0',
    icon: '',
    currentYear: 0,
    lastgametime: '',
    tagline: '',
    env: ''
})

let gameInfoList = ref({})
// let puborpri = ref('')
// let ratio = ref(60.000000001)
// let isPublic = ref(true)
const Win = {
    success: 'success',
    failed: 'failed',
    none: 'none'
}

const sportingInfoList = ref([
    {
        type: 1
    }, {
        type: 0
    }
])

let termData = reactive([
    {
        aaa: "aaa",
        bbb: "bbb",
        ccc: "ccc",
        ddd: "ddd"
    }, {
        aaa: "aaa",
        bbb: "bbb",
        ccc: "ccc",
        ddd: "ddd"
    }, {
        aaa: "aaa",
        bbb: "bbb",
        ccc: "ccc",
        ddd: "ddd"
    }, {
        aaa: "aaa",
        bbb: "bbb",
        ccc: "ccc",
        ddd: "ddd"
    }, {
        aaa: "aaa",
        bbb: "bbb",
        ccc: "ccc",
        ddd: "ddd"
    }
])

let vsdatatypeList = reactive([
    {
        key: "时间",
        value: "11-11 11:11"
    }, {
        key: "类型",
        value: "这是一个类型"
    }, {
        key: "比赛时长",
        value: "111分钟"
    }, {
        key: "击杀",
        value: "111/111"
    }
])


let sportingList = reactive([
    {
        active: true,
        name: "Heloworld",
        win: Win.none,
        icon: '',
        describe: '重开'
    }
    // },
    // {
    //     name: "kitty",
    //     win: Win.none,
    //     icon: '',
    //     describe: '重开'
    // },
    // {
    //     name: "Tom jack",
    //     win: Win.none,
    //     icon: '',
    //     describe: '重开'
    // },
    // {
    //     name: "VMatrix",
    //     win: Win.none,
    //     icon: '',
    //     describe: '重开'
    // },
    // {
    //     name: "bbbbbb",
    //     win: Win.none,
    //     icon: '',
    //     describe: '重开'
    // },
    // {
    //     name: "aaaaaaa",
    //     win: Win.none,
    //     icon: '',
    //     describe: '重开'
    // },
    // {
    //     name: "6666666",
    //     win: Win.none,
    //     icon: '',
    //     describe: '重开'
    // }
])

function handleClickSportingItem(item) {
    sportingList.forEach(item => (item.active = false))
    item.active = true
}

function gameName(path, puuid) {
    const params = {
        body: JSON.stringify({"puuids":[puuid]})
    };
    axios.post(path, params).then((res) => {
        summonerData.value.name = res.data[0].alias.game_name
        summonerData.value.internalName = res.data[0].alias.game_name
    })
}

function gameHistory(path, environment, puuid) {
    const params = {
        environment: environment,
        puuid: puuid
    };
    axios.get(path, {params}).then((res) => {
        res.data.games.forEach((item,index) => {
            if(index === 0){
                // console.log(item);
            }
        })
    });
}

function summonerName(path, environment, puuid) {
    const params = {
        environment: environment,
        body: JSON.stringify([puuid])
    };
    axios.post(path, params).then((res) => {
        summonerData.value = res.data[0];
        summonerData.value.isPublic = summonerData.value.privacy !== "PRIVATE";
        if(summonerData.value.isPublic)
        {
            summonerData.value.puborpri = "公开"
        }else{
            summonerData.value.puborpri = "隐藏"
        }
        summonerData.value.ratio = summonerData.value.expPoints / summonerData.value.expToNextLevel * 100
        summonerData.value.icon = "https://wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/usericon/"+summonerData.value.profileIconId+".png"
        summonerData.value.currentYear = new Date().getFullYear()
        const lastOnlineDate = new Date(summonerData.value.lastGameDate);
        const now = new Date();
        const diffTime = now - lastOnlineDate; // 毫秒差

        const diffMinutes = Math.floor(diffTime / (1000 * 60)); // 转换为分钟
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60)); // 转换为小时
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // 转换为天
        const diffMonths = Math.floor(diffDays / 30); // 转换为月份
        const diffYears = Math.floor(diffMonths / 12); // 转换为年份

        if (diffYears >= 1) {
            summonerData.value.lastgametime = `${diffYears} 年前`;
        } else if (diffMonths >= 1) {
            summonerData.value.lastgametime = `${diffMonths} 个月前`;
        } else if (diffDays >= 7) {
            summonerData.value.lastgametime = `${Math.floor(diffDays / 7)} 周前`;
        } else if (diffDays >= 3) {
            summonerData.value.lastgametime = `${diffDays} 天前`;
        } else if (diffDays >= 1) {
            summonerData.value.lastgametime = `1 天前`;
        } else if (diffHours >= 1) {
            summonerData.value.lastgametime = `${diffHours} 小时前`;
        } else if (diffMinutes >= 1) {
            summonerData.value.lastgametime = `${diffMinutes} 分钟前`;
        } else {
            summonerData.value.lastgametime = `刚刚`;
        }
        summonerData.value.tagline = tagline
        if (environment === "HN1") {
            summonerData.value.env = "艾欧尼亚";
        } else if (environment === "HN10") {
            summonerData.value.env = "黑色玫瑰";
        } else if (environment === "TJ100") {
            summonerData.value.env = "联盟四区";
        } else if (environment === "TJ101") {
            summonerData.value.env = "联盟五区";
        } else if (environment === "NJ100") {
            summonerData.value.env = "联盟一区";
        } else if (environment === "GZ100") {
            summonerData.value.env = "联盟二区";
        } else if (environment === "CQ100") {
            summonerData.value.env = "联盟三区";
        }
    }).catch((error)=>{
        console.log(error);
    })
}

//单身壹族丶你武哥#81742
onMounted(async ()=>{
    await summonerName('/api/summersByPuuids', environment, puuid);
    await gameHistory('/api/gameHistory', environment, puuid);
    await gameName('/api/namesByPuuid',puuid);
})

</script>

<style lang="scss" scoped>
$border-color: rgb(218, 218, 218);

.profile {

    display: flex;
    //height: 180px;
    .profile-bar {
        display: flex;
        padding-left: 30px;

        .header-wrapper {
            width: 100px;
            padding-top: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .icon-wrapper {
                height: 100px;
                border-radius: 99px;
                background: conic-gradient(rgb(97, 152, 253), rgb(97, 152, 253) 30%, rgb(219, 219, 219) 30%);
                padding: 5px;

                .header {
                    width: 100%;
                    height: 100%;
                    border-radius: 99px;
                }
            }

            .score {
                font-size: 13px;
                margin-top: 5px;
                padding: 2px 10px;
                color: white;
                font-weight: bold;
                background-color: rgba(0, 0, 0, 0.767);
                border-radius: 8px;
            }
        }

        .summoner-info {
            margin-left: 30px;
            display: flex;
            flex-direction: column;
            align-items: self-start;
            justify-content: space-between;
        }
    }
}


.sporting-wrapper {
    display: flex;

    .sporting {
        flex-direction: column;

        .sporting-header {
            height: 35px;
            width: 200px;
            display: flex;
            justify-content: flex-end;

            .sporting-header-title:hover {
                .sporting-header-title-filter {
                    display: inline-block;
                }
            }

            .sporting-header-title {
                display: flex;
                align-items: center;
                height: 16px;
                width: 53px;

                .sporting-header-title-filter {
                    display: none;
                    height: 100px;
                    width: 100px;
                    position: absolute;
                    top: 300px;
                    z-index: 1;
                }
            }
        }

        .sporting-list {
            .sporting-item {
                padding: 5px;
                width: 200px;
                border-radius: 5px;
                background-color: white;


                &:not(.active):hover {
                    &.success {
                        background: linear-gradient(to right, rgba(64, 181, 197, .5) 35%, #fff);
                    }

                    &.failed {
                        background: linear-gradient(to right, rgba(213, 74, 74, .5) 35%, #FFF);
                    }

                    &.none {
                        background: linear-gradient(to right, rgb(201, 201, 201) 35%, #FFF);
                    }

                    cursor: pointer;
                }

                &.active {
                    position: relative;
                    border: 1px solid $border-color;
                    border-right: none;
                    border-radius: 5px 0 0 5px;
                    //background: linear-gradient(to right, rgba(213, 74, 74, .5), #FFF);
                    //background: linear-gradient(to right, rgba(64, 181, 197, .5), #fff);

                    &.success {
                        background: linear-gradient(to right, rgba(64, 181, 197, .5) 35%, #fff);
                    }

                    &.failed {
                        background: linear-gradient(to right, rgba(213, 74, 74, .5) 35%, #FFF);
                    }

                    &.none {
                        background: linear-gradient(to right, rgb(201, 201, 201) 35%, #FFF);
                    }

                    .list-header {
                        width: 50px;
                        height: 50px;
                    }

                    &::after {
                        position: absolute;
                        content: "";
                        background-color: white;
                        width: 11px;
                        border-left: none;
                        border-right: none;
                        top: -0.9px;
                        bottom: -1px;
                        right: -11px;
                        border: 1px solid $border-color;
                        border-left: none;
                        border-right: none;
                    }
                }

                &:not(:last-child) {
                    margin-bottom: 10px;
                }
            }
        }

        .sporting-footer {
            height: 50px;
            width: 200px;
        }
    }

    .sporting-detail {
        // z-index: 2;
        margin-left: 10px;
        flex: auto;
        border: 1px solid $border-color;
        border-radius: 0 5px 5px 0;

        .sporting-title {
            display: flex;
            height: 70px;

            .vsdata-type {
                display: flex;

                .vsdata-type-item {
                    height: 45px;
                    width: 110px;
                    background: linear-gradient(to right, rgba(213, 74, 74, .5) 35%, #FFF);
                }

            }
        }

        .sporting-info {
            display: flex;
            //height: 565px;
            flex-direction: column;

            .sporting-info-base{
                .sporting-info-item{
                    flex-direction: column;
                    .team-data-hd{
                        display: flex;
                    }
                    .team-data-bd{
                        display: flex;
                    }
                }
            }



            .sporting-info-Win{
                display: flex;
                @extend .sporting-info-base;
                background: linear-gradient(to right, rgba(42, 80, 207, 0.5) 35%, #FFF);
            }

            .sporting-info-Fail{
                display: flex;
                background: linear-gradient(to right, rgba(211, 184, 18, 0.5) 35%, #FFF);
                @extend .sporting-info-base;
            }
        }
    }
}
</style>
