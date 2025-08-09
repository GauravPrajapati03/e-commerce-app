import app from "./app.js";

const PORT = process.env.PORT || 4000;
const url = `http://localhost:${PORT}`;


app.get('/', (req, res) => {
    res.send("Server is Running");
})



app.listen(PORT, () => {
    console.log(`Server listening on ${url}`);
})