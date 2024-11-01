// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    name?: string;
    login: string;
    company?: string;
    avatar_url?: string;
    location?: string;
    email?: string;
    bio? : string;
}
export default Candidate;