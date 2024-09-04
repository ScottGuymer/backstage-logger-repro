import { mockServices } from '@backstage/backend-test-utils';

const logger = mockServices.logger.mock();

describe('example', () => {
  it('should pass', async () => {
    expect(logger).toBeDefined();
    expect(1).toBe(1);
  });
});
