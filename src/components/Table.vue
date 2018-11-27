<template>
    <div>
        <h1 class="page-title">Table(with http request)</h1>
        <mu-button color="primary" v-on:click="getData">获取数据</mu-button>
        <mu-data-table :columns="columns" :data="list">
            <template slot-scope="scope">
                <td>
                    <div class="image-layout"><img :src="scope.row.src" alt=""></div>
                </td>
                <td>{{scope.row.src}}</td>
                <td>{{scope.row.sizes}}</td>
            </template>
        </mu-data-table>
    </div>
</template>

<script>
    const axios = require('axios');
    export default {
        data() {
            return {
                columns: [
                    {title: 'Image', width: 200, name: 'image'},
                    {title: 'Name', width: 200, name: 'name'},
                    {title: 'Age', width: 126, name: 'age'}
                ],
                list: []
            }
        },
        created: function () {
            this.getData();
        },
        methods: {
            getData() {
                this.list = [];
                axios.get('https://b-gold-cdn.xitu.io/favicons/v2/manifest.json')
                    .then(response => {
                        this.list = response.data.icons;
                    })
            }
        }
    }
</script>

<style scoped>
    .image-layout {
        width: 100px;
    }

    .image-layout img {
        width: 100%;
    }
</style>