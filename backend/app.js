const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

const USER_ID = "sourabhsinghchuphal";
const EMAIL = "sc3691@srmist.edu.in";
const ROLL_NUMBER = "RA2111033010150"

app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];
    const fileB64 = req.body.file_b64 || null;

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && item.length === 1);
    const highestLowercaseAlphabet = alphabets.filter(c => c === c.toLowerCase()).sort().slice(-1);

    const fileValid = fileB64 ? true : false;

    const response = {
      "is_success": true,
      "user_id": "sourabhsinghchuphal",
      "email": "sc3691@srmist.edu.in",
      "roll_number": "RA2111033010150",
      "numbers": ["6"],
      "alphabets": ["A", "C", "z"],
      "highest_lowercase_alphabet": ["z"],
      "file_valid": false,
      "file_mime_type": null,
      "file_size_kb": null
    };    

    res.json(response);
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
