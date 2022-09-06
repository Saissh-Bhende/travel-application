//const { request } = require('express');
const express = require('express')
const router = express.Router({ mergeParams: true });
const authenticateUsers = require('../../middleware')
const room = require('../../controllers/room')


///Public routes
router.get('/', room.getAllRooms);
router.get('/:roomId', room.getRoomDetailInformation);

///Private routes
router.use(authenticateUsers)

router.post('/', room.createRoom);
router.put('/:roomId', room.updateRoomInformation);
router.delete('/:roomId', room.deleteRoom);

module.exports = router;