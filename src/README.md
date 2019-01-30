# Tutorial React

## Preparando o ambiente

Instalar uma versão recente do node:

`brew install node || brew upgrade node`

Instalar o create-react-app:

`npm install -g create-react-app`

Dentro do seu diretório de projetos:

`create-react-app react-tutorial`


## Rodando nossa app React

- `cd react-tutorial`
- `yarn start`
- Navegar até localhost:3000
- Ao final do curso, a página deverá parecer com: http://www.vierno.om.br/react-tutorial/


## Links
- Copiar o CSS de https://raw.githubusercontent.com/vierno/react-tutorial/master/src/App.css
- Esqueleto da matéria
- https://raw.githubusercontent.com/vierno/react-tutorial/master/article.html
- Note: Always start component names with a capital letter.

### Testes

- `yarn add enzyme`
- `yarn add enzyme-adapter-react-16`
- criar arquivo `src/setupTests.js`
```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```
- Criar testes para esconder / mostrar o componente
- refatorar para toggle

### Alimentando o estado com fetch

- http://jsonplaceholder.typicode.com/posts/1/
- Lifecycle
- http://jsonplaceholder.typicode.com/comments?postId=1
- XSS

### React Router

- Criar lista de artigos
    - https://raw.githubusercontent.com/vierno/react-tutorial/master/article_list.html
- `yarn add react-router-dom`
- `<BrowserRouter>`
- `<Link>`
- props.match.params no artigo
