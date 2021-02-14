import Joi from "@hapi/joi";
const { object, string } = Joi;

export const registerValidation = (data) => {
    const schema = object({
        name: string().min(6).required(),
        email: string().min(6).email().required(),
        password: string().min(6).required(),
    });
    return schema.validate(data);
};

export const loginValidation = (data) => {
    const schema = object({
        email: string().min(6).email().required(),
        password: string().min(6).required(),
    });
    return schema.validate(data);
};

// export default { registerValidation, loginValidation };
