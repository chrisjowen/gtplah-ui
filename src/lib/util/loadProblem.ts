
import { selectedProblem } from "$lib/store/index";
import { page } from "$app/stores";
import api from "$lib/api";


// export function loadProblem(selectedProblem) {
//     if (selectedProblem) {
//         problem = selectedProblem;
//     } else {
//         api.problem.get($page.params.id, ["products", "sector"]).then((res) => {
//             $selectedProblem = res.data;
//             problem = res.data;
//         });
//     }
// }