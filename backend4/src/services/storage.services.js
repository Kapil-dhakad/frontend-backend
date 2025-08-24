const ImageKit = require("imagekit") ;

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(file, fileName) {
    try {
        const result = await imagekit.upload({
            file,
            fileName
        });
        return result;
    } catch (error) {
        console.error("Upload failed:", error);
    }
}

module.exports = uploadFile