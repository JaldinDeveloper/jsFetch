function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadingAnimation(){
    const loader = document.getElementById("loader");
    loader.style.visibility = "visible";
    await timeout(2000);
    loader.style.visibility = "hidden";
}

module.exports = { loadingAnimation};