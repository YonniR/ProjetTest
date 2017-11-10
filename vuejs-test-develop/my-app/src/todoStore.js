const uuid  = require('uuid/v4');

class todoStore {
    constructor () {
        this.items = [
            { id: uuid(), title: 'Todo 1' },
            { id: uuid(), title: 'Todo 2' },
            { id: uuid(), title: 'Todo 3' }
        ]
    }

    searchItem (id) {
        return this.items.find(function (todo) {
            return todo.id === id
        })
    }

    save (id, title) {
        const item = this.searchItem(id)
        if (item) {
            item.title = title
        }
        else {
            this.items.push({
                id: uuid(),
                title: title
            })
        }
    }

    destroy (id) {
        const todo = this.searchItem(id)
        if (!todo) {
            console.error('Item not found', id)
            return
        }
        else {
            const index = this.items.indexOf(todo)
            this.items.splice(index, 1)
        }
    }
}

export default new todoStore ()