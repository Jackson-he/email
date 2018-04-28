const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')
var inlineBase64 = require('nodemailer-plugin-inline-base64');

const html = require('./n.js').html;
// 1. 创建
const transport = nodemailer.createTransport(smtpTransport({
    service: "qq",
    host: 'smtp.qq.com',  //查看发送邮件的邮箱开放的host
    port: 465,   //查看发送邮件的邮箱开放的port
    secure: false, //使用 SSL
    disableUrlAccess: false,
    disableFileAccess : false,
    auth: {
        user: '948306822@qq.com',  //发送邮件的邮箱
        // pass: '!h948306822'  //发送邮件的邮箱的密钥
        pass: 'exldceivgjpebdeb'  //发送邮件的邮箱的密钥
    }
}));

// transport.use('compile', inlineBase64({cidPrefix: 'somePrefix_'}));
// 2. 邮件的具体信息
const mailOptions = {
    from: '"Jay_he" <948306822@qq.com>',  //发送邮件的邮箱，与上面 user 相同
    to: 'hexujie0824@gmail.com, 948306822@qq.com',  //接收邮件的邮箱，如有多个，用逗号隔开
    subject: '测试邮件',  //邮件标题
    html: html, //邮件内容，可以为html
    attachments: [{
        cid: '00000001',
        path:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTlweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMTkgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7otKbljZXkv6Hmga88L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i55S15a2Q5a+56LSm5Y2V6YKu5Lu2MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwLjAwMDAwMCwgLTEzNC4wMDAwMDApIiBmaWxsPSIjQUJBRkI2Ij4KICAgICAgICAgICAgPGcgaWQ9Imxpc3QxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDEzNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJQYWdlLTEiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy4zMjQsOC45MjggQzEzLjYxNCw4LjkyOCAxMy44NDksOS4xNjMgMTMuODQ5LDkuNDUzIEMxMy44NDksOS43NDMgMTMuNjE0LDkuOTc4IDEzLjMyNCw5Ljk3OCBMMTAuNTA0LDkuOTc4IEwxMC41MDQsMTEuNTUzIEwxMy4zMjQsMTEuNTUzIEMxMy42MTQsMTEuNTUzIDEzLjg0OSwxMS43ODkgMTMuODQ5LDEyLjA3OSBDMTMuODQ5LDEyLjM2OSAxMy42MTQsMTIuNjA0IDEzLjMyNCwxMi42MDQgTDEwLjUwNCwxMi42MDQgTDEwLjUwNCwxNC4zNzQgQzEwLjUwNCwxNC42NjQgMTAuMjY4LDE0Ljg5OSA5Ljk3OCwxNC44OTkgQzkuNjg4LDE0Ljg5OSA5LjQ1MywxNC42NjQgOS40NTMsMTQuMzc0IEw5LjQ1MywxMi42MDQgTDcuMDIxLDEyLjYwNCBDNi43MzEsMTIuNjA0IDYuNDk2LDEyLjM2OSA2LjQ5NiwxMi4wNzkgQzYuNDk2LDExLjc4OSA2LjczMSwxMS41NTMgNy4wMjEsMTEuNTUzIEw5LjQ1MywxMS41NTMgTDkuNDUzLDkuOTc4IEw3LjAyMSw5Ljk3OCBDNi43MzEsOS45NzggNi40OTYsOS43NDMgNi40OTYsOS40NTMgQzYuNDk2LDkuMTYzIDYuNzMxLDguOTI4IDcuMDIxLDguOTI4IEw5LjI1OSw4LjkyOCBMNi40OTYsNi4yNDQgQzYuMzk5LDYuMTY1IDYuMzQyLDYuMDQ3IDYuMzQyLDUuOTIxIEM2LjM0Miw1Ljc5NiA2LjM5OSw1LjY3NyA2LjQ5Niw1LjU5OCBDNi43MDEsNS4zOTUgNy4wMzIsNS4zOTUgNy4yMzcsNS41OTggTDEwLjAxNSw4LjM3MSBMMTIuNzk5LDUuNTcyIEMxMy4wMDQsNS4zNjggMTMuMzM0LDUuMzY4IDEzLjUzOSw1LjU3MiBDMTMuNjM3LDUuNjYgMTMuNjkzLDUuNzg2IDEzLjY5Myw1LjkxOSBDMTMuNjkzLDYuMDUxIDEzLjYzNyw2LjE3NyAxMy41MzksNi4yNjUgTDEwLjc2MSw4Ljk0OSBMMTMuMzI0LDguOTQ5IEwxMy4zMjQsOC45MjggWiBNMTcsMCBMMy4zNDUsMCBDMi4xMTEsMC4wNzcgMS4xMjcsMS4wNiAxLjA1LDIuMjk1IEwxLjA1LDMuNDQgQzAuNDQzLDMuNjg5IDAuMDM0LDQuMjY1IDAsNC45MjEgQzAuMDM0LDUuNTc2IDAuNDQzLDYuMTUzIDEuMDUsNi40MDIgTDEuMDUsOC42OTcgQzAuNDQzLDguOTQ2IDAuMDM0LDkuNTIyIDAsMTAuMTc4IEMwLjAzNCwxMC44MzMgMC40NDMsMTEuNDEgMS4wNSwxMS42NTkgTDEuMDUsMTMuOTU0IEMwLjQ0MywxNC4yMDMgMC4wMzQsMTQuNzggMCwxNS40MzUgQzAuMDM0LDE2LjA5MSAwLjQ0MywxNi42NjcgMS4wNSwxNi45MTYgTDEuMDUsMTguMDUxIEMxLjA1LDE5LjIxMiAyLjE5LDE5Ljk1MiAzLjM1LDE5Ljk1MiBMMTcsMTkuOTUyIEMxNy41MTUsMTkuOTkgMTguMDIyLDE5LjgwMiAxOC4zODcsMTkuNDM3IEMxOC43NTQsMTkuMDcyIDE4Ljk0MywxOC41NjYgMTguOTA3LDE4LjA1MSBMMTguOTA3LDIuMjk1IEMxOC45MDcsMS4xMzQgMTguMTYxLDAgMTcsMCBaIiBpZD0i6LSm5Y2V5L+h5oGvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=='
    }]
};

// 3. 发送邮件
transport.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});
