//Get all rooms
const getAllRooms = (req, res) => 
{
    res.json({
        message: 'Fetching all the rooms of the hotel'
    })
}

//Get room details information
const getRoomDetailInformation = (req, res) => 
{
    console.log('#################################', req.params)
    res.json({
        message: 'Fetching a detail information about room of hotel'
    })
}

//Create rooms
const createRoom = (req, res) => 
{
    res.json({
        message: 'Creating a room of hotel'
    })
}

//Update room information
const updateRoomInformation = (req, res) => 
{
    res.json({
        message: 'Updating room information of hotel'
    })
}

//Delete room
const deleteRoom = (req, res) =>
{
    res.json({
        message: 'Removing room of hotel'
    })
}

module.exports = 
{
    getAllRooms,
    getRoomDetailInformation,
    createRoom,
    updateRoomInformation,
    deleteRoom
};