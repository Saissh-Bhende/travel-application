const express = require('express')
const router = express.Router();
const user = require('./user');
const hotel = require('./hotel');
const room = require('./room');

router.use("/", user);
router.use("/hotel", hotel);
router.use("/hotel/:hotelId/room", room);
//router.post('/', authenticateUsers, createHotelInformation);

module.exports = router;
//module.exports = authenticateUsers;

    