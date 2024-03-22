const models = require("../database/models");

const createPerro = async (req, res) => {
        try{
                const perro = await models.Perro.create(req.body);
                return res.status(201).json({
                        perro
                });
        }catch (error){
                return res.status(500).json({error: error.message});
        }
};

const getAllPerros = async (req, res) => {
        console.log('getting perros');
        try{
                const perros = await models.Perro.findAll({
                        include: [
                        ]
                });
                return res.status(200).json({ perros });
        }catch (error){
                return res.status(500).send(error.message);
        }
};

module.exports = {
        createPerro,
        getAllPerros
};

