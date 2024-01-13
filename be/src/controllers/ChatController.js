// const chatService = require('../services/ChatService');
const Conversation = require('../models/Conversation');
const Message = require('../models/Message');

class ChatController {
    newConversation = async (req, res) => {
        const createConversation = new Conversation({
            members: [req.body.senderId, req.body.receiverId],
        });
        try {
            const savedConversation = await createConversation.save();
            res.status(200).json(savedConversation);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    getConversation = async (req, res) => {
        try {
            const conversation = await Conversation.find({
                members: { $in: [req.params.userId] },
            });
            res.status(200).json(conversation);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    newMessage = async (req, res) => {
        const newMessage = new Message(req.body);
        try {
            const savedMessage = await newMessage.save();
            res.status(200).json(savedMessage);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    getMessages = async (req, res) => {
        try {
            const messages = await Message.find({
                conversationId: req.params.conversationId,
            });
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json(error);
        }
    };


}

module.exports = new ChatController();