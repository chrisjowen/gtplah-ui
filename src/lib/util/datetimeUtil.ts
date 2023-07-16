import type { TimeStampable } from "$lib/types";
import moment from "moment";

export function fromNow(when: any) {
    return moment.utc(when).fromNow();
}

export function updatedFromNow(when: TimeStampable) {
    return moment.utc(when.updated_at || when.inserted_at).fromNow();
}