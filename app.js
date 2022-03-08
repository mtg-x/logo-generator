const communityNameInputDOM = document.querySelector("#communityNameInput");
const communityTagsInputDOM = document.querySelector("#communityTagsInput");

const generatedLogo = document.querySelector("#generatedLogo");
const communityNameDOM = document.querySelector("#communityNameLabel");
const communityTagsDOM = document.querySelector("#communityTagsLabel");

const downloadLogoDOM = document.querySelector("#downloadLogo");
communityNameInputDOM.addEventListener('keyup', getCommunityName);
communityTagsInputDOM.addEventListener('keyup', getCommunityTags);

function getCommunityName() {
    const communityName = communityNameInputDOM.value;
    communityNameDOM.innerHTML = communityName;
}

function getCommunityTags() {
    const tags = communityTagsInputDOM.value;
    communityTagsDOM.innerHTML = tags;
}
