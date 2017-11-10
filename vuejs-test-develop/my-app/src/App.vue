<template>
  <div id="container">
    <nav id="header">
      <h1><img src="./assets/images/to-do-list.svg" alt="logo" id="logo">to do list</h1>
    </nav>
    <div id="form">
        <div class="input-group">
          <input type="text" v-model="title" placeholder="Create new To Do..." class="form-control">
          <span class="input-group-btn">
            <button @click.prevent="save" class="btn btn-default" type="button">Save</button>
          </span>
        </div>
    </div>
    <todos :todos="todos" @updateRequest="update"></todos>
</div>
</template>

<script>
import store from './todoStore.js'
import todos from './Todos.vue'

export default {
  name: 'app',
  data () {
    return {
      todos: store.items,
      title: '',
      id: null
    }
  },
  components: {
      'todos': todos
  },
  methods: {
    save () {
      if (this.title !== '') {
        store.save(this.id, this.title)
        this.title = ''
        this.id = null
      }
    },
    update (id) {
      const todo = store.items.find(function (todo) {
        return todo.id === id
      })
      if (todo) {
        this.id = todo.id
        this.title = todo.title
      }
    }
  }
}
</script>

<style>
#header {
    top: 0;
    margin: 0;
    padding: 0.01em 0 1em 0;
    color: black;
    font-variant: small-caps;
}

#logo {
    width: 40px;
}

#container {
    margin: 0;
    top: 0;
    left: 0;
    min-height: 100%;
}

#container #header h1 {
    font-size: 500%;
    font-weight: 100;
}

#form {
    margin: auto;
    width: 25%;
    padding: 1em;
}
</style>
