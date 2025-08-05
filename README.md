# Pior Filme do Golden Raspberry Awards

API RESTful para possibilitar a leitura da lista de indicados e vencedores da
categoria Pior Filme do Golden Raspberry Awards. 
Ela lê um arquivo CSV com dados de filmes e disponibiliza endpoints para:

- Listar todos os filmes.
- Calcular os intervalos mínimos e máximos entre vitórias de produtores.

---

## Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **Sequelize**
- **SQLite**
- **csv-parser**
- **Jest** + **Supertest**

---


## Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/galeite-repo/outsera-node-api-prize-intervals.git
cd outsera-node-api-prize-intervals
```

2. **Instale as dependências**
```bash
npm install
```

3. O arquivo `Movielist.csv` deve estar na pasta `upload/`.

---

## Executando em Desenvolvimento

```bash
npm run start:dev
```

- A aplicação está rodando em: **http://localhost:3000**
- Durante o startup do app:
  - O banco SQLite é criado **em memória**.
  - O CSV é importado para o banco.

---

## Endpoints

### Listar todos os filmes
**GET** `/`

**Resposta:**
```json
[
  {
		"id": 1,
		"year": 1980,
		"title": "Can't Stop the Music",
		"studios": "Associated Film Distribution",
		"producers": "Allan Carr",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	}
]
```

---

### Intervalo de prêmios por produtor
**GET** `/producers/prize-intervals`

**Resposta:**
```json
{
	"min": [
		{
			"producer": "Joel Silver",
			"interval": 1,
			"previousWin": 1990,
			"followingWin": 1991
		}
	],
	"max": [
		{
			"producer": "Matthew Vaughn",
			"interval": 13,
			"previousWin": 2002,
			"followingWin": 2015
		}
	]
}
```

---

## Testes de Integração

O projeto inclui **apenas testes de integração** para garantir que os dados retornados pela API estão de acordo com a proposta.

### Rodando os testes
```bash
npm run test
```

Os testes usam:
- **Jest** para execução.
- **Supertest** para simular chamadas HTTP.
- Banco SQLite em memória.
---


## Licença
**MIT**
