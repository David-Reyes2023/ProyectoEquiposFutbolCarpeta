const express = require('express');

const router = express.Router();

const DUMMY_EQUIPOS = [
    {
        id:'e1',
        equipo: 'Barcelona SC',
        jugador1:"Burrai",
        jugador2:"Díaz",
        jugador3:"Fydriszewski",
        jugador4:"Rodriguez",
        jugador5:"Perlaza",
        jugador6:"Rangel",
        jugador7:"Ramírez"

    },
    {
        id:'e2',
        equipo: 'Barcelona FC',
        jugador1:"ter Stegen",
        jugador2:"Cancelo",
        jugador3:"Martínez",
        jugador4:"Christensen",
        jugador5:"Alonso",
        jugador6:"Gavi",
        jugador7:"Pedrí"
    },
    {
        id:'e3',
        equipo: 'Machester United',
        jugador1:"Heaton",
        jugador2:"Lindelof",
        jugador3:"Maguire",
        jugador4:"Shaw",
        jugador5:"Williams",
        jugador6:"Fernandez",
        jugador7:"Van De Beek"
    }
];

router.get('/',(req,res,next)=>{
    res.json({equipos : DUMMY_EQUIPOS})
});

router.get('/:eid',(req,res,next)=>{
    console.log(req.params.eid);
    const equipos = DUMMY_EQUIPOS.find(t=>{
        return t.id == req.params.eid;
    });
    res.json({equipos});
});

module.exports = router;
