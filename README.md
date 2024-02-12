# Registro de Ocorrências em Centros de Distribuição - Mercado Livre

Este projeto consiste em um formulário de registro de ocorrências em centros de distribuição, seguindo as diretrizes e o tema visual do Mercado Livre. Foi desenvolvido utilizando Next.js 13, Axios para comunicação com o backend (que por hora bate apenas na api do Correios, porém já tem a estrutura para bater no back), React Hook Form para gerenciamento do formulário, Context API para gerenciamento de estados globais e Material-UI para componentes e estilos.
<p align="center">
 
  <img src="https://private-user-images.githubusercontent.com/146362138/303959131-394c79ed-e159-4546-bb02-38bbceb19444.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDc3MDA0NDUsIm5iZiI6MTcwNzcwMDE0NSwicGF0aCI6Ii8xNDYzNjIxMzgvMzAzOTU5MTMxLTM5NGM3OWVkLWUxNTktNDU0Ni1iYjAyLTM4YmJjZWIxOTQ0NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIxMlQwMTA5MDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00ZjI5MjE1ZDNlYWZlZDg1NzE0ZDk0MzIzZTg0ZTJmMzc4Nzk3NTg5NDc4OTllOTViYjY0MjUxMDkxM2IwYzgwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.qgp6LlPScZbtIhSXYtJcT_lJtDbTEYREHnlyKwqpU_U" alt="Prototipo Web" height="200px" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <img src="https://private-user-images.githubusercontent.com/146362138/303959483-77dce258-9fa8-403a-9cf9-a59dc3f78428.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDc3MDA2OTUsIm5iZiI6MTcwNzcwMDM5NSwicGF0aCI6Ii8xNDYzNjIxMzgvMzAzOTU5NDgzLTc3ZGNlMjU4LTlmYTgtNDAzYS05Y2Y5LWE1OWRjM2Y3ODQyOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIxMlQwMTEzMTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mYmU0NGQzNTM3MTU4NmJiNWRhYWMyN2FhZjMwM2VhODA2MmJiMmM5YTA1YjA0NmY1MjEzYTA2MzE4NjE0NGIyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.pSQD6hQie_aOT6aL-IN_V9ZPACbTfHBMcTWJQXVem4M" alt="Prototipo Web" height="200px" />
</p>
https://github.com/jackes-thalia/case-meli/assets/146362138/394c79ed-e159-4546-bb02-38bbceb19444

## Objetivo

O objetivo deste projeto é fornecer uma interface intuitiva e amigável para que os funcionários dos centros de distribuição do Mercado Livre possam registrar ocorrências de forma rápida e eficiente.

## Tecnologias Utilizadas

- Next.js 13
- Axios
- React Hook Form
- React Hooks (Context, States, etc)
- Material-UI

## Funcionalidades

- Formulário de registro de ocorrências com campos específicos para os dados exigidos pelo Mercado Livre.
- Validação dos campos em tempo real.
- Envio dos dados para o backend utilizando Axios.
- Tema visual seguindo as diretrizes de design do Mercado Livre.

##### Funcionalidades não implementadas
- Login de usuário na sessionStorage
- Sessão de usuário na Header para logout
- Persistencia de dados ao voltar dos steps do fluxo
- Máscaras nos campos de CEP e data
- Botão de editar dados no meio do fluxo

## Como Executar o Projeto

1. Clone este repositório.
2. Instale as dependências utilizando yarn install.
3. Execute o projeto com yarn dev.
4. Acesse o aplicativo em seu navegador através do endereço http://localhost:3000.

## Estrutura de Pastas

- `/app`: Pasta com as rotas do Next.js.
- `/service`: Pasta com os serviços compartilhados na aplicação.
- `/utils`: Funções utilitárias utilizadas no projeto.
- `/providers`: pasta com os provedores de contextos
- `/components`: pastas com os components utilizados em cada página, ou globalmente (pode estar na /src ou dentro de outras pastas).
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