var requireDir,
    dotenv;

requireDir = require('require-dir');
dotenv = require('dotenv').config();

requireDir(
    './gulp/tasks',
    {
        recurse: true
    }
);
