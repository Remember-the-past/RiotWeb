<template>
    <div class="container">
        <br/>
        <div class="box">
            <div class="profile-bar">
                <div class="header-wrapper">
                    <div
                        class="icon-wrapper"
                        :style="{ background: `conic-gradient(rgb(97, 152, 253), rgb(97, 152, 253) ${ratio}%, rgb(219, 219, 219) ${ratio}%) ` }"
                    >
                        <img class="header" src="./assets/icon.jpg"/>
                    </div>
                    <div class="score">331</div>
                </div>
                <div class="summoner-info">
                    <div class="tag is-light is-size-7"><b>2024赛季</b></div>
                    <div class="is-size-4">
                        <b>哈哈哈</b>
                        <span>&nbsp;</span>
                        <span class="has-text-grey">#12345</span>
                    </div>
                    <div>
                        <span>当前生涯状态</span>
                        <span>&nbsp;</span>
                        <span
                            class="tag has-text-white"
                            :class="{
                                'is-warning': isPublic,
                                'is-danger': !isPublic
                            }"
                        >
                            公开
                        </span>
                    </div>
                    <div class="tag is-size-6">
                        <font-awesome-icon icon="user-secret"/>
                        <span>&nbsp;</span>
                        联盟二区
                    </div>
                    <div class="has-text-grey is-size-7">上次在线时间2个月前</div>
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
                            :class="{ key: item.key}"
                        >
                            {{ item.key }}
                        </div>
                    </div>
                </div>
                <div class="sporting-info">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, reactive} from "vue"

let ratio = ref(60)
let isPublic = ref(true)
const Win = {
    success: 'success',
    failed: 'failed',
    none: 'none'
}

let vsdatatypeList = reactive([
    {
        key: "时间"
    },{
        key: "类型"
    }
])


let sportingList = reactive([
    {
        active: true,
        name: "Heloworld",
        win: Win.success
    },
    {
        name: "kitty",
        win: Win.success
    },
    {
        name: "Tom jack",
        win: Win.success
    },
    {
        name: "VMatrix",
        win: Win.failed
    },
    {
        name: "bbbbbb",
        win: Win.none
    },
    {
        name: "aaaaaaa",
        win: Win.none
    },
    {
        name: "6666666",
        win: Win.success
    }
])

function handleClickSportingItem(item) {
    sportingList.forEach(item => (item.active = false))
    item.active = true
}
</script>

<style lang="scss" scoped>
$border-color: rgb(218, 218, 218);

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
                height: 100px;
                width: 100px;
                color: #0b0b0b;
            }

            .sporting-header-title {
                display: flex;
                align-items: center;
                height: 16px;
                width: 53px;
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

            .vsdata-type{
                display: flex;
                height: 45px;
                width: 110px;
                background: linear-gradient(to right, rgba(213, 74, 74, .5) 35%, #FFF);
            }
        }
    }
}
</style>
