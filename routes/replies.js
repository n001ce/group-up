import { Router } from 'express'
import * as replyCtrl from '../controllers/replies.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router()


router.use(decodeUserFromToken)

router.post('/:id', checkAuth, replyCtrl.create)
router.delete('/:id', checkAuth, replyCtrl.delete)

