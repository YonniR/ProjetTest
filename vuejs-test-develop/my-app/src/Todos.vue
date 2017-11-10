<template>
    <div id="list">
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <h2>{{ todo.title }}</h2>
                <div id="hide">
                    <button @click.prevent="updateRequest(todo.id)" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-pencil"></span>
                    </button>
                    <button @click.prevent="destroy(todo.id)" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-remove"></span>
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import store from './todoStore'

export default {
    props: ['todos'],
    methods: {
        destroy (id) {
            store.destroy(id)
        },
        updateRequest (id) {
            this.$emit('updateRequest', id)
        }
    }
}
</script>

<style>
    #list ul {
    list-style: none;
    text-align: center;
    list-style-position: inside;
    margin: 0 auto;
    padding: 0;
    width: 30%;
    box-shadow: 0px 0px 5px grey;
}

#list ul li {
    color: rgb(116, 116, 116);
    background-color: #f7f7f7;
    margin: 0 auto 0 auto;
    border: 1px solid #e8e8e8;
}

#list ul li h2 {
    margin: 0;
    padding-top: 0.3em;
    font-size: 24px;
    font-weight: 100;
}

#list ul li #hide {
    opacity: 0;
    margin: 0;
    padding-bottom: 0.3em;
}

#list ul li:hover #hide {
    opacity: 1;
}
</style>
