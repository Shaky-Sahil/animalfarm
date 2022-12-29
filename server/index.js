import express from 'express';
import cors from 'cors';

//initializing app 
const app = express();
app.use(cors());
app.use(express.json());


//creating data
import Chance from 'chance';
const chance = new Chance();

const animals = [...Array(250).keys()].map( id => {
    return {
        id,
        type:chance.animal(),
        name:chance.name(),
        age:chance.age(),
    }
});

//HTTP endpoint
app.get('',(req,res) => {

    //filtering results
    const q = req.query.q?.toLowerCase() || '';
    const results = animals.filter(animals => animals.type.toLowerCase().includes(q));

    res.send(results);
});

app.listen(8080);
