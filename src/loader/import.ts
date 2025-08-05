import csv from 'csv-parser';
import fs from 'fs';
import path from "path";
import { Movie } from "../models/movie";

export async function importCSV(): Promise<void> {
    const results: any[] = []
    const file = path.resolve(__dirname, '../../upload/Movielist.csv')

    return new Promise((resolve, reject) => {

        fs.createReadStream(file).pipe(csv({ separator: ';' }))
            .on('data', (data) => {
                results.push(data)
            })
            .on('end', async () => {
                try {
                    await Movie.bulkCreate(results);
                    console.log("filmes importados com sucesso");
                    resolve()
                } catch (error) {
                    console.error("erro ao importar filmes", error)
                    reject(error);
                }
            })
    })
}