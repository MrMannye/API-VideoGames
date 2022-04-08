exports.success = (req,res,message,status) => {
    res.status(status ||200).send({
        error: "All goood :)",
        data: message,
    })
}

exports.error = (req,res,message,status) => {
    res.status(status ||200).send({
        error: message,
        data: "Something get worng body",
    })
}