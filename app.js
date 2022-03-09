const communityNameInputDOM = document.querySelector("#communityNameInput");
const communityTagsInputDOM = document.querySelector("#communityTagsInput");

const generatedLogo = document.querySelector("#generated-logo");
const communityNameDOM = document.querySelector("#communityNameLabel");
const communityTagsDOM = document.querySelector("#communityTagsLabel");
const generateButtonDOM = document.querySelector("#generateLogo");
const canvasDOM = document.querySelector("#logoCanvas");
const transparentDetailsDom = document.querySelector("#transparent-details");
const generateLogoDOM = document.querySelector("#generateLogo");

communityNameInputDOM.addEventListener('keyup', getCommunityName);
communityTagsInputDOM.addEventListener('keyup', getCommunityTags);
generateButtonDOM.addEventListener('click', generateLogo);

const darkThemeRadioDOM = document.querySelector("input[name=bgcolor][value=dark]");
darkThemeRadioDOM.addEventListener('change', function () {
    document.body.classList = "theme-dark theme-dark-font";
    transparentDetailsDom.style.display = "none";
    resetLogoFontColors();
    darkFontRadioDOM.checked = true;
});

const lightThemeRadioDOM = document.querySelector("input[name=bgcolor][value=light]")
lightThemeRadioDOM.addEventListener('change', function () {
    document.body.classList = "theme-light theme-light-font";
    transparentDetailsDom.style.display = "none";
    resetLogoFontColors();
    lightFontRadioDOM.checked = true;
});

document.querySelector("input[name=bgcolor][value=transparent]").addEventListener('change', function () {
    transparentDetailsDom.style.display = "block";
});

const darkFontRadioDOM = document.querySelector("input[name=fontcolor][value=dark]");
darkFontRadioDOM.addEventListener('change', function () {
    generatedLogo.classList.add("theme-dark-font");
    generatedLogo.classList.remove("theme-light-font");
});

const lightFontRadioDOM = document.querySelector("input[name=fontcolor][value=light]")
lightFontRadioDOM.addEventListener('change', function () {
    generatedLogo.classList.add("theme-light-font");
    generatedLogo.classList.remove("theme-dark-font");
});

const citiesList = ['Paris', 'Aix', 'Toulouse', 'Clermont', 'Lille', 'Strasbourg', 'Luxembourg', 'Lyon', 'Grenoble', 'Bordeaux', 'Nantes', 'Rennes', 'Tours'];
const tagsList = ['Azure', '.NET', 'DevOps', 'TypeScript']

communityNameInputDOM.placeholder = `ex: ${getRandomItem(citiesList)}`;
communityTagsInputDOM.placeholder = `ex: ${getRandomItem(tagsList)}`;


// Pre-fill Fields if present in URL
const params = new URLSearchParams(window.location.search)
if (params.has('city')) {
    communityNameInputDOM.value = params.get('city');
    getCommunityName();
}
if (params.has('tag')) {
    communityTagsInputDOM.value = params.get('tag');
    getCommunityTags();
}


function resetLogoFontColors() {
    generatedLogo.classList.remove("theme-light-font");
    generatedLogo.classList.remove("theme-dark-font");
}

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

    const bg = getComputedStyle(generatedLogo).getPropertyValue('--bg-color');

    let options = {
        removeContainer: true,
        backgroundColor: bg
    };

    if (document.querySelector("input[name=bgcolor][value=transparent]").checked) {
        options.backgroundColor = 'rgba(0, 0, 0, 0)';

    }

    const canva = generatedLogo.querySelector('#canva');
    html2canvas(canva, options).then(canvas => {
        const image = canvas.toDataURL("image/png");
        const aDownloadLink = document.createElement('a');
        aDownloadLink.download = `MTG_${communityNameInputDOM.value}_logo.png`;
        aDownloadLink.href = image;
        aDownloadLink.click();
    });
}
