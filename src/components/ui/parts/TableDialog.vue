<template>
  <el-dialog
    :title="form.name !== '' ? `${form.name}テーブルを編集` : '新規テーブル作成'"
    :visible.sync="dialogVisible"
    width="600px"
    :before-close="clickClose"
  >
    <el-form :model="form">
      <el-form-item label="テーブル名/（物理名）" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="テーブル名（論理名）" :label-width="formLabelWidth">
        <el-input v-model="form.jpName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="カラム情報"
        :label-width="formLabelWidth"
      >
        <el-button @click="addColumn()">カラム追加</el-button>
        <table>
          <tr>
            <th>#</th>
            <th>物理名</th>
            <th>論理名</th>
            <th>操作</th>
          <tr>
          <tr
            v-for="(column, index) in form.columns"
            :key="index"
          >
          <td><p>{{index + 1}}</p></td>
          <td style="padding:3px">
            <el-input v-model="column.name" autocomplete="off" />
          </td>
          <td style="padding: 3px;">
            <el-input v-model="column.jpName" autocomplete="off" />
          </td>
          <td>
            <el-button
              size="mini"
              :disabled="form.columns.length === 1"
              @click="clickRowDel(index)"
            >
              削除
            </el-button>
          </td>
          </tr>
        </table>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="clickClose()">Cancel</el-button>
      <el-button type="primary" @click="clickClose(true)">Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: [
    'editForm',
    'dialogVisible',
    'close',
    'save',
  ],
  data() {
    return {
      form: {},
      formLabelWidth: '100px',
    };
  },
  mounted() {
    const initForm = {
      name: '',
      jpName: '',
      columns: [
        {
          name: '',
          jpName: '',
        },
      ],
    };
    this.form = this.editForm || initForm;
  },
  methods: {
    clickClose(isSave) {
      if (isSave === true) {
        this.$emit('save', this.form);
      } else {
        this.$emit('close');
      }
      this.form = {
        name: '',
        jpName: '',
        columns: [
          {
            name: '',
            jpName: '',
          },
        ],
      };
    },
    addColumn() {
      const initColumn = { name: '', jpName: '' };
      this.form.columns.push(initColumn);
    },
    clickRowDel(index) {
      this.form.columns.splice(index, 1);
    },
  },
  watch: {
    editForm(newForm) {
      this.form = newForm || this.form;
    },
  },
};
</script>
