# Teste API FiqOn #

## Projeto Desenvolvido em NodeJS, com super-set TypeScript ##

#### Biblicotecas Utilizadas ####
- [x] Typescript
- [x] Express
- [x] Axios
- [x] Dotenv
- [x] nodemon

Etapa 1 - Autenticação :heavy_check_mark:  
#### authController ####
- Primeiramente efetuado a configuração das variáveis informadas na documentação do desafio;
- Efetuada a conversão de usuário e senha para básic auth (base64);
- Enviado para com "method" - "POST" usuário e senha no tipo base64;  
- Recuperando o valor da chave api_token;

Etapa 2 - Consumo de informações :heavy_check_mark:
#### pillarsAndAnswerController ####
- Com informação do token gerado na Etapa 1, enviado a informação para fazer o GET da chave page;
- Efetuado a verificação das páginas para armazenar os valores de quantidade de página existentes;
- Fazendo a verificação com a chave more_items, em que está presente na api, e quando a informação retornar false, entende-se que não existe mais página na sequência;
- Na sequência a constante de páginas aguardando o retorno da resposta;
- Posteriormente retornando os pilares da cultura;

Etapa 3 - Envio de informações :heavy_check_mark:
#### pillarsAndAnswerController ####
- Pilares da cultura armazenados em um Array;
- Efetuada a criação de uma constante para fazer a conversão de Array para String;
- Em uma variável, foi guardado todos os pilares da cultura, assim convertendo a mesma para (base64);
- Posteriormente enviando o token como parametro e a awnser, que seria os pilares da cultura convertido para (base64);

# Para Executar Projeto #
_Usando npm, primeiro passo:
_executar `npm install` para ser instalado todas as dependências do projeto.
_Para rodar o projeto executar o seguinte comando: `npm start`
_ùnica rota com metódo GET - `http://localhost:3000/api/fiqon` 

# Agradecimentos #

Agradeço pela oportunidade, estou a disposição. 

Abraço à Todos!!! :green_heart: :green_heart: :green_heart:

### Obrigado a equipe da FiqOn ### 

Desenvolvido por `Kewen`	
