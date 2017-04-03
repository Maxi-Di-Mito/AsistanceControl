/**
 * Created by maximiliano.dimito on 2/9/2017.
 */
import {renderToString} from 'react-dom/server';
import React from 'react';
import App from '../www/app/App';

const renderFullPage = (component) => {

    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                    <title>Title</title>
                    <link href='styles.css' rel='stylesheet' type='text/css'>
        </head>
        <body style="margin:0px">
    
        <div id="app">${component}</div>
        </body>
        <script src="js/bundle.js"></script>
        </html>`
    ;
};

const serverRender = ( req, res, next) => {

    res.status(200).header("Content-Type", "text/html; charset=utf-8").end(renderFullPage(renderToString(<App/>)));
};

export default serverRender;