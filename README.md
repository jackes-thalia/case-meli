# Registro de Ocorrências em Centros de Distribuição - Mercado Livre

Este projeto consiste em um formulário de registro de ocorrências em centros de distribuição, seguindo as diretrizes e o tema visual do Mercado Livre. Foi desenvolvido utilizando Next.js 13, Axios para comunicação com o backend (que por hora bate apenas na api do Correios, porém já tem a estrutura para bater no back), React Hook Form para gerenciamento do formulário, Context API para gerenciamento de estados globais e Material-UI para componentes e estilos.
<p align="center">
 
  <img src="https://github.com/jackes-thalia/case-meli/assets/146362138/78e76776-e24a-4c59-bc01-8e9d5d2b9289" alt="Prototipo Web" height="200px" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <img src="https://github.com/jackes-thalia/case-meli/assets/146362138/9fec75fb-3fb9-44af-ba68-488e22394ced" alt="Prototipo Web" height="200px" />
</p>

## Objetivo

O objetivo deste projeto é fornecer uma interface intuitiva e amigável para que os funcionários dos centros de distribuição do Mercado Livre possam registrar ocorrências de forma rápida e eficiente.


## Tecnologias Utilizadas

- Next.js 13
- Axios
- React Hook Form
- React Hooks (Context, States, etc)
- Material-UI
- Jest/Testing-library

## Funcionalidades

- Jornada do usuário.
- Formulário de registro de ocorrências com campos específicos para os dados exigidos pelo Mercado Livre.
- Validação dos campos em tempo real.
- Requisição de api utilizando Axios.
- Tema visual seguindo as diretrizes de design do Mercado Livre.

##### Funcionalidades não implementadas

- Login de usuário na sessionStorage
- Sessão de usuário na Header para logout
- Persistencia de dados ao voltar dos steps do fluxo
- Botão de editar dados no meio do fluxo


## Figma e protótipo com a jornada do fluxo

Você pode conferir as etapas de desenvolvimento do protótipo acessando esse 
[link](https://www.figma.com/file/G4xuLl2XXlvqPQPDebDab1/Case-Meli?type=design&node-id=2-3&mode=design&t=lzU4whZTkYg2IGhG-0).

<img src="https://github.com/jackes-thalia/case-meli/assets/146362138/37d7e306-a94e-41c6-9669-649b0d2c9146" alt="Prototipo Web" height="400px" />

Link do Protótipo com a [jornada do usuário](https://www.figma.com/proto/G4xuLl2XXlvqPQPDebDab1/Case-Meli?type=design&node-id=30-5246&t=lzU4whZTkYg2IGhG-0&scaling=scale-down&page-id=30%3A3628&starting-point-node-id=30%3A5246)


## Como Executar o Projeto

1. Clone este repositório.
2. Instale as dependências utilizando yarn install.
3. Execute o projeto com yarn dev.
4. Acesse o aplicativo em seu navegador através do endereço http://localhost:3000.

## Testes

Os testes foram feitos usando Jest com Testing Library e para executá-los basta rodar `yarn test`

## Estrutura de Pastas

- `/app`: Pasta com as rotas do Next.js.
- `/mock`: Pasta com os mocks dos teste de unidade.
- `/presentation`: Pasta que contem arquivos globais, contendo as subpastas: components, constants, container, providers.
- `/service`: Pasta com os serviços compartilhados na aplicação.
- `/utils`: Funções utilitárias.

## Configuração do Tema do Mercado Livre

Para replicar o tema Mercado Livre junto com o Material-UI foi feito um Provider de thema seguindo a documentação oficial: [Customization](https://mui.com/customization/theming/).

## Direitos

Esta aplicação foi feita com fins de avaliação e não possui vínculo com a empresa Mercado Livre.

Este projeto é uma simulação para a otimização dos processos nos centros de distribuição do Mercado Livre, oferecendo uma solução moderna e alinhada com as necessidades da empresa.

---
<br />
<p align="center" >
 
  <img src="https://cdn-icons-png.flaticon.com/512/136/136525.png" alt="Axios Icon" width="100" />
  <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png" alt="React Hook Form Icon" width="100" />
</p>
