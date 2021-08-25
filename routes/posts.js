import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router()


router.use(decodeUserFromToken)
router.get('/', checkAuth, postsCtrl.index)
router.get('/:id', checkAuth, postsCtrl.show)
router.get('/:id/edit', checkAuth, postsCtrl.edit)
router.put('/:id', checkAuth, postsCtrl.update)
router.post('/', checkAuth, postsCtrl.create)
router.post('/:id/addToWall', checkAuth, postsCtrl.addToWall)
router.delete('/:id/removeFromWall', checkAuth, postsCtrl.removeFromWall)
router.delete('/:id', checkAuth, postsCtrl.delete)

