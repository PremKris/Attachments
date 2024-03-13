module.exports = async function () {
    this.before('CREATE', 'Files', req => {
        console.log('Create called')
        console.log(JSON.stringify(req.data))
        req.data.url = `/odata/v4/my/Files(${req.data.ID})/content`
    })
    this.before('READ', 'Files', req => {
        //check content-type
        console.log('content-type: ', req.headers['content-type'])
    })
}


// const cds = require('@sap/cds');
// module.exports = cds.service.impl(async function () {
//     / SERVICE ENTITIES /
//     let {
//        Files,

//     } = this.entities;

   
//         this.before('CREATE', Files, req => {
//             console.log('Create called')
//             console.log(JSON.stringify(req.data))
//             req.data.url = `/odata/v4/attachments/Files(${req.data.ID})/content`
//         });
//     this.before('READ', 'Files', req => {
//         //check content-type
//         console.log('content-type: ', req.headers['content-type'])
//     })

// });