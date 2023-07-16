import { goto } from "$app/navigation";
import { auth } from "$lib/store/index";
import type { IdentifiableOwnedSchema, Problem } from "$lib/types";

let loggedInUser: any = null;

auth.subscribe((value: any) => {
    loggedInUser = value.loggedInUser;
});

export function redirectIfNotLoggedIn() {
    if (!loggedInUser) {
        goto('/login');
    }
}

export function isLoggedIn() {
    return loggedInUser != null;
}

export function isOwnedByMe(entity: IdentifiableOwnedSchema) {
    return  loggedInUser?.id  == entity.user_id ;
}

export function isMember(problem: Problem) {
    let member = membership(problem)
    return  loggedInUser?.id  == problem.user_id || member?.status == "active";
}

export function invited(problem: Problem) {
    let member = membership(problem)
    return  member?.status == "invited";
}

export function requested(problem: Problem) {
    let member = membership(problem)
    return  member?.status == "requested";
}


export function isAnyMember(problem: Problem) {
    let member = membership(problem)
    return  loggedInUser?.id  == problem.user_id || member != null;
}

export function isAdminMember(problem: Problem) {
    let member = membership(problem)
    return  loggedInUser?.id  == problem.user_id || member?.role == "admin" && member?.status == "active";
}

export function membership(problem: Problem) {
    return problem?.problem_users?.find((pu: any) => pu.member_id == loggedInUser?.id);
}