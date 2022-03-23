import express from 'express';
const router = express.Router();

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// equals to index.html
router.get('/', (req, res) => {
    console.log('on homepage');
    res.sendFile(path.join(__dirname, '../views/index.html'));

})

router.get('/video', (req, res) => {
    console.log('on page of video');
    res.sendFile(path.join(__dirname, '../views/video.html'));
})

router.get('/audio', (req, res) => {
    console.log('on page of audio');
    res.sendFile(path.join(__dirname, '../views/audio.html'));
})


//404 page catches all broken routes
router.use((req, res) => {
    console.log('page does not exist');
    res.sendFile(path.join(__dirname, '../views/404.html'));
})


export default router;