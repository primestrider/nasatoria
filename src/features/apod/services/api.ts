import axiosInstance from "@/plugins/axios"
import { cleanParams } from "@/shared/helpers/params"
import type { CustomAxiosRequestConfig } from "@/shared/models/api"

import type { GetApodRequest, GetApodResponse } from "../models"

/**
 * function to get APOD (Astronomy Picture of the Day)
 * @param GetApodRequest
 * @returns {GetApodResponse[]}
 */
export const getApod = async (payload: GetApodRequest): Promise<GetApodResponse[]> => {
  const getApodRequest: CustomAxiosRequestConfig<GetApodRequest> = {
    url: "/planetary/apod/",
    method: "GET",
    params: cleanParams(payload),
  }

  const { data } = await axiosInstance.request<GetApodResponse | GetApodResponse[]>(getApodRequest)

  return Array.isArray(data) ? data : [data]
}
