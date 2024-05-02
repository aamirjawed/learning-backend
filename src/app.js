import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({ // this is useful when we do cross orign request
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(express.json({ //receiving json file and limit is only 16 kb here it could be anything as per the requiremnt
    limit:"16kb"
}))

app.use(express.urlencoded({ // this encode the query data to ensure the smooth flow of data
    extended:true,
    limit:"16kb"
}))

app.use(express.static("public")) // this is useful when we want to upload static files likes image, pdf etc on the server and the public
                                 // is a folder name, the folder name could be anything


app.use(cookieParser())
export {app}