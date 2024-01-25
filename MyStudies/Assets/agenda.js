// Função para adicionar uma nova tarefa
function addTask() {
  // Obter elementos do DOM
  const datePicker = document.getElementById('datePicker');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  // Obter valores de data e tarefa
  const date = datePicker.value;
  const task = taskInput.value;

  // Verificar se tanto a data quanto a tarefa foram fornecidas
  if (date && task) {
    // Criar um objeto de tarefa com um ID único baseado no timestamp
    const taskObject = {
      id: new Date().getTime(),
      date: date,
      task: task
    };

    // Obter tarefas existentes do armazenamento local ou inicializar um array vazio
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Adicionar a nova tarefa ao array
    existingTasks.push(taskObject);

    // Atualizar o armazenamento local com o array de tarefas atualizado
    localStorage.setItem('tasks', JSON.stringify(existingTasks));

    // Chamar a função para criar um item de tarefa na lista
    createTaskItem(taskObject, taskList);

    // Limpar o campo de entrada de tarefa após adicionar
    taskInput.value = '';
  } else {
    // Exibir alerta se a data ou a tarefa estiverem ausentes
    alert('Por favor, selecione uma data e adicione uma tarefa.');
  }
}

// Função para criar um item de tarefa na lista
function createTaskItem(taskObject, taskList) {
  const listItem = document.createElement('li');
  listItem.classList.add('task-item');
  listItem.setAttribute('data-id', taskObject.id);
  // Criar a estrutura HTML do item de tarefa com botão de exclusão
  listItem.innerHTML = `<strong>${taskObject.date}:</strong> ${taskObject.task} <button class="delete-button" data-id="${taskObject.id}">Excluir</button>`;
  // Adicionar o item de tarefa à lista
  taskList.appendChild(listItem);
}

// Função para carregar as tarefas armazenadas e exibir na lista
function loadTasks() {
  // Obter a lista de tarefas do DOM
  const taskList = document.getElementById('taskList');
  // Limpar a lista antes de recarregar
  taskList.innerHTML = '';

  // Obter as tarefas existentes do armazenamento local ou inicializar um array vazio
  const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Iterar sobre as tarefas e chamar a função para criar itens de tarefa
  existingTasks.forEach(taskObject => {
    createTaskItem(taskObject, taskList);
  });
}

// Função para excluir todas as tarefas
function deleteAllTasks() {
  // Remover todas as tarefas do armazenamento local
  localStorage.removeItem('tasks');
  // Obter a lista de tarefas do DOM e limpar
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
}


function deleteTask(taskId) {
  // Convertendo o taskId para número, pois pode estar vindo como string
  taskId = parseInt(taskId);

  const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Verificando se a tarefa com o taskId existe
  const taskIndex = existingTasks.findIndex(taskObject => taskObject.id === taskId);

  if (taskIndex !== -1) {
    // Removendo a tarefa do array de tarefas
    existingTasks.splice(taskIndex, 1);

    // Atualizando o localStorage com as tarefas atualizadas
    localStorage.setItem('tasks', JSON.stringify(existingTasks));

    // Recarregando a lista após excluir
    loadTasks();
  } else {
    console.error('Tarefa não encontrada para exclusão.');
  }
}


document.getElementById('taskList').addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    const taskId = event.target.getAttribute('data-id');
    console.log('Botão Excluir clicado para a tarefa com ID:', taskId);
    deleteTask(taskId);
  }
});



// Adicionei a função goToMenu
function goToMenu() {
  // Redireciona para o arquivo menu.html
  window.location.href = 'index.html';
}

window.onload = function() {
  loadTasks();
};
