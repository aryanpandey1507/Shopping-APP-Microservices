const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    customerId: String,
    
    items: [
        {   
            product:{

                _id:{type:String , require:true},
                name:{type:String},
                desc:{type:String},
                banner:{type:String},
                type:{type:String},
                unit:{type:String},
                price:{type:Number}, 
                supplier:{type:Number}
            },
            unit:{type:Number  , require : true} 
        }
    ]
},
{
    toJSON: {
        transform(doc, ret){
            delete ret.__v;
        }
    },
    timestamps: true
});

module.exports =  mongoose.model('cart', CartSchema);