<template>
    <div>
        <h1 class="page-title">Home Page</h1>
        <div class="page-body">
            <mu-container>

                <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
                    <mu-form-item class="input-layout" prop="input" label="Name">
                        <mu-text-field v-model="form.name"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item class="input-layout" prop="input" label="Age">
                        <mu-text-field v-model="form.age"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item>
                        <mu-button color="primary" v-on:click="add">Add</mu-button>
                    </mu-form-item>


                    <mu-data-table :columns="columns" :data="list">
                        <template slot-scope="scope">
                            <td>{{scope.row.name}}</td>
                            <td>{{scope.row.age}}</td>
                        </template>
                    </mu-data-table>


                </mu-form>
            </mu-container>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                labelPosition: 'right',
                form: {
                    name: '',
                    age: '',
                },
                sort: {
                    name: '',
                    order: 'asc'
                },
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
        methods: {
            add() {
                if (this.form.name && this.form.age) {
                    this.list.push({name: this.form.name, age: this.form.age});
                    this.form.name = '';
                    this.form.age = '';
                }
            }
        }
    }
</script>

<style scoped>
    .input-layout {
        width: 50%;
    }
</style>
