let elmButton = document.querySelectorAll("button")[0];
elmButton.addEventListener("click", () => {
    let mujDiv = document.createElement("div");

    mujDiv.classList.add("ctverec");

    let elmKun = document.querySelectorAll(".kun")[0];
    elmKun.appendChild(mujDiv);
});