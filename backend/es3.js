const AWS = require("aws-sdk");
const fs = require("fs");

// Configure AWS SDK credentials
AWS.config.update({
  accessKeyId: "AKIAREIL574EU3MXXROP",
  secretAccessKey: "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",
  region: "us-east-1",
});

// Create an S3 service object
const s3 = new AWS.S3();

const uploadImage = async (req, res, next) => {
  try {
    const file = req.file;
    if (!file) {
      throw Error("No file selected");
    }
    const bucketName = "nayvy-clone-bucket";
    const key = `path/to/${file.originalname}`;

    const fileContent = fs.readFileSync(file.path);

    const params = {
      Bucket: bucketName,
      Key: key,
      Body: fileContent,
    };

    const response = await s3.upload(params).promise();
    console.log("Image uploaded successfully:", response);

    // Delete the temporary file
    fs.unlinkSync(file.path);

    req.loc = response.Location;
    next();

    // res.status(200).json({
    //   message: "Image uploaded successfully",
    //   location: response.Location,
    // });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = uploadImage;
