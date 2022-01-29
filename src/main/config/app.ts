import express from 'express'

export const appConfig = {
  PORT: process.env.PORT ?? 9876
}

export const app = express()
