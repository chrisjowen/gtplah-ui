
import axios from "axios";

class WorkflowApi  {

    template(args: any) {
        return axios.post(`/api/workflow/template`, args)
    }
    resources(args: any) {
        return axios.post(`/api/workflow/problem_resources`, args)
    }
    obstacles(args: any) {
        return axios.post(`/api/workflow/problem_obstacles`, args)
    }
}

export default new WorkflowApi();