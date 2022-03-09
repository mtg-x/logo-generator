const communityNameInputDOM = document.querySelector("#communityNameInput");
const communityTagsInputDOM = document.querySelector("#communityTagsInput");

const generatedLogo = document.querySelector("#generated-logo");
const communityNameDOM = document.querySelector("#communityNameLabel");
const communityTagsDOM = document.querySelector("#communityTagsLabel");
const generateButtonDOM = document.querySelector("#generateLogo");
const canvasDOM = document.querySelector("#logoCanvas");

const generateLogoDOM = document.querySelector("#generateLogo");
communityNameInputDOM.addEventListener('keyup', getCommunityName);
communityTagsInputDOM.addEventListener('keyup', getCommunityTags);
generateButtonDOM.addEventListener('click', generateLogo);

document.querySelector("input[name=bgcolor][value=dark]").addEventListener('change', function () {
    document.body.classList = "theme-dark";
});

document.querySelector("input[name=bgcolor][value=light]").addEventListener('change', function () {
    document.body.classList = "theme-light";
});

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

function generateLogo() {

    const options = {};
    html2canvas(generatedLogo, options).then(canvas => {
        const image = canvas.toDataURL("image/png");
        var aDownloadLink = document.createElement('a');
        aDownloadLink.download = `MTG_${communityNameInputDOM.value}_logo.png`;
        aDownloadLink.href = image;
        aDownloadLink.click();
    });
}
