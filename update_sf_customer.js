var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017/sigma-cpq", function (err, db)
{
    if (err)
    {
        throw err;
    }

    db.collection("Quotes", function (err, collection)
    {
        if (err)
        {
            throw err;
        }

        collection.update({customerRef: "00158000008HYLYAA4"}, {$set: {customerRef: "0015800000YpiEGAAZ"}}, {multi: true}, function (err, result)
        {
            if (err)
            {
                throw err;
            }

            console.log(result.result.nModified + " records updated");

            console.log("closing db connection...");

            db.close(function (err, result)
            {
                console.log("closed");
            });
        });
    });
});