const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const villains = ['sauron', 'saruman', 'melkor', 'shelob', 'gollum', 'orc'];

    res.status(200).json(villains);
});

module.exports = router;
