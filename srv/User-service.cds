using my.loginpage as my from '../db/schema';

service UserService{
    @Capabilities:{ Insertable: true, Updatable:true, Deletable:false}
    entity Users as projection on my.Users; 
}