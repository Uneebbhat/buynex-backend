import Joi from "joi";

const LoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export default LoginSchema;
