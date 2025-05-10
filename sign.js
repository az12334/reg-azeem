document.querySelector(".btn-one").addEventListener("click", function() {
    const username = document.querySelector("#Username").value.trim();
    const password = document.querySelector("#Password").value.trim();
    const checkbox = document.querySelector("#checkbox").checked;
    if (username === "" || password === "") {
        alert("Username and password cannot be empty.");
        return;
    }
    if (!checkbox) {
        alert("Please accept the Terms and Conditions to proceed.");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    alert("Login successful!");
});
function showForgetPassword(){
    let form=document.querySelector("#forget-password");
    form.style.display="block";
    form.style.opacity="1";
}