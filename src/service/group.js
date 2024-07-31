const groupModel = require('../model/group')

class GroupService {
    async get (cnpjf) {
        const result = await groupModel.getUserByCnpjf(cnpjf)
        return result
    }
}

module.exports = new GroupService()