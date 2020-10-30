import { useCallback } from 'react'

export const useThrowableAsyncFn = (asyncFn) => {
  const fn = useCallback(
    (async) => {
      const result = asyncFn()
      if (result instanceof Error) throw result
    },
    [asyncFn]
  )
  return fn
}
