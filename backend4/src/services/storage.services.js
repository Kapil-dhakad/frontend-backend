const ImageKit = require("imagekit") ;

var imagekit = new ImageKit({
    publicKey : "public_gM3BTMT2nztyzCp83a9QjgGEd1w=",
    privateKey : "private_TbfS51HTQpZvBYvAzZsisEad+N8=",
    urlEndpoint : "https://ik.imagekit.io/wz8yoywsv"
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