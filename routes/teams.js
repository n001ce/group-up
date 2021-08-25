import { Router } from 'express'
import * as teamCtrl from '../controllers/teams.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
export {
  router
}

const router = Router()


router.use(decodeUserFromToken)
router.post('/:id', checkAuth, teamCtrl.create)
router.patch('/:id', checkAuth, teamCtrl.update)
router.delete('/:id', checkAuth, teamCtrl.delete)

