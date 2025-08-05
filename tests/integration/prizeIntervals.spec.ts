
import request from 'supertest';
import app from '../../src/app';
import { sequelize } from '../../src/config/db';
import { resetDatabase, seedMovies } from '../helpers/seed';

describe('Integração - /producers/prize-intervals', () => {
  beforeAll(async () => {
    await resetDatabase();
    await seedMovies();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('deverá retornar os intervalos conforme proposta', async () => {
    const res = await request(app).get('/producers/prize-intervals');
    expect(res.status).toBe(200);
    const expected = {
      min: [
        { producer: 'Joel Silver', interval: 1, previousWin: 1990, followingWin: 1991 }
      ],
      max: [
        { producer: 'Matthew Vaughn', interval: 13, previousWin: 2002, followingWin: 2015 }
      ]
    };
    expect(res.body).toEqual(expected);
  });
});
