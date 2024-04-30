import { protectedInstance } from "./instance";

const jobServices = {
    getJobs: async () => {
        return await protectedInstance.get('/jobs');
    }
}

export default jobServices;