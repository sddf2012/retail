<template>

  <el-container style="height: 100%; border: 1px solid #eee">
    <el-header style="height: 40px;text-align: right">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>

    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>

export default {
  name: 'home'
}
</script>
