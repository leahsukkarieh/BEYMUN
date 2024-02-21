const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const delegateRouter = require('./routes/postDelegate');
const delegationRouter = require('./routes/postDelegation');
const idRouter = require('./routes/lastDelegationId');
const delegateIdRouter = require('./routes/lastDelegateId');
const { initializeDatabase } = require('./db');
const fileUpload = require('express-fileupload');

const app = express();

const PORT = process.env.PORT || 5000;

initializeDatabase();

app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors({
  origin: 'http://localhost:3000' // Allow requests from frontend
}));

// Enable file upload
app.use(fileUpload());

// post individual delegate registration info to database
app.use('/api/delegate', delegateRouter);
app.use('/api/delegation', delegationRouter);
app.use('/api/id', idRouter);
app.use('/api/delegate-id', delegateIdRouter);

// Route for handling file uploads
app.post('/api/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const file = req.files.file;
  const id = req.body.id;
  const fileType = req.body.fileType;

  if (!id || !fileType) {
    return res.status(400).send('Missing required parameters.');
  }

  // Determine upload directory based on file type
  let uploadDir = '';
  if (fileType === 'positionPaper') {
    uploadDir = './uploads/positionPaper/';
  } else if (fileType === 'delegateNationalID') {
    uploadDir = './uploads/delegateNationalID/';
  } else if (fileType === 'delegateUniversityID') {
    uploadDir = './uploads/delegateUniversityID/';
  } else if (fileType === 'advisorNationalID') {
    uploadDir = './uploads/advisorNationalID/';
  } else if (fileType === 'paymentReceipt') {
    uploadDir = './uploads/paymentReceipt/';
  }

  // Move the file to the appropriate directory
  file.mv(path.join(uploadDir, `${id}-${file.name}`), (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.status(200).send('File uploaded successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
