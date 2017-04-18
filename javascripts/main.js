images = [];

images[images.length] = "http://i2.kym-cdn.com/photos/images/facebook/001/144/789/e3c.jpg";
images[images.length] = "https://img.memesuper.com/b23e4d138aa6b97d06d3b48123f4c842_hey-yall-got-any-dank-memes-dank-meme_600-470.jpeg";
images[images.length] = "https://teespring-storecontent.s3.amazonaws.com/aw3JO_9Hmn_CftstNvZZoQ_store_banner_image?1479355269730";
images[images.length] = "https://i.imgflip.com/sqrng.jpg";
images[images.length] = "https://img.memesuper.com/73ef5af66d08e5d74f0b5b950888425c_do-you-even-dank-meme-bro-dank-meme-bro_400-400.jpeg";
images[images.length] = "https://i.imgflip.com/oh6p7.jpg";
images[images.length] = "https://img.memesuper.com/c09fa1572de10198fc492c78c65b3a33_-consist-of-dank-memes-what-is-dank-memes_500-500.png";
images[images.length] = "http://i2.kym-cdn.com/photos/images/newsfeed/000/875/516/de9.jpg";
images[images.length] = "http://cdn.ebaumsworld.com/mediaFiles/picture/397818/85104107.png";
images[images.length] = "https://i.imgflip.com/15c14o.jpg";

$("#output").html(function() {
    ops = `<div class="row">`;
    images.forEach(function(url, index) {
        if (index % 3 === 0 && index !== 0) {
            ops += `</div><div class="row">`;
        };
        ops += `<div class="col-md-4"><img src="${url}" class="img-responsive"></div>`;
    });
    ops += `</div>`;
    return ops;
});