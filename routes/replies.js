import { Router } from 'express'
import * as replyCtrl from "../controllers/replies.js"

export {
  router
}

const router = Router()

router.post('/:id', isLoggedIn, replyCtrl.create)
router.post('/:id', isLoggedIn, replyCtrl.reply)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}