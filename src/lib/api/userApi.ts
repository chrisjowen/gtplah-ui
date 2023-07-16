import type { Intention, User } from "$lib/types";
import RestApi from "./common/restApi";

class UserApi extends RestApi<User> {

    constructor() {
        super("/api/user");
    }
    me() {
        return this.client.get("/me");
    }
    profile(id: String) {
        return new RestApi(`${this.path}/${id}/profile`);
    }

  
}

export default new UserApi(); 