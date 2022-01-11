const path = require('path');

describe('Upload tests', () => {
    it('Simple upload test', async () => {
        //Open browser
        await browser.url('https://the-internet.herokuapp.com/upload');

        console.log("P R I N T I N G   :      " + __dirname);
        //C:\Users\Adriana\Documents\Projects\wdio-course\test\data\1.png

        //Store test file path
        const filePath = path.join(__dirname, '../data/1.png');

        //Upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        //Set my filePath value in the input field
        await $('#file-upload').setValue(remoteFilePath);

        //click on upload byutton
        await $('#file-submit').click();

        //asserion
        await expect($('h3')).toHaveText('File Uploaded!');

    });
    it.only('Upload on a hidden input field', async() =>{
        //Open url
        await browser.url('/cart/');

        // store test file path
        const filePath =path.join(__dirname, '../data/1.png');

        // upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        //remove hidden class
        await browser.execute("document.querySelector('#upfile_1').className = ''");

        //set file path value
        await $('#upfile_1').setValue(remoteFilePath);

        //click ulpoad butto
        await $('#upload_1').click();

        //assertion
        await expect ($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully');

    });
});