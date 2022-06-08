var todo = new Vue({
  el: '#todos',
  data: {
    todos:[
      { text: 'memo 1', edit: true },
      { text: 'memo 2', edit: false }
    ],
    new_todo: 'new todo'
  },
  methods: {
    destroyTodo: function (todo_index) {
      this.todos.splice(todo_index, 1)
    },
    createTodo: function () {
      this.todos.push({text: this.new_todo, edit: false})
      this.new_todo = 'new todo'
    },
    changeMode: function (todo_index) {
      this.todos[todo_index].edit = !this.todos[todo_index].edit
    }
  }
})
