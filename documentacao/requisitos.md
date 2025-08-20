# Requisitos e Casos de Teste

## 1. Histórias de Usuário Principais

### HU-01: Cadastro de Usuário
Como um **novo usuário**, eu quero me **cadastrar no sistema** para poder ter acesso a aplicação.

### HU-02: Loguin de Usuário
Como um **usuário**, eu quero **fazer login no sistema** para poder ter acesso às funcionalidades de adoção e chat.

### HU-03: Publicação de Animal para Adoção
Como um **usuário logado**, eu quero **publicar um animal para adoção** para que ele possa ser visualizado por outros usuários interessados.

### HU-04: Atualizar Status do animal
Como um **usuário logado**, eu quero **indicar que o animal foi adotado** para que ele não possa ser visualizado por outros interessados.

### HU-05: Excluir publicação
Como um **usuário logado**, eu quero **excluir uma publicação que fiz** para que ele não possa ser visualizado por outros interessados.

### HU-06: Visualização de Animais Disponíveis
Como um **usuário logado**, eu quero **visualizar uma lista de animais disponíveis para adoção** para encontrar um que me interesse.

### HU-07: Início de Conversa (Chat)
Como um **usuário logado**, eu quero **iniciar uma conversa com o dono de um animal** para fazer perguntas sobre o processo de adoção.

### HU-08: Alterar dados pessoais
Como um **usuário logado**, eu quero **editar meus dados pessoais** para manter minha conta protegida.

### HU-09: Sair da conta
Como um **usuário logado**, eu quero **Sair da minha conta**.
---

## 2. Cenários de Teste

### **Cenários de Teste**

---

### **Cenários para HU-01: Cadastro de Usuário**

#### Cenário Principal
**Dado que** estou na página de cadastro,
**Quando** eu preencho todos os campos obrigatórios (nome, e-mail e senha) com informações válidas,
**E** clico no botão "Cadastrar",
**Então** meu usuário deve ser criado com sucesso e eu devo ser redirecionado para a página inicial.

#### Cenários Alternativos
* **Cenário de E-mail Já Cadastrado**:
    * **Dado que** estou na página de cadastro,
    * **Quando** eu tento me cadastrar com um e-mail que já existe no sistema,
    * **Então** o sistema deve exibir uma mensagem de erro informando que o e-mail já está em uso.
* **Cenário de Senha Fraca**:
    * **Dado que** estou na página de cadastro,
    * **Quando** eu preencho todos os campos, mas a senha não atende aos requisitos de segurança (ex: muito curta),
    * **Então** o sistema deve exibir uma mensagem de erro solicitando uma senha mais forte.
* **Cenário de Dados Inválidos**:
    * **Dado que** estou na página de cadastro,
    * **Quando** eu tento me cadastrar com um formato de e-mail inválido (ex: sem o "@" ou o ".com"),
    * **Então** o sistema deve me impedir de prosseguir e mostrar uma mensagem de erro.

---

### **Cenários para HU-02: Publicação de Animal para Adoção**

#### Cenário Principal
**Dado que** estou logado,
**Quando** eu preencho o formulário de publicação de animal com todas as informações necessárias (nome, tipo, raça, fotos, etc.),
**E** clico no botão "Publicar",
**Então** o animal deve ser publicado com sucesso e aparecer na lista de animais disponíveis.

#### Cenários Alternativos
* **Cenário de Dados Faltando**:
    * **Dado que** estou no formulário de publicação de animal,
    * **Quando** eu tento publicar um animal sem preencher um campo obrigatório (ex: nome),
    * **Então** o sistema deve me impedir de prosseguir e destacar o campo que falta.
* **Cenário de Usuário Não Autenticado**:
    * **Dado que** estou tentando acessar o formulário de publicação,
    * **Quando** eu não estou logado no sistema,
    * **Então** o sistema deve me redirecionar para a página de login.

---

### **Cenários para HU-03: Visualização de Animais Disponíveis**

#### Cenário Principal
**Dado que** estou na página principal do aplicativo,
**Quando** navego para a seção "Animais para Adoção",
**Então** devo ver uma lista completa de todos os animais disponíveis, com suas fotos e informações básicas.

#### Cenários Alternativos
* **Cenário de Lista Vazia**:
    * **Dado que** estou na seção "Animais para Adoção",
    * **Quando** não há publicações de animais disponíveis no sistema,
    * **Então** uma mensagem informativa deve ser exibida, como "Não há animais para adoção no momento."

---

### **Cenários para HU-04: Início de Conversa (Chat)**

#### Cenário Principal
**Dado que** estou visualizando a publicação de um animal,
**Quando** clico no botão "Iniciar Conversa" associado ao dono do animal,
**Então** uma nova janela de chat deve ser aberta para que eu possa enviar mensagens ao dono.

#### Cenários Alternativos
* **Cenário de Dono Offline**:
    * **Dado que** o dono do animal não está online,
    * **Quando** eu tento iniciar uma conversa com ele,
    * **Então** o sistema deve me informar que o usuário não está disponível no momento.

---

### **Cenários para HU-05: Sair da Conta**

#### Cenário Principal
**Dado que** estou logado e na minha conta,
**Quando** clico no botão "Sair",
**Então** minha sessão deve ser encerrada e eu devo ser redirecionado para a página de login.

---

### **Cenários para HU-06: Alterar Dados Pessoais**

#### Cenário Principal
**Dado que** estou logado,
**Quando** navego para a seção de edição de perfil e atualizo minhas informações (ex: nome de usuário ou e-mail),
**E** clico em "Salvar",
**Então** meus dados devem ser atualizados com sucesso no sistema.

#### Cenários Alternativos
* **Cenário de Dados Inválidos na Edição**:
    * **Dado que** estou na página de edição de perfil,
    * **Quando** eu tento salvar um dado em formato inválido (ex: telefone com letras),
    * **Então** o sistema deve exibir uma mensagem de erro e me impedir de salvar as alterações.

---

### **Cenários para HU-07: Atualizar Status do Animal**

#### Cenário Principal
**Dado que** eu sou o dono de uma publicação de animal,
**Quando** acesso a minha publicação e clico no botão para marcar como "Adotado",
**Então** o status do animal deve ser atualizado e a publicação deve ser removida da lista de animais disponíveis para outros usuários.

---

### **Cenários para HU-08: Excluir Publicação**

#### Cenário Principal
**Dado que** eu sou o dono de uma publicação de animal,
**Quando** acesso a minha publicação e clico no botão "Excluir",
**Então** a publicação deve ser removida permanentemente da lista de animais disponíveis para todos os usuários.