const request = require('supertest');
const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200));
    });
  });

  let testSetId;

  describe('/cards/createSet', () => {
    describe('POST', () => {
      const setInfo = {
        name: 'testSet',
        private: '0',
        userId: 13
      }
      it('responds with 200 status, application/json content type, and a body property containing the id of the new set', () => request(server)
        .post('/cards/createSet')
        .send(setInfo)
        .expect('Content-Type', /application\/json/)
        .expect(200)
        .expect((res) => {
          testSetId = res.body._id;
          if (typeof res.body._id === 'number') {
            return;
          }
          throw new Error(
            'Failed Test: Expected the response to include a number stored in the _id property'
          );
        }))
    });
  })

  describe('/cards/deleteSet', () => {
    describe('POST', () => {
      console.log(testSetId);
      const setInfo = {
        _id: testSetId
      }
      it('responds with 200 status, application/json content type, and a body property containing the deleted set info', () => request(server)
        .post('/cards/deleteSet')
        .send(setInfo)
        .expect('Content-Type', /application\/json/)
        .expect(200)
        .expect((res) => {
          console.log('res.body: ', res.body);
        }))
    });
  })

  describe('/cards/getSet', () => {
    describe('POST', () => {
      it('responds with 200 status and application/json content type', () => request(server)
        .post('/cards/getSet')
        .expect('Content-Type', /application\/json/)
        .expect(200));
      
    });
      
  });
});