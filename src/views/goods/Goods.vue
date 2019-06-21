<template>
  <div>
    <el-row type="flex" justify="center">
    <el-col :span="4">
  <el-tree :data="categoryData" :props="treeProps" @node-click="handleNodeClick"></el-tree>
    </el-col>
    <el-col :span="10">
      <el-table
        :data="tableData"
        border
        style="width: 100%" fix>
        <el-table-column
          prop="picture"
          label=""
          width="100">
        </el-table-column>
        <el-table-column
          prop="itemName"
          label=""
          width="120">
        </el-table-column>
        <el-table-column
          prop="type"
          label="单价"
          width="100">
        </el-table-column>
        <el-table-column
          prop="selected"
          label="库存"
          width="110">
        </el-table-column>
        <el-table-column
          label=""
          width="100">
          <template slot-scope="scope">
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    </el-row>
  </div>
</template>

<script>
import { getCategoryByParentId } from '@/api/goods/goodsCategory-api'
export default {
  name: 'Home',
  data () {
    return {
      categoryData: [],
      treeProps: {
        children: 'children',
        label: 'categoryName',
        isLeaf: 'isLeaf'
      },
      tableData: []
    }
  },
  methods: {
    handleNodeClick (node) {
      this.selectGoodsByCaId(node.categoryId)
    },
    selectGoodsByCaId (caId) {

    }
  },
  created () {
    getCategoryByParentId(0).then(resp => { this.categoryData = resp })
  }
}
</script>

<style scoped>

</style>
