const app = require('../../src/app');

describe('\'template\' service', () => {
  it('registered the service', () => {
    const service = app.service('template');
    expect(service).toBeTruthy();
  });
});
