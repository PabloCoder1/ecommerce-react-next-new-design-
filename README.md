## Projeto Next.js com React e TypeScript

Este projeto foi desenvolvido utilizando Next.js, React e TypeScript, proporcionando uma estrutura escalável e otimizada para aplicações modernas.

Tecnologias Utilizadas

-Next.js - Framework para React com renderização no servidor (SSR) e geração estática (SSG)

-React - Biblioteca para construção de interfaces de usuário

-TypeScript - Superset do JavaScript que adiciona tipagem estática

-CSS / Styled Components / TailwindCSS - Para estilização dinâmica e modular (caso aplicável)

-Axios / Fetch API - Para consumo de APIs externas



# URL: https://unistores.vercel.app/



## Estrutura de pastas

`assets`: Serve para armazenar imagens (imagens leves, se forem pesadas sempre prefira hospedar em uma CDN), ícones, etc.

`components`: Componentes reutilizáveis da aplicação. Componentes que são unidades para sua aplicação, um button, um dropdown, um modal, etc.

`hooks`: Essa pasta é utilizada para armazenar hooks que são genéricos, têm interação com hooks do React (useState, useEffect) e normalmente reutilizáveis e qualquer projeto, exemplos: useScreenSize, useLocalStorage, useSessionStorage, useUserActive.

`pages`: As pages são as páginas que usam vários componentes. É essa a página que o usuário vai ver.

`services`: Aqui ficam as configurações de HTTP clientes, normalmente utilizando axios.

`store`: Ficam as definições de state managers, context api, zustand, redux.

`types`: Armazena as tipagens de typescript (types e interfaces) que são comuns em várias áreas do projeto.

`utils`: Funções utilitárias como formatCurrency, formatPhone, convertTimezone, parsePhone (javascript puro).

