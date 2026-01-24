const fs = require('fs');
const path = require('path');
const https = require('https');

const assets = [
    {
        url: 'https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js',
        dest: 'public/spline/spline-viewer.js'
    },
    {
        url: 'https://unpkg.com/@splinetool/modelling-wasm@1.12.15/build/process.wasm',
        dest: 'public/spline/process.wasm'
    }
];

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 302 || response.statusCode === 301) {
                downloadFile(response.headers.location, dest).then(resolve).catch(reject);
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
};

const main = async () => {
    const dir = path.join(process.cwd(), 'public/spline');
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    console.log('Starting Spline assets download...');

    for (const asset of assets) {
        const destPath = path.join(process.cwd(), asset.dest);
        try {
            await downloadFile(asset.url, destPath);
            console.log(`Downloaded: ${asset.dest}`);
        } catch (error) {
            console.error(`Failed to download ${asset.url}:`, error);
        }
    }
    console.log('Download complete.');
};

main();
