using { sap.capire.Users as db } from '../db/schema';

service UserService {
     entity Users  as projection on db.Users;
     action Userlogin (id: Users:userId , password: Users:password);
}