<template>
  <div>
    <el-button
      size="mini"
      type="danger"
      @click="clickNewTable()"
    >
      New Table
    </el-button>
    <el-button
      size="mini"
      type="danger"
      @click="clickSaveJson()"
    >
      Save Json
    </el-button>
    <p>※保存したJSONファイルは/src/assets/sql/list.jsonで保存してください※</p>
    <table-dialog
      :editForm="editForm"
      :dialogVisible="isShowModal"
      @close="clickCloseModal"
      @save="clickSaveButton"
    />
    <table-list-table
      :table="tableList"
      @edit="clickNewTable"
      @delete="clickDeleteTable"
    />
  </div>
</template>

<script>

import TableListTable from '@/components/ui/parts/table/TableListTable';
import TableDialog from '@/components/ui/parts/TableDialog';
import json from '@/assets/sql/list.json';
import FileUtils from '@/FileUtils';

export default {
  data() {
    return {
      tableList: [],
      isShowModal: false,
      editForm: null,
      editIndex: -1,
    };
  },
  components: {
    TableListTable,
    TableDialog,
  },
  created() {
    // JSONを読み込む
    this.tableList = json || [];
  },
  methods: {
    clickNewTable(index) {
      this.isShowModal = true;
      if (!isNaN(index)) {
        const form = Object.assign({}, this.tableList[index]);
        this.editForm = form;
        this.editIndex = index;
      } else {
        this.editForm = null;
        this.editIndex = -1;
      }
    },
    clickCloseModal() {
      this.isShowModal = false;
      this.editForm = null;
    },
    clickSaveButton(table) {
      if (this.editIndex !== -1) {
        this.tableList.splice(this.editIndex, 1, table);
      } else {
        this.tableList.push(table);
      }
      this.clickCloseModal();
    },
    clickDeleteTable(index) {
      this.tableList.splice(index, 1);
    },
    clickSaveJson() {
      FileUtils.CreateJson('list.json', this.tableList);
    },
  },
};

</script>
