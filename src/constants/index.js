const ITEMS = [
  { id: 1, name: 'MacBook Pro 14"', price: 1999.99, quantity: 1 },
  { id: 2, name: 'iPad Air', price: 599.99, quantity: 2 },
  { id: 3, name: 'Samsung Galaxy S21', price: 799.99, quantity: 1 },
  { id: 4, name: 'Dell XPS 13', price: 1249.99, quantity: 1 },
  { id: 5, name: 'Microsoft Surface Pro 7', price: 899.99, quantity: 1 },
  { id: 6, name: 'iPhone 13 Pro Max', price: 1099.99, quantity: 1 },
  { id: 7, name: 'Google Pixel 6', price: 649.99, quantity: 2 },
  { id: 8, name: 'Lenovo ThinkPad X1 Carbon', price: 1499.99, quantity: 1 },
  { id: 9, name: 'ASUS ROG Zephyrus G14', price: 1449.99, quantity: 1 },
  { id: 10, name: 'Samsung Galaxy Tab S7', price: 649.99, quantity: 3 },
];

const EMPLOYEE_TASKS = [
  {
    id: 1,
    name: 'Adrian Monk',
    birthDate: '1959-10-17',
    department: 'Investigação',
    position: 'Detetive Consultor',
    tasks: [
      {
        taskId: 101,
        taskName: 'Investigar caso do desaparecimento',
        completed: false,
      },
      { taskId: 102, taskName: 'Organizar escritório', completed: true },
      { taskId: 103, taskName: 'Relatório semanal', completed: false },
    ],
  },
  {
    id: 2,
    name: 'Sharona Fleming',
    birthDate: '1970-03-25',
    department: 'Assistência',
    position: 'Assistente',
    tasks: [
      {
        taskId: 201,
        taskName: 'Acompanhar Monk na investigação',
        completed: true,
      },
      { taskId: 202, taskName: 'Agendar reuniões', completed: false },
      {
        taskId: 203,
        taskName: 'Resolver questões administrativas',
        completed: false,
      },
    ],
  },
  {
    id: 3,
    name: 'Leland Stottlemeyer',
    birthDate: '1953-06-09',
    department: 'Polícia',
    position: 'Capitão',
    tasks: [
      { taskId: 301, taskName: 'Supervisionar detetives', completed: true },
      { taskId: 302, taskName: 'Revisar casos arquivados', completed: false },
      { taskId: 303, taskName: 'Reunião com o prefeito', completed: true },
    ],
  },
];

export { EMPLOYEE_TASKS, ITEMS };
