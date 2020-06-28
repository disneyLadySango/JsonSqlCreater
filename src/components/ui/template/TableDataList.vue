<template>
  <div>
    <h2>テーブルのデータ作成</h2>
    <el-button
      size="mini"
      type="danger"
      @click="initAddData(1)"
    >
      Add Data
    </el-button>
    <el-button
      size="mini"
      type="danger"
      @click="clickSaveJson()"
    >
      Save Json
    </el-button>
    <p>※保存したJSONファイルは/src/assets/sql/list.jsonで保存してください※</p>
    <table-data-table
      :data="data"
      :columns="initCols"
      @copy="copyAddData"
    />
  </div>
</template>

<script>
import TableDataTable from '@/components/ui/parts/table/TableDataTable';
import MasterJson from '@/assets/sql/list.json';

export default {
  data() {
    return {
      table: {},
      initCols: {},
      data: [],
      editForm: null,
      editIndex: -1,
    };
  },
  components: {
    TableDataTable,
  },
  created() {
    const tableName = this.$route.params.tableName;
    const list = MasterJson.filter(value => value.name === tableName);
    this.table = (list.length <= 1) ? list[0] : { name: '', jpName: '', columns: [] };
    this.table.columns.forEach(({ name }) => {
      this.initCols[name] = '';
    });
    // data read
    if (this.data.length === 0) {
      this.data.push(Object.assign({}, this.initCols));
    }
  },
  methods: {
    initAddData(count) {
      this.copyAddData(count, this.initCols);
    },
    copyAddData(count, data) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < count; i++) {
        this.data.push(Object.assign({}, data));
      }
    },
    clickSaveJson() {
      const blob = new Blob([JSON.stringify(this.tableList, '', '  ')], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'list.json';
      link.click();
    },
  },
};
</script>
