import { useMutation } from '@tanstack/react-query'

export const useMutationHook = (fnCallback) => {
    const mutation = useMutation({
        mutationFn: fnCallback,
      })
    return mutation
}