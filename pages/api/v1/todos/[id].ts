import { NextApiRequest, NextApiResponse } from "next"
import { connect } from "../../../../utils/connection"
import { ResponseFuncs } from "../../../../utils/types"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const method : keyof ResponseFuncs = req.method as keyof ResponseFuncs

    const catcher = (error: Error) => res.status(400).json({ error })

    const id : string = req.query.id as string 

    const handleCase: ResponseFuncs = {
        // Get detail Todo
        GET: async(req: NextApiRequest, res: NextApiResponse) => {
            const {Todo} = await connect()
            const isExist = await Todo.findOne({ _id: id }).select("_id").lean();
            if (isExist) {
                res.status(200).json({
                    'success' : true,
                    'code' : 200,
                    'message' : 'Success get data todo',
                    "data" : await Todo.findById(id)
                })
            }
            res.status(404).json({
                'success' : false,
                'code' : 404,
                'message' : 'Todo not found',
                'data' : null,
            })
        },

        // Edit Todo by id
        PUT: async(req: NextApiRequest, res: NextApiResponse) => {
            const {Todo} = await connect()
            const isExist = await Todo.findOne({ _id: id }).select("_id").lean();
            if (isExist) {
                res.status(200).json(
                    await Todo.findByIdAndUpdate(id, req.body, {new:true}).catch(catcher)
                )
            }
            res.status(404).json({
                'success' : false,
                'code' : 404,
                'message' : 'Todo not found',
                'data' : null,
            })
        },

        // Delete Todo by id
        DELETE: async(req: NextApiRequest, res: NextApiResponse) => {
            const {Todo} = await connect()
            const isExist = await Todo.findOne({ _id: id }).select("_id").lean();
            if (isExist) {
                res.json(await Todo.findByIdAndRemove(id).catch(catcher))
            }
            res.status(404).json({
                'success' : false,
                'code' : 404,
                'message' : 'Todo not found',
                'data' : null,
            })
            
        },
    }

    const response = handleCase[method]
    if (response) response(req,res)
    else res.status(400).json({error: "No Response for This Request"})
}

export default handler