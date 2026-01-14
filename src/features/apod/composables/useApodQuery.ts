import { useQuery } from "@tanstack/vue-query"

import type { GetApodRequest } from "../models"
import { getApod } from "../services/api"

export const useApodQuery = (params: GetApodRequest) => {
  return useQuery({
    queryKey: ["apod", params],
    queryFn: () => getApod(params),
  })
}
