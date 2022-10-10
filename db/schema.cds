namespace sap.capire.Users;

using { managed,cuid } from '@sap/cds/common';

entity Users : managed {
    key userId  : String(20);
        password  : String(20);
        Fname: String(20);
        Lname: String(20);
        phno: String(15);
}
