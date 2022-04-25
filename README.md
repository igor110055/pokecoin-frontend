## PokeCoin - FrontEnd  
Um pesquisador descobriu uma correlação monetária inesperada com relação a estes
monstros virtuais. Com a alta do interesse por estes, após a criação do Pokémon Go, e o crescimento
do uso de criptomoedas, blockchain e NFTs, este fato ficou cada vez mais evidente. A teoria é que a
base de experiência (“base_experience”) de um Pokémon possui uma relação direta com sua cotação
em Bitcoin (BTC). De forma que um ponto de experiência equivale a um satoshi (0.00000001 BTC).  
**Esta teoria é uma construção lúdica para o contexto do exercício e sem aplicação direta esperada no mundo real.**  
Esse respositório contém o código fonte do frontend do PokeCoin, que foi feito em **React**.  
O PokeCoin permite que o usuário realize compras e vendas de pokemons, além de acompanhar a valorização de sua carteira e o histórico de transações.  
O backend dessa aplicação pode ser encontrado [aqui](https://github.com/nicaloribeiro/pokecoin-backend).  

- - - 
### Requisitos para rodar o sistema
- Gerenciador de pacotes 
~~~
yarn ou npm
~~~
- Arquivo de variáveis de ambiente  
É necessário um arquivo com as variaveis de ambiente. Nesse projeto foram utilizadas duas: 
~~~
REACT_APP_API_URL  => Url de acesso ao backend (default http://localhost:5000/api)
REACT_APP_COINBASE_API => Url da api que fornece a cotação de bitcoin em dólar (default https://api.coinbase.com/v2/prices/spot?currency=USD)
~~~
- - -

### Inicialização
- Realize a instalação dos pacotes  

~~~  
yarn install ou npm install  
~~~  

- Inicie o projeto  
~~~
yarn start ou npm start  
~~~

- O projeto deve abrir automaticamente no navegador. Por padrão o aplicativo deve estar rodando na seguinte rota:  
~~~
http://localhost:5000
~~~

### O projeto pode ser acessado aqui : https://salty-shore-31797.herokuapp.com/
