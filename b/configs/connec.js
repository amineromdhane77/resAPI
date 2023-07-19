const mongoose = require ('mongoose');
 const password = process.env.PASSWORD
const conndb = async()=>{
    try {
/*         await mongoose.connect('mongodb+srv://amineromdhane77:Dw96wsERdsRe35jk@cluster0.tsyfuxw.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true});
 */     
/*        await mongoose.connect(`mongodb+srv://amineromdhane77:${password}@cluster0.tsyfuxw.mongodb.net/?retryWrites=true&w=majority`,{ useNewUrlParser: true, useUnifiedTopology: true});
 */
await mongoose.connect(process.env.BD,{ useNewUrlParser: true, useUnifiedTopology: true})

console.log('we are connected to the world');
    } catch (error) {
       console.log(error); 
    }
}

module.exports = conndb