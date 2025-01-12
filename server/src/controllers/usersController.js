import usersService from '#src/services/usersService'


const exposeController = {

    allUsers:async (req,res)=>{
        const allUsers = await usersService.findAllUsers()
        return res.json(allUsers)
    },
    createUser:async (req,res)=>{
        const {body}  = req
        try {
                const registeredUser = await usersService.createUser(body)     
                return res.json(registeredUser)
            } catch (error) {
               console.log(error);

               return res.sendStatus(400)
            // return res.json({error})
        }
        
    }


}

export default exposeController