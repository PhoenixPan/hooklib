import * as hooks from '..';

describe('phoenixPanHooks', () => {
  test('exports modules should be defined', () => {
    Object.keys(hooks).forEach((hook) => {
      expect(hooks[hook]).toBeDefined();
    });
  });
});
