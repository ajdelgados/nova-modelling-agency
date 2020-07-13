exports.health = async (req, res) => {
    res.status(200).json({
        status: true
    })
}