import * as utils from './utils';

describe('methods tests', () => {
  it('shows how clear/reset/restore works for spy', () => {
    const spy = jest.spyOn(utils, 'whoAreYou');
    spy.mockImplementation(() => 'mocked implementation');

    console.log('Method call:', utils.whoAreYou());
    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockClear();
    console.log('After CLEAR:', utils.whoAreYou());
    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockReset();
    console.log('After RESET:', utils.whoAreYou());
    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockRestore();
    console.log('After RESTORE', utils.whoAreYou());
    expect(spy).toHaveBeenCalledTimes(0);
  });
});
