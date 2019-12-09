<template>
  <div class="course-list">
    <div class="main">
      <!-- <div class="text">课程列表</div> -->
      <appnav @component="send"></appnav>
      <h1 class="text">课程列表</h1>
      <div class="line"></div>
      <ul class="main-page">
        <li
          class="container"
          v-for="(item,index) in videoItems"
          :key="index"
          @click="selectTutorial(item)"
        >
          <div class="video-container">
            <div class="cover-left">
              <img :src="item.F_cover_uri" />
            </div>
            <div class="cover-right">
              <h2 class="title">{{item.F_title}}</h2>

              <p class="introduce">课程简介：{{item.F_introduction}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";

import { mapState } from "vuex";
import HelpCenter from "../services/models/api-config";
import { setTokenAndTeacherId } from "@/services/http/axios";
import appnav from "@/views/nav";

export default {
  components: {
    appnav
  },
  data() {
    return {
      navs: [
        {
          F_type: 1,
          F_name: "教师端"
        },
        {
          F_type: 2,
          F_name: "家长端"
        },
        {
          F_type: 3,
          F_name: "学生端"
        },
        {
          F_type: 4,
          F_name: "教务端"
        },
        {
          F_type: 5,
          F_name: "常见问题及解决"
        }
      ],
      videoItems: [
        {
          F_item_id: 134515526242,
          F_type: 1,
          F_cover_uri:
            "https://contres.readboy.com/video_resource/msfdb/cover/ec/4f/74/ec4f74de0fa6f06a049437d2b3fc9862.jpg",
          F_title:
            "如何上课如何上课如何上课如何上课如何上课如何上课如何上课如何上课如何上课如何上课如何上课如何上课如何上课如何上课如何上课如何上课",
          F_introduction:
            "如何上课的教程本组视频为读书郎智慧课堂如何上课的教程本组视频为读书郎智慧课堂如何上课的教程本组视频为读书郎智慧课堂如何上课的教程本组视频为读书郎智慧课堂如何上课的教程,如何上课的教程本组视频为读书郎智慧课堂如何上课的教程本组视频为读书郎智慧课堂如何上课的教程本组视频为读书郎智慧课堂如何上课的教程本组视频为读书郎智慧课堂如何上课的教程如何上课的教程本组视频为读书郎智慧课堂如何上课的教程本组视频为读书郎智慧课堂如何上课的教程本组视频为读书郎智慧课堂如何上课的教程本组视频为读书郎智慧课堂如何上课的教程"
        },
        {
          F_item_id: 232423131513,
          F_type: 2,
          F_cover_uri:
            "http://ebag-qn.strongwind.cn/ebag/support/32581942233492.png",
          F_title: "如何使用",
          F_introduction: "本组视频为家长如何使用读书郎智慧课堂的教程"
        },
        {
          F_item_id: 232423131513,
          F_type: 2,
          F_cover_uri:
            "http://ebag-qn.strongwind.cn/ebag/support/32581942233492.png",
          F_title: "如何使用2",
          F_introduction: "本组视频为家长如何使用读书郎智慧课堂的教程"
        },
        {
          F_item_id: 232423131513,
          F_type: 2,
          F_cover_uri:
            "http://ebag-qn.strongwind.cn/ebag/support/32581942233492.png",
          F_title: "如何使用3",
          F_introduction: "本组视频为家长如何使用读书郎智慧课堂的教程"
        },
        {
          F_item_id: 232423131513,
          F_type: 2,
          F_cover_uri:
            "http://ebag-qn.strongwind.cn/ebag/support/32581942233492.png",
          F_title: "如何使用4",
          F_introduction: "本组视频为家长如何使用读书郎智慧课堂的教程"
        },
        {
          F_item_id: 232423131513,
          F_type: 2,
          F_cover_uri:
            "http://ebag-qn.strongwind.cn/ebag/support/32581942233492.png",
          F_title: "如何使用5",
          F_introduction: "本组视频为家长如何使用读书郎智慧课堂的教程"
        }
      ]
    };
  },
  computed: {
    active() {
      return this.$store.state.active;
    }
  },
  methods: {
    send(comp) {
      this.$emit("component", comp);
    }
    //     selectType(item) {
    //       if (item.F_type === 5) {
    //         this.$emit("component", "question");
    //         this.$store.commit("changactive", { active: 1 });
    //         return;
    //       }
    //       if (item.F_type !== 1) {
    //         this.$emit("component", "detail");
    //       }
    //       this.$store.commit("changactive", { active: item.F_type });
    //     }
  },
  created() {
    // const videoItem = await HelpCenter.getVideoItem({ F_type: this.active });
    // console.log(videoItem);
    // this.videoItems = videoItem.F_data;
  }
};
</script>

<style lang="less" scoped>
.course-list {
  height: calc(100% - 0.72rem);
  background-color: #fff;
  height: 100%;
}
.main {
  height: 100%;
  margin: 0 0.3rem;
  .nav {
    // height: 0.5rem;
    .nav-item {
      font: 0.2rem/0.68rem "Microsoft YaHei";
      margin-right: 0.22rem;

      color: #595959;
      cursor: pointer;
    }
    .nav-item:hover {
      color: #009cff;
    }
    .blue-text {
      color: #009cff;
    }
  }
  .text {
    margin: 0.12rem auto 0.2rem 0;
    // margin: 0 auto 0.2rem 0;
    display: inline-block;
    font-size: 0.2rem;
    font-family: "Microsoft YaHei";
    width: 0.8rem;
  }
  .line {
    display: inline-block;
    align-items: center;
    position: relative;
    top: -0.05rem;
    margin-left: 0.1rem;
    height: 1px;
    background-color: rgb(196, 196, 196);
    // width: calc(100% - 1.4rem);
    width: calc(100% - 0.9rem);
  }
  .main-page {
    height: calc(100vh - 2.04rem);
    // height: calc(100vh - 1.92rem);
    overflow: auto;
    // margin: 0 0.26rem;
    .container {
      height: 2.05rem;
      // background-color: antiquewhite;
      background-color: #f7f9fa;
      margin-bottom: 0.2rem;
      // padding: 0.2rem;
      padding: 0.2rem 0.26rem;
      border-radius: 0.12rem;
      cursor: pointer;
      .video-container {
        display: flex;
        // background-color: rgb(240, 203, 159);
        height: 100%;
        .cover-left {
          background-color: #d9d9d9;
          height: 100%;
          width: 3.64rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .cover-right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          // background-color: rgb(230, 230, 230);
          width: calc(100% - 3.64rem);
          height: 100%;

          .title {
            margin-left: 0.48rem;
            font-size: 0.24rem;
            font-weight: bold;
            // margin-bottom: 0.36rem;
            margin-bottom: 0.28rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .introduce {
            display: -webkit-box;
            margin-left: 0.48rem;
            left: 0;
            bottom: 0px;
            font-size: 0.22rem;
            line-height: 0.3rem;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
}
</style>