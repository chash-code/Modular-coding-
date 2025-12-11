// displayTodos.js - Exports a function that dynamically displays todos on the page

export function displayTodos(data, containerId = 'todosContainer') {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error(`Container with id "${containerId}" not found`);
        return;
    }

    // Clear existing content
    container.innerHTML = '';

    if (!data || data.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #666;">
                <h3 style="margin-bottom: 1rem;">No todos yet!</h3>
                <p>Add your first todo to get started.</p>
            </div>
        `;
        return;
    }

    // Create todo items
    data.forEach((todo, index) => {
        const todoItem = createTodoElement(todo, index);
        container.appendChild(todoItem);
    });
}

function createTodoElement(todo, index) {
    const div = document.createElement('div');
    div.className = 'todo-item';
    div.dataset.id = index;
    
    const completedClass = todo.completed ? 'completed' : '';
    const completedStyle = todo.completed ? 'text-decoration: line-through; opacity: 0.6;' : '';
    
    div.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem;">
            <input 
                type="checkbox" 
                ${todo.completed ? 'checked' : ''} 
                onchange="toggleTodo(${index})"
                style="width: 20px; height: 20px; cursor: pointer;"
            >
            <div style="flex: 1;">
                <h3 style="margin-bottom: 0.5rem; ${completedStyle}">${todo.title}</h3>
                ${todo.description ? `<p style="color: #666; font-size: 0.9rem; ${completedStyle}">${todo.description}</p>` : ''}
            </div>
            <div style="display: flex; gap: 0.5rem;">
                <button 
                    onclick="editTodo(${index})" 
                    style="padding: 0.5rem 1rem; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;"
                >
                    Edit
                </button>
                <button 
                    onclick="deleteTodo(${index})" 
                    style="padding: 0.5rem 1rem; background: #f44336; color: white; border: none; border-radius: 5px; cursor: pointer;"
                >
                    Delete
                </button>
            </div>
        </div>
    `;
    
    return div;
}

export default displayTodos;
