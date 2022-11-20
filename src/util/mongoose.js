module.exports = {
    mutipleMongoosetoObject: function (mongooses) {
        return mongooses.map(mongooses => mongooses.toObject());
    },

    MongoosetoObject: function (mongooses) {
        return mongooses ? mongooses.toObject() : mongooses;
    },
}