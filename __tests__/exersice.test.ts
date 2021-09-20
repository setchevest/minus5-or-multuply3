import { minus3OrMultiply5Resolver } from '../src/minus3OrMultiply5resolver';

describe('Find Solution tests', () => {
  const resolver = new minus3OrMultiply5Resolver(1);
  // Assert greeter result
  const result24Ok = resolver.findSolution(24);
  it('find solution with number 24', () => {
    result24Ok.then(data => expect(data).toBe(`(((1 * 3) + 5) * 3)`))
  });
  const result9Ok = resolver.findSolution(9);
  it('find solution with number 9', () => {
    result9Ok.then(data => expect(data).toBe(`((1 * 3) * 3)`))
  });
  const result10k = resolver.findSolution(9);
  it('find solution with number 10 throws no results', () => {
    result10k.catch(error => expect(error).toBe(null))
  });
});


