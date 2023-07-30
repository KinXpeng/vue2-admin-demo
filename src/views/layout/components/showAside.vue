<template>
  <div class="clearfix">
    <div class="showAside pull-left" @click="toggleClick">
      <i v-if="isCollapse" class="el-icon-s-unfold"></i>
      <i v-else class="el-icon-s-fold"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "showAside",
  props: {
    toggleClick: {
      type: Function,
      default: null
    },
    isCollapse: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
.clearfix {
  float: left;
}

.showAside {
  text-align: left;
  margin-left: 10px;
  cursor: pointer;

  i {
    font-size: 20px;
  }
}
</style>

