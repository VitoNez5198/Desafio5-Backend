const express = require('express');
const app = express();
const morgan = require('morgan');
const { getJoyas, getJoyasFiltros } = require("./consultas");
const { superMiddleware } = require('./middleware');

app.use(morgan('dev'));
app.use(express.json());

app.listen(3000, () => {
    console.log('listening on port http://localhost:3000');
});

app.get("/joyas", superMiddleware, async (req, res) => {
    try {
        const { limits = 2, page = 1, order_by = 'id_ASC' } = req.query;
        const joyas = await getJoyas({ limits, page, order_by });

        // Agregar la estructura HATEOAS a la respuesta
        const nextPage = parseInt(page) + 1;
        const prevPage = parseInt(page) - 1;

        const response = {
            data: joyas,
            links: {
                self: req.originalUrl,
                next: `/joyas?limits=${limits}&page=${nextPage}&order_by=${order_by}`,
                prev: `/joyas?limits=${limits}&page=${prevPage}&order_by=${order_by}`,
            },
        };

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get("/joyas/filtros", superMiddleware, async (req, res) => {
    try {
        const { precio_max, precio_min, categoria, metal } = req.query;
        const joyas = await getJoyasFiltros({ precio_max, precio_min, categoria, metal });

        res.json(joyas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
