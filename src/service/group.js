const groupModel = require('../model/group')

class GroupService {
    async get (cnpjf) {
        if (!cnpjf) {
            throw new Error("cnpjf_is_empty");
        }

        const result = await groupModel.getUserByCnpjf(cnpjf)
        return result
    }
}

module.exports = new GroupService()