import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import joi from 'joi';
import passwordComplexity from 'joi-password-complexity';


const userSchema = new mongoose.Schema(
  {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id },
        process.env.JWT_PRIVATE_KEY,
        { expiresIn: '7d'}
    );
    return token
};

const User = mongoose.model('User', userSchema);

const validate = (data) => {
    const Schema = joi.object({
        firstName: joi.string().required().label('First Name'),
        lastName: joi.string().required().label('Last Name'),
        email: joi.string().email().required().label('Email'),
        password: passwordComplexity().required().label('Password')


    });

    return Schema.validate(data)
    

}

export  {User , validate};