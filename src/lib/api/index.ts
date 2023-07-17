import type { Intent, Link, Message, Note } from '$lib/types';
import RestApi from './common/restApi';
import userApi from './userApi';
export default {

    user: userApi,
    feedback: new RestApi<any>('/api/feedback'),
    
   
}