<template>
  <div>
    <el-table
      :data="data"
      style="width: 100%"
    >
      <el-table-column
        label="＃"
        type="index"
      />
      <el-table-column
        v-for="(value, name) in columns"
        :key="`tabledata_${name}`"
        :prop="value"
        :label="name"
      >
        <template slot-scope="scope">
          <el-input
            v-model="scope.row[name]"
            size="mini"
            placeholder="data input"
          />
        </template>
      </el-table-column>
      <el-table-column
        align="right"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleCopy(scope.$index, 1)"
          >
            Copy1
          </el-button>
          <el-button
            size="mini"
            @click="handleCopy(scope.$index, 10)"
          >
            Copy10
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: [
    'data',
    'columns',
    'copy',
  ],
  methods: {
    handleCopy(index, count) {
      this.$emit('copy', count, this.data[index]);
    },
  },
};
</script>
