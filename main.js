const loadVideo = (iframe) => {
    

    const cid = "UC8eqKZX3qF8Nf-x6C55caVQ";

    const channelURL = encodeURIComponent(
        `https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`
    );

    const reqURL =
    `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

    const videoNumber = iframe.getAttribute("vnum");

    fetch(reqURL)
    .then(response => response.json())
    .then(result => {
        const link = result.items[videoNumber].link;
        const id = link.split("=").pop();

        iframe.src =
        `https://www.youtube.com/embed/${id}?controls=0&autoplay=0`;
    })
    .catch(err => console.error(err));
};

// grab all iframes from YOUR html
const iframes = document.getElementsByClassName("latestVideoEmbed");

// call the function once per iframe
for (let i = 0; i < iframes.length; i++) {
    loadVideo(iframes[i]);
}
