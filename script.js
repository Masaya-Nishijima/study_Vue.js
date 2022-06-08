var todo = new Vue({
  el: '#todos',
  data: {
    todos:[
      { text: 'memo 1' },
      { text: 'memo 2' }
    ],
    new_todo: 'new todo'
  },
  methods: {
    destroyTodo: function (todo_index) {
      this.todos.splice(todo_index, 1)
    },
    createTodo: function () {
      this.todos.push({text: this.new_todo})
    }
  }
})
