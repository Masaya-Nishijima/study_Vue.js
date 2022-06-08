var todo = new Vue({
  el: '#todos',
  data: {
    todos:[
      { text: 'memo 1' },
      { text: 'memo 2' }
    ]
  },
  methods: {
    destoryTodo: function (todo_index) {
      this.todos.splice(todo_index, 1)
    }
  }
})
