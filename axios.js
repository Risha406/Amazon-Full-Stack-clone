import axios from "axios";

const instance =axios.create({
    baseURL:'https://us-central1-clone-7302f.cloudfunctions.net/api'  //The api (cloud function) URL
});

export default instance;




//http://localhost:5001/clone-7302f/us-central1/api