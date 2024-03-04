import { Router } from "express"
import { deleteAdmin, login, register, update } from "./admin.controller.js"
import { validateJwt } from "../middlewares/validate-jwt.js"

const api = Router()

api.post('/register', register)
api.post('/login', login)
api.put('/update/:id',[validateJwt], update)
api.delete('/delete/:id',[validateJwt], deleteAdmin)


export default api