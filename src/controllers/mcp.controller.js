import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import { MCP } from '../models/mcp.model.js';

const insertAllDocuments = asyncHandler(async (req,res) => {

    const inserted = await MCP.insertMany(data)
        
    if(!inserted){
        throw new ApiError(400, "Error in inserting data")
    }

    return res
            .status(200)
            .json(new ApiResponse(200,{},"Data Successfully Inserted"))
    

})

const searchMcps = asyncHandler( async(req, res) => {

    const {constituency, limit="10",page="1", sort="createdAt", sortType="1"} = req.query;

    if(!constituency || constituency?.trim()==''){
        throw new ApiError(400, "Valid constituency name required")
    }

    const results = await MCP.find({constName:{$regex: constituency, $options: 'i'}})

    if(!results){
        throw new ApiError(500, "Some Error Occured")
    }

    return res
            .status(200)
            .json(new ApiResponse(200,{results},"Database Checked"))

})

export {
    insertAllDocuments,
    searchMcps
}