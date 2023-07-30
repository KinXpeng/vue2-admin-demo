<template>
  <div class="head-container clearfix">
    <div class="header-left">
      <showAside :toggle-click="toggleClick" :isCollapse="isCollapse" />
      <breadcrumb />
    </div>

    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 -->
        <div class="btn-fullscreen flex-both-center" @click="handleFullScreen">
          <el-tooltip effect="dark" :content="fullscreen ? $t('header.cancelFullScreen') : $t('header.fullScreen')"
            placement="bottom">
            <iconsvg v-if="!fullscreen" icon="fullscreen" />
            <iconsvg v-else icon="exitscreen" />
            <iconsvg icon="github" />
          </el-tooltip>
        </div>
        <!-- 多语言 -->
        <select-lang></select-lang>
        <!-- 消息中心 -->
        <div class="btn-bell flex-both-center">
          <el-tooltip effect="dark" :content="$t('header.message')" placement="bottom">
            <router-link to="/tabs">
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
          <span class="btn-bell-badge" v-if="message"></span>
        </div>
        <!-- Github -->
        <div class="icon-wrapper flex-both-center" @click="handleRedirectGithub">
          <el-tooltip effect="dark" content="Github" placement="bottom">
            <iconsvg icon="github" />
          </el-tooltip>
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <img src="@/assets/img/avatar.jpg" class="user-avatar">
            <span>{{ username }}</span>
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link class="inlineBlock" to="/home">
              <el-dropdown-item>{{ $t('route.home') }}</el-dropdown-item>
            </router-link>
            <el-dropdown-item>{{ $t('header.setting') }}</el-dropdown-item>
            <el-dropdown-item divided>
              <span style="display:block;" @click="logout">{{ $t('header.logout') }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import showAside from "./showAside";
import selectLang from './selectLang'
import breadcrumb from './Breadcrumb'
import iconsvg from '@/views/icons/iconsvg.vue'
export default {
  // name:'header',
  components: {
    showAside,
    selectLang,
    breadcrumb,
    iconsvg
  },
  data() {
    return {
      fullscreen: false,
      message: 2,
      username: "倾倾倾风"
    };
  },
  computed: {
    isCollapse: {
      get: function () {
        return this.$store.state.isCollapse;
      },
      set: function (newValue) {
        this.$store.commit("IS_COLLAPSE", newValue);
      }
    }
  },
  methods: {
    toggleClick() {
      this.isCollapse = !this.isCollapse;
    },

    // 用户名下拉菜单选择事件
    logout(command) {
      this.$store.commit('TAGES_LIST', [])
      this.$store.commit('SET_BREAD', ['home'])
      this.$router.push("/login");
    },

    // 全屏事件
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },

    // github
    handleRedirectGithub() {
      window.open('https://github.com/KinXpeng/vue2-admin-demo')
    },
  }
}; 
</script>
<style lang="scss" scoped>
.head-container {
  height: 50px;
  line-height: 50px;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 0 3px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  border-bottom: 1px solid #f0f0f0;
}

.header-left {
  float: left;
}

.header-right {
  float: right;
  padding-right: 40px;
}

.header-user-con {
  display: flex;
  height: 50px;
  align-items: center;
}

.btn-fullscreen {
  position: relative;
  cursor: pointer;
  font-size: 24px;
  color: #666;
}

.icon-wrapper {
  padding: 0 12px;
  cursor: pointer;
}

.btn-bell {
  position: relative;
  cursor: pointer;
  font-size: 24px;

  .el-tooltip {
    display: flex;
  }
}

.btn-bell-badge {
  position: absolute;
  right: -2px;
  top: 0;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
}

.btn-bell .el-icon-bell {
  color: #666;
}

.user-name {
  margin-left: 10px;
}

.user-avator {
  margin-left: 20px;
}

.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}

.el-dropdown-menu__item {
  text-align: center;
}

.avatar-container {
  height: 50px;
  display: inline-block;

  // position: absolute;
  // right: 35px;
  .avatar-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 5px;
    position: relative;
    line-height: initial;

    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .el-icon-caret-bottom {
      font-size: 12px;
    }
  }
}
</style>


