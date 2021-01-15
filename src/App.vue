<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
html,
body {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
}

.containers {
    background: #fff;
    padding:30px 5%;
    z-index: 1;
}
</style>
