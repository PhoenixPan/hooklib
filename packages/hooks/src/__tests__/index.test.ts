import * as phoenixHooks from '..';

describe('phoenixHooks', () => {
  test('exports modules should be defined', () => {
    Object.keys(phoenixHooks).forEach((hook) => {
      expect(phoenixHooks[hook]).toBeDefined();
    });
  });
});
