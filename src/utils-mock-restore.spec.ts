import * as utils from './utils';

const mockedWhoAreYou = jest.fn();
jest.mock('./utils', () => ({
  __esModule: true,
  whoAreYou: () => mockedWhoAreYou(),
}));

describe('methods tests', () => {
  it('shows how unmocking the mock mock', () => {
    mockedWhoAreYou.mockImplementation(() => 'mocked implementation');

    mockedWhoAreYou.mockRestore();
    console.log('After RESTORE', utils.whoAreYou());
    expect(mockedWhoAreYou).toHaveBeenCalledTimes(1);

    mockedWhoAreYou.mockImplementation(jest.requireActual('./utils').whoAreYou);
    console.log('After REQUIRE ACTUAL:', utils.whoAreYou());
    expect(mockedWhoAreYou).toHaveBeenCalledTimes(2);
  });
});
