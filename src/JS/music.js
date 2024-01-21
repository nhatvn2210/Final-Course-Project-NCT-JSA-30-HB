// DOM

const musicRenderList = document.querySelector(".music-list");
const searchInput = document.querySelector("#search-input");

// Music list
let musicList = [
    {
        id: "0001",
        videoSrc: `<iframe src="https://www.youtube.com/embed/gOtfJ151ue4?si=rJ5SK_VP17232gfo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        name: "Tết Đong Đầy",
        credit: 'HOMIE BOIZ OFFICIAL'
    },
    {
        id: "0002",
        videoSrc: `<iframe src="https://www.youtube.com/embed/fMskPmI4tp0?si=xVN_RWcVF_jX4_F2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        name: "Tết Bình An",
        credit: 'HANA Cẩm Tiên, Đại Mèo'
    },
    {
        id: "0003",
        videoSrc: `<iframe src="https://www.youtube.com/embed/su2M0DcDHJM?si=uoy2R3XvDL1V3JkR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        name: "Mùa xuân ơi",
        credit: ' Vân Như Ft Đại Mèo Remix'
    },
    {
        id: "0004",
        videoSrc: `<iframe src="https://www.youtube.com/embed/d7k0FsVLB6E?si=af0n3DIV5glqc0cy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        name: "Ngày Tết quê Em",
        credit: 'Trung Đức & Yang Vy'
    },
    {
        id: "0005",
        videoSrc: `<iframe src="https://www.youtube.com/embed/6l11-YZOHzw?si=JW3LQnsr8gm6rmCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        name: "Chuyện cũ bỏ qua 2024",
        credit: 'Trúc Nhân'
    },
];
// Set the list to local storage
musicList = localStorage.setItem('music-render-list', JSON.stringify(musicList));
// Function
// Render music list
function renderMusic(selectedList) {
    // Declare a variable to store the elements
    let htmls = ``;
    // A loop to get data from selected list
    for (let i in selectedList) {
        let musicSrc = selectedList[i].videoSrc;
        let musicName = selectedList[i].name;
        let musicCredit = selectedList[i].credit;
        htmls += `
            <li class="music-element">
                <div class="video-frame">
                    ${musicSrc}
                </div>
                <div class="text">
                    <h5 class="bold-letter">${musicName}</h5>
                    <p>${musicCredit}</p>
                </div>
            </li>
        `
    }
    // Add to HTML
    musicRenderList.innerHTML = htmls;
}
// Search function
function searchMusic(searchKey, selectedList) {
    let filterMusic = selectedList.filter(function (music) {
        return music.name.toLowerCase().includes(searchKey.toLowerCase());
    })
    renderMusic(filterMusic);
}
// Main script

// Get music list from local storage

musicList = JSON.parse(localStorage.getItem('music-render-list')) || [];

// Call the render function

renderMusic(musicList);

// Start finding things

searchInput.addEventListener("input", function (event) {
    searchMusic(event.target.value, musicList);
})