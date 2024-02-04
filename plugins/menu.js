const { cmd, commands } = require('../command');
const config = require('../config')
cmd({
    pattern: "downmenu",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `┌───[🍭Zero-Two🍭]

   *DOWNLOAD COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
  if(!commands[i].dontAddCommandList){
menuc += `*👨🏼‍🚀Command :* ${commands[i].pattern}
*💭Desc :* ${commands[i].desc}
*🙇🏻‍♂️Use:* ${commands[i].use}\n\n`
}}};

let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'GET BOT\'S SCRIPT'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'GET BOT\'S PING'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: config.LOGO },
    caption: menuc,
    footer: config.FOOTER,
    headerType: 4,
    buttons: generatebutton
  };
  return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})

cmd({
    pattern: "searchmenu",
    react: "🕵🏻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `┌───[🍭Zero-Two🍭]

   *SEARCH COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){
menuc += `*👨🏼‍🚀Command :* ${commands[i].pattern}
*💭Desc :* ${commands[i].desc}
*🙇🏻‍♂️Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'GET BOT\'S SCRIPT'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'GET BOT\'S PING'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: config.LOGO },
    caption: menuc,
    footer: config.FOOTER,
    headerType: 4,
    buttons: generatebutton
  };
  return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})

cmd({
    pattern: "convertmenu",
    react: "🔄",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `┌───[🍭Zero-Two🍭]

   *CONVERT COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'convert'){
  if(!commands[i].dontAddCommandList){
menuc += `*👨🏼‍🚀Command :* ${commands[i].pattern}
*💭Desc :* ${commands[i].desc}
*🙇🏻‍♂️Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'GET BOT\'S SCRIPT'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'GET BOT\'S PING'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: config.LOGO },
    caption: menuc,
    footer: config.FOOTER,
    headerType: 4,
    buttons: generatebutton
  };
  return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})

cmd({
    pattern: "othermenu",
    react: "👾",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `┌───[🍭Zero-Two🍭]

   *OTHER COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'misc'){
if(!commands[i].dontAddCommandList){
menuc += `*👨🏼‍🚀Command :* ${commands[i].pattern}
*💭Desc :* ${commands[i].desc}
*🙇🏻‍♂️Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'GET BOT\'S SCRIPT'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'GET BOT\'S PING'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: config.LOGO },
    caption: menuc,
    footer: config.FOOTER,
    headerType: 4,
    buttons: generatebutton
  };
  return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})

cmd({
  pattern: "ownermenu",
  react: "💼",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `┌───[🍭Zero-Two🍭]

   *OWNER COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'owner'){
if(!commands[i].dontAddCommandList){
menuc += `*👨🏼‍🚀Command :* ${commands[i].pattern}
*💭Desc :* ${commands[i].desc}
*🙇🏻‍♂️Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'GET BOT\'S SCRIPT'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'GET BOT\'S PING'
    },
    type: 1
  }]
let buttonMessaged = {
  image: { url: config.LOGO },
  caption: menuc,
  footer: config.FOOTER,
  headerType: 4,
  buttons: generatebutton
};
return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
reply('*ERROR !!*')
l(e)
}
})

cmd({
  pattern: "adminmenu",
  react: "🛡️",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*● ══════════════ ●*

   *ADMIN COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'admin'){
if(!commands[i].dontAddCommandList){
menuc += `*👨🏼‍🚀Command :* ${commands[i].pattern}
*💭Desc :* ${commands[i].desc}
*🙇🏻‍♂️Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'GET BOT\'S SCRIPT'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'GET BOT\'S PING'
    },
    type: 1
  }]
let buttonMessaged = {
  image: { url: config.LOGO },
  caption: menuc,
  footer: config.FOOTER,
  headerType: 4,
  buttons: generatebutton
};
return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
reply('*ERROR !!*')
l(e)
}
})

cmd({
  pattern: "logomenu",
  react: "🎡",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*● ══════════════ ●*

   *LOGO COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'logo'){
if(!commands[i].dontAddCommandList){
menuc += `*👨🏼‍🚀Command :* ${commands[i].pattern}
*💭Desc :* ${commands[i].desc}
*🙇🏻‍♂️Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'GET BOT\'S SCRIPT'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'GET BOT\'S PING'
    },
    type: 1
  }]
let buttonMessaged = {
  image: { url: config.LOGO },
  caption: menuc,
  footer: config.FOOTER,
  headerType: 4,
  buttons: generatebutton
};
return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
reply('*ERROR !!*')
l(e)
}
})