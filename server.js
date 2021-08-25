
import { router as profilesRouter } from './routes/profiles.js'
import { router as authRouter } from './routes/auth.js'
import { router as teamsRouter } from './routes/teams.js'
import { router as repliesRouter } from './routes/replies.js'
import { router as postsRouter } from './routes/posts.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import cors from 'cors'


import 'dotenv/config.js'

import('./config/database.js')

const app = express()


app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)),'build')))
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/api/profiles', profilesRouter);
app.use('/api/auth', authRouter)
app.use('/api/teams', teamsRouter)
app.use('/api/replies', repliesRouter)
app.use('/api/posts', postsRouter)




app.get("/*", function (req, res) {
  res.sendFile(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "build", "index.html")
  )
})

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`)
})
