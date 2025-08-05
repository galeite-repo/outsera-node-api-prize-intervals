# Pior Filme do Golden Raspberry Awards

Esta API foi desenvolvida em **Node.js** + **TypeScript**, utilizando **Express**, **Sequelize** e **SQLite**.  
Ela lê um arquivo CSV com dados de filmes e disponibiliza endpoints para:

- Listar todos os filmes.
- Calcular os intervalos mínimos e máximos entre vitórias de produtores.

---

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **TypeScript** - Tipagem estática
- **Express** - Framework HTTP
- **Sequelize** - ORM para abstração do banco
- **SQLite** - Banco de dados relacional leve
- **csv-parser** - Leitura de arquivos CSV
- **Jest** + **Supertest** Testes

---


## Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/outsera-node-api-prize-intervals.git
cd seu-repositorio
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
**GET** `/producers/award-intervals`

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
