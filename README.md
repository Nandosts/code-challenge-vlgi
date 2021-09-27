# Svelte - TODO ✔

## Introdução
O [Grupo Sozo ](https://www.gruposozo.com.br/) é um grupo empresarial composto por diversas empresas do setor financeiro. Entre elas estão:
A [VLG Investimentos](https://vlginvestimentos.com.br/), empresa credenciada à [XP](https://www.xpi.com.br/) e focada na assessoria de investimentos.
O [Mercado em 1 Minuto](https://mercado1minuto.com.br/), focado no noticiário do setor. 
A [VLG Seguros](https://vlgseguros.com/), focada em soluções para planejamento patrimonial, como Seguros e Previdência. E a [VLG Corporate](https://vlgcorporate.com.br/), focada em soluções financeiras personalizadas.

Todas estas empresas precisam de uma ferramenta para se organizar quanto as atividades a serem feitas. Para isso iremos realizar a criação de um pequeno sistema para gerenciar o que precisar ser feito e o que ja foi feito.

## Desafio 🎲
O objetivo do projeto é reproduzir, parcialmente, o TODO do 👉[google keep](https://keep.google.com/),
utilizando o framework web `Svelte` 👉 [https://svelte.dev/](https://svelte.dev/) e o framework de
aplicativos `Ionic` 👉 [https://ionicframework.com/](https://ionicframework.com/).

Seu sistema de TODOs ✔ deve conter as seguintes features:
- adicionar novos items
- editar items
- excluir items
- marcar/desmarcar como feito
- visualizar os concluídos
- persistir o dado, pelo menos localmente (isto é, ao atualizar a página ou fechar e abrir novamente, o dado será mantido)

Features adicionais para o seu sistema de TODOs ✔ (**não obrigatório**):
- ordernar arrastando
- colapsar os itens concluídos
- sub itens (ter TODOs ✔ agrupados, ao concluír o nível mais alto os demais também devem ser marcados como feito)

🤗 Se preocupe em fazer um bom código e dar seu máximo. Iremos avaliar o processo e não somente o resultado!

📝 Para lhe guiar será avaliado os seguintes aspectos:
- features implementadas
- commits
- aparência do sistema (css) (copiar a estética do google keep pode ser uma boa ideia)
- código limpo e padrões de código
- componentização e uso dos recursos do svelte
- responsividade


## ⚙️ Documentações:

### Svelte
- O framework a ser utilizado é o `Svelte` 👉 [https://svelte.dev/](https://svelte.dev/)
### Ionic
- O framework para app hibrido a ser utilizado é o `Ionic` 👉 [https://ionicframework.com/](https://ionicframework.com/)
### Projeto
- O template utilizado foi retirado de
  [https://github.com/victoragcosta/svelte-ionic-template](https://github.com/victoragcosta/svelte-ionic-template).
  Siga as instruções no README para configurar o ambiente de desenvolvimento por completo.


## 📦 Entrega:
🦝 Projeto deve ser salvo neste mesmo repositório em uma nova branch, com o seu primeiro nome e último separado por underline (e.x.: fulano_silva). Faça commits pequenos e concisos com as novas funcionalidades.

⏰ Você terá 7 dias corridos para completar o desafio, a contar da data de envio deste por meio do e-mail.

## 🔧 Configuração do ambiente:

1. Instale Node.js [https://nodejs.org/en/](https://nodejs.org/en/)
2. Se for desenvolver para Android, prepare o ambiente Android
   [https://ionicframework.com/docs/developing/android](https://ionicframework.com/docs/developing/android).
   O ambiente não usa Cordova, então pode ignorar esses passos.
3. Se for desenvolver para iOS, Prepare o ambiente iOS
   [https://ionicframework.com/docs/developing/ios](https://ionicframework.com/docs/developing/android)
4. Execute os comandos abaixo:

   ```sh
   npm install
   npm install -g @ionic/cli
   npm run build
   ```

5. Rode o app de forma independente com:
   ```sh
   npm run ionic-run:android
   npm run ionic-run:ios
   ```
6. Para live reload, o celular deve estar no mesmo WiFi do computador.
   Rode o app de forma live reload com:
   ```sh
   npm run ionic-run-livereload:android
   npm run ionic-run-livereload:ios
   ```
7. Rode no browser (para testar sem funcionalidades nativas) com:
   ```sh
   npm run dev   # live reloading mode
   npm run build # generate production build
   npm run start # serve the production build
   ```
