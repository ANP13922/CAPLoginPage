namespace sap.capire.Users;

using { managed,cuid } from '@sap/cds/common';

entity Users : managed {
    key userId  : String(20);
        password  : String(20);
}
