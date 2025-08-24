const ImageKit = require("imagekit") ;

var imagekit = new ImageKit({
    publicKey : process.env.PUBLIC_KEY,
    privateKey : process.env.PRIVATE_KEY,
    urlEndpoint : process.env.URL_ENDPOINT
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