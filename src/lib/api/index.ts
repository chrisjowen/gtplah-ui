import type { Intent, Link, Message, Note } from '$lib/types';
import RestApi from './common/restApi';
import userApi from './userApi';
export default {

    user: userApi,
    message: new RestApi<Message>('/api/message'),
    link: new RestApi<Link>('/api/link'),
    note: new RestApi<Note>('/api/note'),
    intent: new RestApi<Intent>('/api/intent'),
   
}