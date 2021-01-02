// import axios from 'axios';
// import Axios from 'axios';
export const searchService = {
    getSearchresult
};



async function getSearchresult(url) {
    return fetch(url)
        .then(response => response.json())
        .then(commits => {
            return commits;
        });


}
