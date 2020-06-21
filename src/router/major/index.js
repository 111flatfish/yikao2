import major from "../../views/major"
import perform from "../../views/major/perform"
import choreographer from "../../views/major/choreographer"
import broadcasting from "../../views/major/broadcasting"

export default {
    path:"/major",
    component:major,
    children:[
        {
            path:"perform",
            component:perform,
            meta:{
                keepAlive:true
            }
        },
        {
            path:"choreographer",
            component:choreographer,
            meta:{
                keepAlive:true
            }
        },
        {
            path:"broadcasting",
            component:broadcasting,
            meta:{
                keepAlive:true
            }
        }
    ]
}
