<template>
    <div id="app">
        <div class="left">
            <ul>
                <li>
                    <router-link to="/home">Home</router-link>
                </li>
                <li>
                    <router-link to="/table">Table</router-link>
                </li>
                <li>
                    <router-link to="/setting">Setting</router-link>
                </li>
            </ul>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue';
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import MuseUI from 'muse-ui';
    import 'muse-ui/dist/muse-ui.css';
    import {
        Alert,
        AppBar,
        AutoComplete,
        Avatar,
        Badge,
        BottomNav,
        BottomSheet,
        Breadcrumbs,
        Button,
        Card,
        Checkbox,
        Chip,
        DateInput,
        DataTable,
        Dialog,
        Divider,
        Drawer,
        ExpansionPanel,
        Form,
        Grid,
        GridList,
        Helpers,
        Icon,
        List,
        LoadMore,
        Menu,
        Pagination,
        Paper,
        Picker,
        Popover,
        Progress,
        Radio,
        Select,
        SlidePicker,
        Slider,
        Snackbar,
        Stepper,
        SubHeader,
        Switch,
        Tabs,
        TextField,
        Tooltip
    } from 'muse-ui';
    Vue.use(Alert);
    Vue.use(AppBar);
    Vue.use(AutoComplete);
    Vue.use(Avatar);
    Vue.use(Badge);
    Vue.use(BottomNav);
    Vue.use(BottomSheet);
    Vue.use(Breadcrumbs);
    Vue.use(Button);
    Vue.use(Card);
    Vue.use(Checkbox);
    Vue.use(Chip);
    Vue.use(DateInput);
    Vue.use(DataTable);
    Vue.use(Dialog);
    Vue.use(Divider);
    Vue.use(Drawer);
    Vue.use(ExpansionPanel);
    Vue.use(Form);
    Vue.use(Grid);
    Vue.use(GridList);
    Vue.use(Helpers);
    Vue.use(Icon);
    Vue.use(List);
    Vue.use(LoadMore);
    Vue.use(Menu);
    Vue.use(Pagination);
    Vue.use(Paper);
    Vue.use(Picker);
    Vue.use(Popover);
    Vue.use(Progress);
    Vue.use(Radio);
    Vue.use(Select);
    Vue.use(SlidePicker);
    Vue.use(Slider);
    Vue.use(Snackbar);
    Vue.use(Stepper);
    Vue.use(SubHeader);
    Vue.use(Switch);
    Vue.use(Tabs);
    Vue.use(TextField);
    Vue.use(Tooltip);

    Vue.use(VueRouter);
    Vue.use(MuseUI);

    export default {
        name: 'app',
        data: () => {
            return {
                message: 'Hello Vue.js!'
            }
        },
        /*components: {
            HelloWorld
        }*/
    }
</script>

<style>
    body {
        padding: 0;
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .left {
        height: 100vh;
        width: 200px;
        float: left;
        border-right: 1px solid #ccc;
        overflow-y: auto;
    }

    .left ul {
        margin: 0;
        padding: 20px;
    }

    .left ul li {
        list-style: none;
        padding: 10px;
    }

    .right {
        height: 100vh;
        width: calc(100% - 201px);
        float: left;
        overflow-y: auto;
    }

    /*public css*/
    .page-title {
        padding: 15px;
        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid #ccc;
    }

    .page-body {
        padding: 10px;
    }
</style>
