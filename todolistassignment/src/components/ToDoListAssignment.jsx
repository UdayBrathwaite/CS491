import React from 'react'

class ToDoList_Assignment extends React.Component {
  constructor() {
    super()
    this.state = { todos: [], input: '' }
  }

  render() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex flex-col items-center p-6" style={{ backgroundColor: "red", height: "800px", width: "600px"}}>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Welcome to Your To-Do List</h3>

        <div className="flex gap-3 mb-6">
          <input 
            value={this.state.input}
            onChange={e => this.setState({ input: e.target.value })}
            placeholder="Click here to add your new task..."
            className="border border-gray-300 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button 
            onClick={() => {
              if (this.state.input.trim()) {
                this.setState({
                  todos: [...this.state.todos, { text: this.state.input, done: false }],
                  input: ''
                })
              }
            }}
            className="bg-blue-500 hover:bg-blue-400 text-black px-4 py-2 rounded-lg transition"
        >
            Add Task
        </button>
        </div>

        
        {this.state.todos.map((todo, i) => (
          <div key={i} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <input 
              type="checkbox" 
              checked={todo.done} 
              onChange={() => {
                const newTodos = [...this.state.todos]
                newTodos[i].done = !newTodos[i].done
                this.setState({todos: newTodos})
              }}
              style={{ marginRight: '10px' }}
            />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button 
              onClick={() => {
                this.setState({todos: this.state.todos.filter((_, idx) => idx !== i)})
              }}
              style={{ marginLeft: '10px', padding: '4px 8px' }}
            >
              Delete Task
            </button>
          </div>
        ))}
      </div>
    )
  }
}

export default ToDoList_Assignment