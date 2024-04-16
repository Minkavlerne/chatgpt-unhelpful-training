const SERVER_URL = "http://localhost:8080/api/v1/";

document.getElementById("form-training").addEventListener("submit", getTraining);

async function getTraining(e) {
    e.preventDefault();
    const URL = `${SERVER_URL}training?about=${document.getElementById("about").value}`;
    const spinner = document.getElementById("spinner");
    const result = document.getElementById("result");
    result.style.color = "black";
    try {
        spinner.style.display = "block";
        const res = await fetch(URL).then(handleHttpErrors);
        document.getElementById("result").innerText = res;
    } catch (error) {
        result.style.color = "red";
        result.innerText = error.message;
    } finally {
        spinner.style.display = "none";
    }
}

async function handleHttpErrors(res) {
    if (!res.ok) {
        const errorResponse = await res.json();
        const msg = errorResponse.message ? errorResponse.message : "No error details provided";
        throw new Error(msg);
    }
    return res.json();
}
