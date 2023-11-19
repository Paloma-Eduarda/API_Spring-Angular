# API_Spring-Angular
## Visão Geral

Esta aplicação implementa um CRUD (Create, Read, Update, Delete) para gerenciar informações sobre veículos. Os principais recursos incluem:

- Listagem de veículos
- Adição de novos veículos
- Atualização de informações de veículos existentes
- Exclusão de veículos

## Tecnologias Utilizadas

- **Spring Boot:** Framework para desenvolvimento de aplicações Java.
- **Angular:** Framework para construção de interfaces web.

## Estrutura do Projeto

- `gerenciador_spring/`: Contém o código-fonte do servidor Spring Boot.
- `crud-angular/`: Contém o código-fonte da aplicação Angular.

## Backend (Spring Boot)

### Estrutura de Pacotes

- `com.example.veiculos`: Pacote raiz.
  - `controller`: Contém os controladores REST.
  - `service`: Contém a lógica de negócios e serviços.
  - `repository`: Contém interfaces de repositório para acesso a dados.
  - `entities`: Contém as entidades de dados.

### Endpoints

- **Listar Veículos:**
  - Método: `GET`
  - URL: `/api/veiculos_entity`
  - Descrição: Retorna a lista de veículos cadastrados.

- **Adicionar Veículo:**
  - Método: `POST`
  - URL: `/veiculos_entity`/
  - Descrição: Adiciona um novo veículo ao sistema.

- **Atualizar Veículo:**
  - Método: `PUT`
  - URL: `/api/veiculos_entity`
  - Descrição: Atualiza as informações de um veículo específico com base no ID.

- **Excluir Veículo:**
  - Método: `DELETE`
  - URL: `/api/veiculos_entity`
  - Descrição: Exclui um veículo específico com base no ID.

## Frontend (Angular)

### Estrutura de Arquivos

- `src/app/veiculos/`: Contém os componentes relacionados a veículos.
  - `veiculos.component.html`: Tabela de veículos.
  - `veiculos.component.ts`: Lógica do componente.

### Rotas

- `/`: Exibe a lista de veículos.

## Como Executar

1. **Backend (Spring Boot):**
   - Certifique-se de ter o Java instalado.
   - Navegue até o diretório `gerenciador_spring/`.
   - Execute o comando: `./mvnw spring-boot:run`.

2. **Frontend (Angular):**
   - Certifique-se de ter o Node.js e o Angular CLI instalados.
   - Navegue até o diretório `crud-angular/`.
   - Execute o comando: `ng serve`.

3. **Acesse a Aplicação:**
   - Abra o navegador e acesse `http://localhost:4200` para visualizar a aplicação.

## Considerações Finais

Esta documentação fornece uma visão geral da estrutura e dos recursos da aplicação. 
