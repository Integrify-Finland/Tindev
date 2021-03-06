import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import lusca from 'lusca'
import 'reflect-metadata'

import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

import userRouter from './routers/user'

const app = express()

//**Express configuration*/
app.set('port', process.env.PORT || 3000)

//**Use common 3rd-party middlewares*/
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))

//**All routers here*/
app.use('/user', userRouter)

//**Custom API error handler*/
app.use(apiErrorHandler)
app.use(apiContentType)

export default app
