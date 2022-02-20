import * as utils from './utils';

const mockedWhoAreYou = jest.fn();
jest.mock('./utils', () => ({
  __esModule: true,
  whoAreYou: () => mockedWhoAreYou(),
}));

describe('methods tests', () => {
  it('shows how clear/reset/restore works for mock', () => {
    mockedWhoAreYou.mockImplementation(() => 'mocked implementation');

    console.log('Method call:', utils.whoAreYou());
    expect(mockedWhoAreYou).toHaveBeenCalledTimes(1);

    mockedWhoAreYou.mockClear();
    console.log('After CLEAR:', utils.whoAreYou());
    expect(mockedWhoAreYou).toHaveBeenCalledTimes(1);

    mockedWhoAreYou.mockReset();
    console.log('After RESET:', utils.whoAreYou());
    expect(mockedWhoAreYou).toHaveBeenCalledTimes(1);

    mockedWhoAreYou.mockRestore();
    console.log('After RESTORE', utils.whoAreYou());
    expect(mockedWhoAreYou).toHaveBeenCalledTimes(1);
  });
});
