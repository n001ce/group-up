import { Router } from 'express'
const router = Router()
import * as postsCtrl from '../controllers/posts.js'

/* GET users listing. */
router.get('/', isLoggedIn, postsCtrl.index)
router.get('/new', isLoggedIn, postsCtrl.new)
router.get('/:id', isLoggedIn, postsCtrl.show)
router.get('/:id/edit', isLoggedIn, postsCtrl.edit)
router.put('/:id', isLoggedIn, postsCtrl.update)
router.post('/', isLoggedIn, postsCtrl.create)
router.post('/:id/addToWall', isLoggedIn, postsCtrl.addToWall)
router.delete('/:id/removeFromWall', isLoggedIn, postsCtrl.removeFromWall)
router.delete('/:id', isLoggedIn, postsCtrl.delete)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}


export {
  router
}