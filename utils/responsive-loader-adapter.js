/* eslint-disable */

const imageminPngquant = require('imagemin-pngquant');
const sharp = require('sharp');
const path = require('path');


function optimizePNG(resized, width, mime, options) {
    return new Promise(function (resolve, reject) {
        resized.toBuffer((err, data, info) => {
            if (err) {
                reject(err);
                return;
            }
            var height = info.height;
            return imageminPngquant()(data)
            .then((data) => {
                resolve({
                    data,
                    width,
                    height: height
                });
            })
            .catch((err) => {
                reject(err);
            });
        })
    })
}


function optimizeJPG(resized, width, mime, options) {
    return new Promise(function (resolve, reject) {
        if (options.background) {
            resized = resized.background(options.background).flatten();
        }

        if (mime === 'image/jpeg') {
            resized = resized.jpeg({
                quality: options.quality
            });
        }

        resized.toBuffer(function (err, data, info) {
            var height = info.height;

            if (err) {
                reject(err);
            } else {
                resolve({
                    data,
                    width,
                    height
                });
            }
        });
    })
}


module.exports = function (imagePath) {
    const image = sharp(imagePath);

    return {
        metadata: function metadata() {
            return image.metadata();
        },
        resize: function resize(params) {
            var width = params.width,
                mime = params.mime,
                options = params.options;

            var resized = image.clone().resize(width, null);

            if (path.extname(imagePath) === '.png') {
                return optimizePNG(resized, width, mime, options);
            } else {
                return optimizeJPG(resized, width, mime, options);
            }

        }
    };
};
