import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import TableList from '@/components/ui/template/TableList';
import TableDataList from '@/components/ui/template/TableDataList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/tables',
      name: 'TableList',
      component: TableList,
    },
    {
      path: '/tables/:tableName',
      name: 'TableDataList',
      component: TableDataList,
    },
  ],
});
