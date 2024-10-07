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

const QUESTIONS = [
  {
    question:
      'Qual a principal diferença entre viewport e janela do navegador?',
    options: [
      'Não há diferença, são sinônimos',
      'Viewport se refere à área visível da página, enquanto a janela é toda a área do navegador',
      'Viewport é específico para dispositivos móveis',
      'Viewport é um conceito relacionado ao zoom',
    ],
    answer: 1,
    explanation:
      'A viewport define a área inicial da página que é renderizada, enquanto a janela pode ser maior.',
  },
  {
    question: 'O que é um breakpoint em design responsivo?',
    options: [
      'Ponto de interrupção do código',
      'Ponto em que o layout muda para se adaptar a um novo tamanho de tela',
      'Ponto em que o site para de funcionar',
      'Ponto de início do design responsivo',
    ],
    answer: 1,
    explanation:
      'Breakpoints definem os pontos de transição entre diferentes layouts.',
  },
  {
    question:
      'Qual a importância da hierarquia visual em um design responsivo?',
    options: [
      'Torna o design mais bonito',
      'Ajuda o usuário a entender a importância de cada elemento',
      'É um requisito para o Google',
      'Não tem importância',
    ],
    answer: 1,
    explanation:
      'A hierarquia visual guia o olhar do usuário e facilita a compreensão da página.',
  },
  {
    question:
      'O que é teste A/B e como ele pode ser utilizado em design responsivo?',
    options: [
      'Comparar diferentes versões de um site',
      'Testar a velocidade de carregamento',
      'Verificar a compatibilidade com navegadores',
      'Todas as anteriores',
    ],
    answer: 0,
    explanation:
      'Testes A/B permitem comparar diferentes versões de um layout para identificar o que funciona melhor.',
  },
  {
    question:
      'Qual a principal vantagem de utilizar um framework CSS para design responsivo?',
    options: [
      'Mais código',
      'Menor tempo de desenvolvimento',
      'Design mais limitado',
      'Não há vantagens',
    ],
    answer: 1,
    explanation:
      'Frameworks CSS oferecem componentes pré-construídos e funcionalidades que agilizam o desenvolvimento.',
  },
  {
    question:
      'O que é acessibilidade e por que ela é importante em design responsivo?',
    options: [
      'Facilitar o uso por pessoas com deficiência',
      'Aumentar o número de visitantes',
      'Melhorar o SEO',
      'Todas as anteriores',
    ],
    answer: 3,
    explanation:
      'A acessibilidade garante que todos os usuários possam acessar e utilizar o site, independentemente de suas habilidades.',
  },
  {
    question: 'Qual a importância do conteúdo em um design responsivo?',
    options: [
      'O design se adapta sozinho',
      'O conteúdo deve ser adaptado para cada dispositivo',
      'O conteúdo não importa',
      'Só a imagem é importante',
    ],
    answer: 1,
    explanation:
      'O conteúdo deve ser claro, conciso e organizado para facilitar a leitura em diferentes tamanhos de tela.',
  },
  {
    question:
      'O que é lazy loading de imagens e como ele pode melhorar a performance de um site responsivo?',
    options: [
      'Carregar todas as imagens de uma vez',
      'Carregar as imagens apenas quando o usuário rolar até elas',
      'Não carregar imagens',
      'Redimensionar todas as imagens',
    ],
    answer: 1,
    explanation:
      'Lazy loading reduz o tempo de carregamento inicial da página.',
  },
  {
    question:
      'Qual a diferença entre Progressive Web Apps (PWAs) e sites responsivos?',
    options: [
      'PWAs não são responsivos',
      'PWAs oferecem funcionalidades offline e podem ser instaladas como um aplicativo',
      'Sites responsivos são mais rápidos',
      'Não há diferença',
    ],
    answer: 1,
    explanation:
      'PWAs oferecem uma experiência mais próxima de um aplicativo nativo, além de serem responsivos.',
  },
  {
    question:
      'Qual a importância de monitorar o desempenho de um site responsivo?',
    options: [
      'Para saber se o site está bonito',
      'Para identificar problemas e otimizar a performance',
      'Para ver quantas pessoas estão acessando',
      'Não é importante',
    ],
    answer: 1,
    explanation:
      'Monitorar o desempenho permite identificar gargalos e melhorar a experiência do usuário.',
  },
];

export { EMPLOYEE_TASKS, ITEMS, QUESTIONS };
