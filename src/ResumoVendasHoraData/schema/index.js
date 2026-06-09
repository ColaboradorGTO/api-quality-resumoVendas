import Joi from "joi";

const nomeSchema = Joi.object({

    DADOS: Joi.number().required()
        .messages({
            "number.base": "DADOS must be a number",
            "any.required": "DADOS is required field"
        }),
        

});

export default nomeSchema;