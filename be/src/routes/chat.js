const express = require('express');
const router = express.Router();

const chatController = require('../controllers/ChatController.js');
const auth = require('../middlewares/auth.js');

// router
router.post("/conversations", auth.authenticate, chatController.newConversation);
router.get("/conversations/:userId", auth.authenticate, chatController.getConversation);
router.post("/messages", auth.authenticate, chatController.newMessage);
router.get("/messages/:conversationId", auth.authenticate, chatController.getMessages);

module.exports = router;