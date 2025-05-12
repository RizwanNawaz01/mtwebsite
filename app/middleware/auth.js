
export default defineNuxtRouteMiddleware( async(event)=>{ 
    if(process.client)return;
    const {$verifyJwtToken} = useNuxtApp()
    const custom_jwt = useCookie('NoteNestJWT')
    if(!custom_jwt.value){
        return navigateTo('/login')
    }

    try{
        await $verifyJwtToken(jwt.value,process.env.JWT_SECRET)

    }catch(error){
        navigateTo('/login')
    }
    
})