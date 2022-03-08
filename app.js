const communityNameInputDOM = document.querySelector("#communityNameInput");
const communityTagsInputDOM = document.querySelector("#communityTagsInput");

const generatedLogo = document.querySelector("#generatedLogo");
const communityNameDOM = document.querySelector("#communityNameLabel");
const communityTagsDOM = document.querySelector("#communityTagsLabel");

const downloadLogoDOM = document.querySelector("#downloadLogo");
communityNameInputDOM.addEventListener('keyup', getCommunityName);
communityTagsInputDOM.addEventListener('keyup', getCommunityTags);

const citiesList = ['Paris', 'Aix', 'Toulouse', 'Clermont', 'Lille', 'Strasbourg', 'Luxembourg', 'Lyon', 'Grenoble', 'Bordeaux', 'Nantes', 'Rennes', 'Tours'];
const tagsList = ['Azure', '.NET', 'DevOps', 'TypeScript']

communityNameInputDOM.placeholder = `ex: ${getRandomItem(citiesList)}`;
communityTagsInputDOM.placeholder = `ex: ${getRandomItem(tagsList)}`;

function getCommunityName() {
    const communityName = communityNameInputDOM.value;
    communityNameDOM.innerHTML = communityName;
}

function getCommunityTags() {
    const tags = communityTagsInputDOM.value;
    communityTagsDOM.innerHTML = tags;
}


function getRandomItem(cities) {
    return cities[Math.floor(Math.random() * cities.length)];
}