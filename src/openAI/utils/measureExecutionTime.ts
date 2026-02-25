export type ExecutionTimeResult<T> = {
  result: T;
  durationMs: number;
};

export function measureExecutionTime<T>(fn: () => T): ExecutionTimeResult<T> {
  const start = performance.now();
  const result = fn();
  const end = performance.now();

  return {
    result,
    durationMs: end - start,
  };
}

export async function measureExecutionTimeAsync<T>(
  fn: () => Promise<T>
): Promise<ExecutionTimeResult<T>> {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();

  return {
    result,
    durationMs: end - start,
  };
}
