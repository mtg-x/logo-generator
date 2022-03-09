const communityNameInputDOM = document.querySelector("#communityNameInput");
const communityTagsInputDOM = document.querySelector("#communityTagsInput");

const generatedLogo = document.querySelector("#generatedLogo");
const communityNameDOM = document.querySelector("#communityNameLabel");
const communityTagsDOM = document.querySelector("#communityTagsLabel");
const generateButtonDOM = document.querySelector("#generateLogo");
const canvasDOM = document.querySelector("#logoCanvas");
const fontColorDOM = document.querySelector('#font-color');

const generateLogoDOM = document.querySelector("#generateLogo");
communityNameInputDOM.addEventListener('keyup', getCommunityName);
communityTagsInputDOM.addEventListener('keyup', getCommunityTags);
generateButtonDOM.addEventListener('click', generateLogo);

fontColorDOM.addEventListener('change', changeFontColor);

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
    const backgroundColor = document.querySelector('input[name=bgcolor]:checked').value;
    let bgColor = "rgba(0,0,0,0)";
    if (backgroundColor === 'light') {
        bgColor = "rgb(255,255,255)";
    } else if (backgroundColor === 'dark') {
        bgColor = "rgb(0,0,0)";
    }

    html2canvas(generatedLogo, { backgroundColor: bgColor, removeContainer: true }).then(canvas => {
        const image = canvas.toDataURL("image/png");
        var aDownloadLink = document.createElement('a');
        aDownloadLink.download = `MTG_${communityNameInputDOM.value}_logo.png`;
        aDownloadLink.href = image;
        aDownloadLink.click();
    });
}

function changeFontColor() {
    const fontColor = fontColorDOM.value;

    generatedLogo.style.color = fontColor;
}