import * as Joi from 'joi';

export default {
    method: 'POST',
    path: '/account',
    config: {
        validate: {
            payload: {
                firstname: Joi.string().required(),
                lastname: Joi.string().required(),
                timestamp: Joi.any().forbidden().default((new Date()).getTime())
            }
        }
    },
    handler: (request, h) => {
        return request.payload;
    }
};