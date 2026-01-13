import type { AxiosError, AxiosInstance } from "axios"

export function setupInterceptors(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.request.use(
    (config) => {
      const apiKey = import.meta.env.VITE_API_KEY

      if (apiKey) {
        config.params = {
          ...config.params,
          api_key: apiKey,
        }
      }

      return config
    },
    (error) => {
      console.error("Request error:", error)
      return Promise.reject(error)
    },
  )

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response) {
        // Server mengembalikan response error (misalnya 401, 500, dll)
        console.error("Response error:", {
          status: error.response.status,
          data: error.response.data,
        })
      } else if (error.request) {
        // Request sudah dikirim tapi tidak ada response
        console.error("No response from server:", error.request)
      } else {
        // Error lain saat setup request
        console.error("Axios config error:", error.message)
      }

      // bisa custom error object biar lebih clean
      return Promise.reject({
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      })
    },
  )
}
