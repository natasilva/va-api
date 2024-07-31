const groupService = require('../service/group.js')

class GroupController {
    async getGroup(req, res, next) {
        try {
            const { cnpjf } = req.query
            const group = await groupService.get(cnpjf)

            res.status(200).json(group)
        } catch (err) {
            next(err)
        } 
    }
}

module.exports = new GroupController()