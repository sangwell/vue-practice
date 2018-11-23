<template>
    <div>
        <h1 class="page-title">Table(with http request)</h1>
        <mu-data-table :columns="columns" :data="list">
            <template slot-scope="scope">
                <td>{{scope.row.name}}</td>
                <td>{{scope.row.age}}</td>
            </template>
        </mu-data-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {title: 'Name', width: 200, name: 'name'},
                    {title: 'Age', width: 126, name: 'age'}
                ],
                list: [
                    {
                        name: 'Frozen Yogurt',
                        age: 159
                    },
                    {
                        name: 'Ice cream sandwich',
                        age: 237
                    }
                ]
            }
        },
        created: function () {
            // `this` 指向 vm 实例
            console.log('created');

        }
    }
</script>

<style scoped>

</style>