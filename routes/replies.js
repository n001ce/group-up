import { Router } from 'express'
import * as replyCtrl from "../controllers/replies.js"

export {
  router
}

const router = Router()

router.post('/:id', isLoggedIn, replyCtrl.create)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}