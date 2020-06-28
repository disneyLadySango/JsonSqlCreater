<template>
  <div>
    <el-table
      :data="table.filter(
              data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column
        label="＃"
        type="index"
      />
      <el-table-column
        label="物理名"
        prop="name"
      />
      <el-table-column
        label="論理名"
        prop="jpName"
      />
      <el-table-column
        align="right"
      >
        <template slot="header">
          <el-input
            v-model="search"
            size="mini"
            placeholder="Type to search"
          />
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope)">Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index)">Delete</el-button
          >
          <router-link
            :to="{ name: 'TableDataList', params: { tableName: table[scope.$index].name }}"
          >
            Show
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: [
    'table',
    'edit',
    'delete',
  ],
  data() {
    return {
      search: '',
    };
  },
  methods: {
    handleEdit(index, scope) {
      console.log(scope);
      this.$emit('edit', index);
    },
    handleDelete(index) {
      this.$emit('delete', index);
    },
  },
};
</script>
