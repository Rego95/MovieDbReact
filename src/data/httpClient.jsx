const API = "https://api.themoviedb.org/3/";

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDlmMjY4YTE3ZTk2MWRjMTNmZmNhNmQ5Yjc2NGI2ZCIsInN1YiI6IjYwOWFiMGVlZWZkM2MyMDAzYzk4MjJiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WKFVZz9EAkaWn4x3ElLveapLpUFsvRwWRca3Vyfyuk",
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    .then((result) => result.json());
}