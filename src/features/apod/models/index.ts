export enum ApodPageName {
  APOD = "Apod",
}

export type GetApodRequest = {
  date?: string // YYYY-MM-DD
  start_date?: string // YYYY-MM-DD
  end_date?: string // YYYY-MM-DD
  count?: number
  thumbs?: boolean
}

export type GetApodResponse = {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: "image" | "video"
  service_version: string
  title: string
  url: string
}
