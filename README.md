# Projeto de Busca por Perfis no GitHub

Este projeto é uma aplicação web desenvolvida em React que oferece a funcionalidade de busca por perfis no GitHub. A aplicação é estruturada com rotas para páginas de login, registro e dashboard, com estilos globais para manter uma experiência de usuário consistente.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **`/src`**: Contém todos os arquivos relacionados ao código-fonte.
  - **`/styles`**: Inclui arquivos CSS para redefinição de estilos e estilos globais.
  - **`/routes`**: Contém configurações e componentes relacionados às rotas da aplicação.
  - **`/pages`**: Páginas da aplicação, como Login, Registro e Dashboard.
  - **`/components`**: Componentes reutilizáveis, como Techs.
  - **`App.js`**: Arquivo principal que integra as rotas e estilos globais para renderizar a aplicação.

## Componentes

### `RoutesMain`

O componente de rotas que gerencia as diferentes páginas da aplicação usando o pacote `react-router-dom`. Inclui rotas públicas e protegidas.

### `ProtectedRoutes` e `PublicRoutes`

Componentes que definem as rotas protegidas (requerem autenticação) e públicas (acessíveis sem autenticação), respectivamente.

### Páginas

- **`Login`**: Página de login.
- **`Register`**: Página de registro.
- **`Dashboard`**: Página principal após a autenticação.

### `Techs`

Um componente reutilizável que pode exibir tecnologias específicas do projeto.

## Estilos

Os estilos globais estão divididos em dois arquivos:

- **`ResetStyled.css`**: Reseta os estilos padrão do navegador para garantir uma aparência consistente.

- **`GlobalStyled.css`**: Fornece estilos globais compartilhados por vários componentes.

## Funcionalidades

A principal funcionalidade deste aplicativo é a busca por perfis no GitHub. As páginas de login e registro são acessíveis publicamente, enquanto a página de dashboard é protegida e requer autenticação.

## Executando o Projeto

1. Certifique-se de ter o Node.js instalado.

2. Execute `npm install` para instalar as dependências.

3. Execute `npm start` para iniciar o servidor de desenvolvimento.

4. Abra [http://localhost:3000](http://localhost:3000) no navegador para acessar a aplicação.

## Personalização

Sinta-se à vontade para personalizar e expandir este projeto de acordo com suas necessidades específicas. Adicione funcionalidades de busca no GitHub, melhore a interface do usuário ou integre um sistema de autenticação mais robusto. Este projeto fornece uma base sólida para o desenvolvimento de uma aplicação de busca de perfis no GitHub mais avançada e personalizada.
