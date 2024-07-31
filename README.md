

## Configuração do Yarn

Este projeto utiliza o Yarn 2 (também conhecido como Yarn Berry) para gerenciar as dependências. Para garantir que a configuração e a resolução de pacotes funcionem corretamente, siga estas etapas para configurar o Yarn no seu ambiente local:

### Instalação do Yarn (se ainda não estiver instalado)

Certifique-se de que você tem o Yarn instalado. Caso não tenha, você pode instalar o Yarn globalmente usando o npm:

```bash
npm install -g yarn
```

### Configuração para Usar o Yarn 2 (Berry)

Navegue até a raiz do projeto e execute o seguinte comando para definir o Yarn para usar a versão Berry:

```bash
yarn set version berry
```
Este comando irá configurar o Yarn para usar o Yarn 2 (Berry) e criar a configuração necessária no seu projeto.

Após definir a versão do Yarn, instale as dependências do projeto executando:

```bash
yarn install
```

### Configuração Adicional

- **Arquivo `.yarnrc.yml`:** O projeto inclui um arquivo `.yarnrc.yml` que contém configurações específicas do Yarn 2. Certifique-se de que este arquivo está presente e configurado conforme necessário para garantir uma configuração consistente em todos os ambientes de desenvolvimento.

- **Node Linker:** Este projeto utiliza o `node-modules` como o `nodeLinker`. Essa configuração é especificada no arquivo `.yarnrc.yml` e deve ser respeitada para garantir a compatibilidade com as dependências do projeto.



## Getting Started

First, run the development server:

```bash
yarn dev
```


## Libraries
```@typescript-eslint/eslint-plugin```: Esta biblioteca fornece um conjunto de regras específicas para TypeScript no ESLint. Ela ajuda a garantir que seu código TypeScript siga boas práticas e estilos de codificação.

```@typescript-eslint/parser```: É o parser que permite ao ESLint entender o código TypeScript. Ele converte o código TypeScript em uma forma que o ESLint pode analisar e aplicar regras.

```eslint```: O ESLint é uma ferramenta de linting para JavaScript e TypeScript. Ele analisa o código para encontrar problemas e aplicar regras de estilo de código. É a base sobre a qual todos os plugins e configurações adicionais são construídos.

```eslint-config-airbnb```: Esta é uma configuração de ESLint popular que segue as regras de estilo e melhores práticas recomendadas pela Airbnb para JavaScript. Ela é amplamente usada para manter a consistência do código em projetos JavaScript.

```eslint-config-airbnb-typescript```: Extende a configuração do Airbnb para TypeScript, garantindo que as regras específicas do Airbnb sejam aplicadas também ao código TypeScript.

```eslint-config-prettier```: Esta configuração desativa regras de formatação do ESLint que podem conflitar com o Prettier, uma ferramenta de formatação de código. Ele garante que não haja conflitos entre as regras de linting e as regras de formatação.

```eslint-import-resolver-typescript```: Permite que o ESLint resolva importações de módulos TypeScript corretamente. Isso é útil para garantir que as importações sejam verificadas corretamente de acordo com as regras de linting.

```eslint-plugin-import```: Fornece regras e ferramentas para lidar com importações de módulos, como verificar se os módulos importados existem e garantir que as importações estejam corretamente organizadas e sem erros.

```eslint-plugin-prettier```: Integra o Prettier com o ESLint, permitindo que o Prettier execute como uma regra do ESLint. Isso ajuda a garantir que seu código seja formatado automaticamente de acordo com as regras do Prettier e que erros de formatação sejam sinalizados como problemas do ESLint.

```eslint-plugin-react```: Fornece regras de linting específicas para código React. Isso inclui boas práticas e estilos recomendados para desenvolvimento com React.

```eslint-plugin-react-hooks```: Adiciona regras de linting para React Hooks, garantindo que eles sejam usados corretamente e de acordo com as melhores práticas.

## Rules

### 1. **`"prettier/prettier": "error"`**

Essa regra garante que o código esteja formatado conforme as regras do Prettier, e qualquer desvio será tratado como um erro.

Exemplo:
```javascript
// Correto (formatado pelo Prettier)
const message = 'Hello, world!';
console.log(message);

// Incorreto (não formatado pelo Prettier)
const message="Hello, world!";console.log(message);
```

### 2. **`"react/jsx-props-no-spreading": "off"`**

Com a regra desativada, você pode usar a propagação de propriedades ({...props}) nos componentes JSX.

Exemplo:
```javascript
// Correto (com a regra desativada)
const Button = (props) => <button {...props}>Click me</button>;

// Incorreto (com a regra ativada)
const Button = (props) => <button {...props}>Click me</button>; // Erro: Não é permitido espalhar propriedades
```

### 3. **`"react-hooks/rules-of-hooks": "error"`**

Com essa regra ativada, os Hooks precisam ser chamados no nível superior de um componente ou hook personalizado, e qualquer violação será um erro.

Exemplo:
```javascript
// Correto
const Component = () => {
  useEffect(() => {
    // efeito colateral
  }, []);
  
  return <div>Hello!</div>;
};

// Incorreto
useEffect(() => {
  // efeito colateral
}, []); // Erro: Hooks não podem ser chamados fora de um componente ou hook personalizado

const Component = () => {
  return <div>Hello!</div>;
};
```
### 4. **`"react-hooks/exhaustive-deps": "warn"`**

Com essa regra configurada para "warn", você será advertido se as dependências necessárias estiverem faltando na lista de dependências de um react-hook, por exemplo o useEffect.

Exemplo:
```javascript
// Correto
useEffect(() => {
  fetchData();
}, [fetchData]); // OK, dependência está listada

// Incorreto
useEffect(() => {
  fetchData();
}, []); // Aviso: `fetchData` deveria estar nas dependências
```

### 5. **`"import/prefer-default-export": "off"`**

A regra desativada permite exportações nomeadas, mesmo se você estiver exportando um único item do módulo.

Exemplo:
```javascript

```
### 6. **`"@typescript-eslint/naming-convention": ["error", { "selector": "interface", "format": ["PascalCase"], "custom": { "regex": "^I[A-Z]", "match": true } }]`**

A regra garante que as interfaces comecem com "I" e usem PascalCase, como IUser.

Exemplo:
```javascript
// Correto
interface IUser {
  name: string;
}

// Incorreto
interface user {
  name: string;
} // Erro: Nome da interface não segue a convenção PascalCase e prefixo "I"
```

### 7. **`"import/extensions": ["error", "ignorePackages", { "ts": "never", "tsx": "never" }]`**

Com essa regra, você não deve incluir extensões de arquivo para .ts e .tsx nas importações

Exemplo:
```javascript
// Correto
import { Button } from './Button'; // OK, sem extensão para .ts e .tsx

// Incorreto
import { Button } from './Button.ts'; // Erro: Inclusão de extensão .ts
```