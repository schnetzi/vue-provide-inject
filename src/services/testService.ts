export function testService() {
  return {
    hello() {
      return "world";
    }
  };
}

export type ITestService = ReturnType<typeof testService>;
