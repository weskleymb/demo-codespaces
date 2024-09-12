### Passo a Passo: Configurando um Ambiente Node.js no GitHub Codespaces

#### Passo 1: Criar um repositório no GitHub
1. Acesse [GitHub](https://github.com) e faça login.
2. No canto superior direito, clique em **+** e depois em **New repository**.
3. Dê um nome ao repositório (por exemplo, `nodejs-codespaces`), selecione **Public** ou **Private**.
4. Clique em **Create repository**.

#### Passo 2: Criar um Codespace a partir do repositório
1. Vá para o seu repositório recém-criado no GitHub.
2. Clique na aba **Code** (logo abaixo do nome do repositório).
3. Selecione a aba **Codespaces** ao lado de **Local**.
4. Clique em **New Codespace** para criar um novo ambiente de desenvolvimento.

#### Passo 3: Configurar o ambiente Node.js no Codespaces
1. Uma vez dentro do Codespaces, crie uma nova pasta chamada `.devcontainer` na raiz do projeto:
   - Clique com o botão direito na área de arquivos e selecione **New Folder**.
   - Nomeie a pasta como `.devcontainer`.

2. Dentro da pasta `.devcontainer`, crie um arquivo chamado `devcontainer.json` com o seguinte conteúdo:

   ```json
   {
     "name": "Node.js Development Environment",
     "image": "mcr.microsoft.com/vscode/devcontainers/javascript-node:0-18",
     "postCreateCommand": "npm install",
     "settings": {
       "terminal.integrated.defaultProfile.linux": "bash"
     },
     "extensions": [
       "dbaeumer.vscode-eslint",
       "esbenp.prettier-vscode"
     ]
   }
   ```

3. O Codespaces pedirá para reconstruir o contêiner após detectar o novo arquivo de configuração. Clique em **Rebuild Now** para aplicar as alterações.

#### Passo 4: Criar um servidor básico em Node.js
1. Na raiz do seu projeto, crie um arquivo chamado `index.js`.
2. Adicione o seguinte código para configurar um servidor HTTP básico:

   ```javascript
   const http = require('http');

   const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Hello, World!\n');
   });

   server.listen(3000, () => {
     console.log('Server running at http://localhost:3000/');
   });
   ```

3. Salve o arquivo.

#### Passo 5: Executar o servidor
1. Abra o terminal no Codespaces indo em **Terminal > New Terminal**.
2. No terminal, execute o seguinte comando para iniciar o servidor:

   ```bash
   node index.js
   ```

3. O servidor estará rodando na porta `3000` e exibirá a seguinte mensagem:

   ```
   Server running at http://localhost:3000/
   ```

4. O Codespaces fornecerá um link para acessar o servidor. Geralmente, um pop-up aparecerá com a opção de abrir a porta `3000` no navegador.

#### Passo 6: Criar um `.gitignore`
1. Na raiz do projeto, crie um arquivo chamado `.gitignore`.
2. Adicione as seguintes linhas para garantir que as pastas `node_modules` e `.devcontainer` não sejam incluídas nos commits:

   ```
   node_modules/
   .devcontainer/
   ```

3. Salve o arquivo.
