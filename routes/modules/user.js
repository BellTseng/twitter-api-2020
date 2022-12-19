const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user-controller')
const upload = require('../../middleware/multer')
const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'cover', maxCount: 1 }])

// 取得使用者推文
router.get('/:id/tweets', userController.getUserTweets)
// 取得使用者資料
router.get('/:id', userController.getUser)
// 更新使用者資料
router.put('/:id', cpUpload, userController.putUser)
module.exports = router
