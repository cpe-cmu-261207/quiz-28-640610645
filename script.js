const imgProfile = document.querySelector("#img-profile");
const pName = document.querySelector("#p-name");
const pAddress = document.querySelector("#p-address");
const pEmail = document.querySelector("#p-email");
const btnRandom = document.querySelector("#btn-random");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  imgProfile.src = resp.data.result.picture;
  pName = resp.data.result.picture;
  pAddress = resp.data.picture;
  pEmail = resp.data.picture;
}

btnRandom.onclick = async () => {
  btnRandom.innerText = "Loading...";
  btnRandom.disabled = true;

  const resp = await axios.get("https://dog.ceo/api/breeds/image/random");
};
