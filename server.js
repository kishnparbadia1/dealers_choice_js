const express = require("express");
const ramenData = require("./ramenData")
const path = require('path')


const app = express();

// middleware for css stylesheet
const staticMiddleware = express.static(path.join(__dirname, 'public'))

app.use(staticMiddleware)

//logging middleware
const morgan = require("morgan");

app.use(morgan('dev'));

//pulls ramenData
const noodles = ramenData.list()

app.get("/", (req, res, next) => {
    const html = `
    <html>
        <head>
            <title>Ramen Reviews</title>
            <link rel='stylesheet' href='/styles.css' />
        </head>
        <body>
            <h1>Ramen Reviews</h1>
            <ul>
            ${
                noodles.map(noodle => {
                    return `
                    <li>
                        <a href='/noodles/${ noodle.id }'>
                        ${ noodle.title }
                    </li>
                `;
                }).join('')
            }
            </ul>
        </body>
    </html>
    `;
    res.send(html)
});

//need to set up a route for when you click on a noodles link
app.get('/noodles/:id', (req, res, next) => {
    //console.log(req.params.id) //shows id
    //const id = req.params.id //did not work
    //const noodle = noodles.find(id) did not work
    const noodle = noodles.find(noodle => noodle.id === req.params.id*1)  //turns string to number

    if (!noodle) {
        //if noodle not found, set HTTP status to 404 and send not found HTML
        res.status(404)
        const html = `
        <html>
        <head>
          <title>Ramen Reviews</title>
          <link rel='stylesheet' href='/styles.css' />
        </head>
        <body>
          <h1>Ramen Reviews</h1>
            <a href='/'>Back to noodles</a>
            <p> ...Page Not Found</p>
            <img src="https://media.giphy.com/media/q2ePk5TyEq8da/giphy.gif" />
          </div>
        </body>
        </html>
        `;
        res.send(html)

    } 
    else{
    const html = `
        <html>
            <head>
                <title>Noodle</title>
                <link rel='stylesheet' href='/styles.css' />
            </head>
            <body>
                <a href='/'>Back to noodles</a>
                <h1>${ noodle.title }</h1>
                <p>${ noodle.rating }</p>
                <div></div>
                <p>${ noodle.content }</p> 
            </body>
        </html>
    `;
    res.send(html)
    }
})

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});