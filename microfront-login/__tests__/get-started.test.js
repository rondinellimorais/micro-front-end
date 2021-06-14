/**
 * TODO: write here your tests
 */
it('expect call a function', () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalled();
});
