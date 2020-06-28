<template>
  <div id="app">
    <h1>JSON - SQL Mapping And Create Tool</h1>
    <p>このツールはJSONとSQLをマッピング・そしてデータを作成するツールです</p>
    <p>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/tables">Go to Tables</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
