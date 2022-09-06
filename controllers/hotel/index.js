const { v4: uuidv4 } = require('uuid');
let hotels = {}
const listAllHotels = (req, res) =>
{
    try
    {
        req.logger.debug('Fetching all the hotel information');
        const lsthotel = Object.values(hotels)
        res
        .status(200)
        .json
        ({
            data: lsthotels
        })
    }
    catch (err)
    {
        req.logger.error('Error fetching hotel ', err);
        throw err;
    }
}

const getHotelDetailInformation = (req, res) => 
{
    try
    {
        const hotelId = req.params.hotelId;
        req.logger.debug('Fetching detailed information about the hotel for id ', hotelId);
        const hotelInfo = hotels[hotelId];
        res
        .status(200)
        .json
        ({
            data: hotelInfo
        })
    }
    catch (err)
    {
        req.logger.error(`Error fetching hotel info with id ${hotelId}`, err);
        throw err;
    }
}

//Creating hotel info
const createHotelInformation = (req, res) => 
{
    try
    {
        const hotelId = uuidv4(); //uuid npm package for id value
        const hotelObj = 
        {
            //Creating hotel infro data
            id: hotelId, 
            name: req.body.name, //access the payloaf submitte via api in req obj using req.body property
            description: req.body.description,
            amenities: req.body.amenities,
            is_published: false, //this will be set only after all hotel and room info is ready
            guest_capacity: req.body.guest_capacity
        };
        //we used req.logger property for logging
        req.logger.debug('Creating hotel with info ', hotelObj);
        //Object[key] = value;
        hotels[hotelId] = hotelObj; //To get the value of a particular key
        req.logger.debug('Hotel created successfully');
        res
        .status(200)
        .json
        ({
            data: hotelObj
        })
    }
    catch (err) 
    {
        req.logger.error('Error creating hotel info ', err);
        throw err;
    }
}

//Updating hotel
const updateHotelInformation = (req, res) => 
{
    try
    {
        const hotelId = req.params.hotelId;
        const hotelInfo = hotels[hotelId];
        const hotelObj = 
        {
            name: req.body.name,
            description: req.body.description,
            amenities: req.body.amenities,
            guest_capacity: req.body.guest_capacity
        };
        req.logger.debug('Updating hotel with info ', hotelObj);
        hotels[hotelId] = 
        {
            ...hotelInfo,
            ...hotelObj
        };
        req.logger.debug('Hotel updated successfully ');
        res
        .status(200)
        .json
        ({
            data: 
            {
                ...hotelInfo,
                ...hotelObj
            }
        })
    }
    catch(err) 
    {
        req.logger.error(`Error updating hotel info with id ${hotelId}`, err);
        throw err;
    }
}

const publishHotelInformation = (req, res) => 
{
    try
    {
        const hotelId = req.params.hotelId;
        const hotelInfo = hotels[hotelId];

        req.logger.debug('Publishing hotel info for id ', hotelId);
        hotels[hotelId] = 
        {
            ...hotelInfo,
            is_published: true
        };
        req.logger.debug('Hotel published successfully')
        res
        .status(204)
        .send();
    }
    catch(err)
    {
        req.logger.error(`Error publishing hotel infor with id ${hotelId}`, err);
        throw err;
    }
} 

const removeHotelInformation = (req, res) => 
{
    try
    {
        const hotelId = req.params.hotelId;
        req.logger.debug('Deleting hotel info with id', hotelId);
        delete hotels[hotelId];
        req.logger.debug('Hotel deleted successfully');
        res
        .status(204)
        .send();
    }
    catch(err)
    {
        req.logger.error(`Error deleting hotel info with id ${hotelId}`, err);
        throw err;
    }
}

const internalHelprFunc = (req, res) =>
{
    res.json
    ({
        message: 'Sensitive info'
    })
}

module.exports = 
{
	listAllHotels,
	getHotelDetailInformation,
	createHotelInformation,
    updateHotelInformation,
	publishHotelInformation,
	removeHotelInformation
};