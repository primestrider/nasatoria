export const cleanParams = <T extends Record<string, unknown>>(params: T): Partial<T> => {
  return Object.fromEntries(
    Object.entries(params).filter(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, value]) => value !== undefined && value !== null && value !== "",
    ),
  ) as Partial<T>
}
