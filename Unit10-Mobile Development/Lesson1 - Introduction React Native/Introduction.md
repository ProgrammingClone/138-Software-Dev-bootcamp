# 📱 Lesson 1 — Introduction to React Native + Expo

Welcome to your first mobile development class! 🎉

You already know **React** and **JavaScript**. In this course you'll use those skills to build real **iOS and Android apps** with **React Native** and **Expo**, whether you're on Windows, macOS or Linux, and whether you own an iPhone, an Android phone, or no phone at all.

> [!NOTE]
> **This course uses JavaScript only.** A short optional TypeScript crash course is included (`TypeScript.md`) because you'll meet TypeScript in docs and job descriptions, but none of our React Native code requires it.

---

## 🔖 Course Versions

Mobile tooling changes quickly, so we **pin one version for the whole course**. Everyone uses the same one, which means everyone sees the same behaviour and the same errors.

| Tool | Version we use |
|------|----------------|
| **Expo SDK** | **57** |
| React Native | 0.86 (comes with SDK 57) |
| React | 19.2 (comes with SDK 57) |
| Node.js | **LTS**: v24 recommended (v22.13+ also works) |
| Expo Go (phone app) | The latest version from the App Store / Google Play |

> [!IMPORTANT]
> **Do not upgrade the Expo SDK in the middle of the course**

---

## 🧭 What You'll Learn Today

By the end of this lesson you will be able to:

- ✅ Explain what **React Native** is and how it differs from React for the web
- ✅ Explain the difference between **Expo**, **Expo CLI**, **Expo Go**, **development builds** and **EAS**
- ✅ **Set up** a mobile development environment on your own computer and phone
- ✅ **Create, run and edit** an app on a real device or an emulator
- ✅ **Diagnose** the most common setup problems

**You need:** basic React (components, props, state, hooks) and modern JavaScript (ES6+). You do **not** need Swift, Kotlin, Xcode or Android Studio experience.

---

## 🔍 What Developers Need to Consider

When building a mobile app, keep these in mind:

- **Platform compatibility:** iOS, Android, or both?
- **Performance:** fully native gives the best raw performance, but React Native delivers near-native speed for most apps while sharing code.
- **User experience:** each platform has its own design conventions.
  - Android → **Material Design**
  - iOS → **Human Interface Guidelines**
- **Testing:** try your app on different devices, screen sizes and OS versions.
- **Publishing:** apps are distributed through **Google Play** (Android) and the **App Store** (iOS).

---

## ⚙️ Native vs. Cross-Platform

| Aspect | Native (Swift / Kotlin) | React Native (cross-platform) |
|--------|-------------------------|-------------------------------|
| Languages | Swift (iOS), Kotlin (Android) | JavaScript / TypeScript |
| Performance | 🏎️ Best possible | ⚡ Excellent for most apps |
| Code reuse | ❌ Separate codebase per platform | ✅ One codebase for both |
| Setup difficulty | 😩 Two toolchains to learn | 😊 Much easier with Expo |
| Ideal for | Apps that need deep platform-specific features | Most modern apps |

---

## ⚛️ What is React Native?

React Native is an open-source framework created by **Meta** that lets you build **native mobile apps using React**.

- You write **React components** in JavaScript. 
- React Native turns them into **real native UI elements** (a `<View>` becomes a native iOS view or Android view). It is **not a website inside a wrapper**.
- Your JavaScript runs on a small, fast engine called **Hermes** that ships inside your app.
- Modern React Native uses the **New Architecture**, where JavaScript and native code talk to each other directly. 


📘 Docs: [reactnative.dev](https://reactnative.dev)

### What stays the same vs. what changes (coming from React for the web)

**Stays the same:** components, JSX, props, state, hooks (`useState`, `useEffect`, …), conditional rendering, lists with `key`, and any pure-JavaScript npm package.

**Changes:** there is no browser, so there is no DOM, no HTML tags and no CSS files.

| On the web | In React Native | Notes |
|------------|-----------------|-------|
| `<div>` | `<View>` | The basic container |
| `<p>`, `<span>`, `<h1>` | `<Text>` | **All text must be inside `<Text>`** |
| `<img>` | `<Image>` | |
| `<button>` | `<Pressable>` / `<Button>` | |
| `<input>` | `<TextInput>` | |
| `<ul>` + `.map()` | `<FlatList>` | Efficient scrolling lists |
| `onClick` | `onPress` | |
| CSS files / classes | `StyleSheet.create({...})` | Styles are JavaScript objects (camelCase) |
| Layout with CSS | **Flexbox** | Default direction is **column**, not row |
| `window`, `document`, `localStorage` | ❌ not available | Mobile has its own APIs |

---

## 🚀 What is Expo?

**Expo** is a framework and set of tools built around React Native. It handles the hard, repetitive parts (native setup, build tooling, device APIs) so you can focus on writing your app.

### 🔑 What Expo gives you

- **No native setup to start:** no Xcode or Android Studio needed to run your first app.
- **Instant previews** on a real phone by scanning a QR code.
- A large library of ready-to-use **native features** (Camera, Location, Notifications, Sensors, File System, …).
- **Expo Router** for file-based navigation (we'll use it later in the course).
- **EAS (Expo Application Services)** to build and publish your app in the cloud.

The React Native team itself recommends starting new apps with a framework such as Expo. 📘 Docs: [docs.expo.dev](https://docs.expo.dev)

### 🆚 Expo vs. "bare" React Native CLI

| | **Expo** (recommended) | **React Native CLI** ("bare") |
|---|------------------------|-------------------------------|
| Setup | ✅ Install Node, run one command | ❌ Needs Android Studio **and** Xcode (Mac only for iOS) |
| `android/` and `ios/` folders | Generated for you when needed | You create and maintain them by hand |
| Using native libraries | Expo modules and config plugins; custom native code is possible via development builds | Full manual control |
| Over-the-air updates | ✅ **EAS Update** | Possible, but you wire it up yourself |
| Best for | Learning, and most production apps | Teams with very specific native requirements |


✅ **We use Expo for this whole course.** It works the same on every operating system.

---

## 🧰 The Expo Toolbox

### 1️⃣ Expo CLI: `npx expo …`
The command-line tool that runs and manages your project. **There is nothing to install globally.** You run it with `npx`.

| Command | What it does |
|---------|--------------|
| `npx create-expo-app@latest` | Creates a new project |
| `npx expo start` | Starts the development server and shows a **QR code in your terminal** |
| `npx expo install <package>` | Installs a library at the version that is **compatible with your SDK**. Use this instead of `npm install` for Expo/React Native libraries. |
| `npx expo-doctor` | Checks your project for common problems |

### 2️⃣ Expo Go: your instant preview app 📲
A free app for your phone that **runs your project without building it**. Start the dev server, scan the QR code, and your app appears on your device within seconds. Every time you save a file, the app updates automatically (**Fast Refresh**).

> [!WARNING]
> **Expo Go is a learning sandbox, not a production tool.**
> - Each version of Expo Go contains **exactly one SDK version**. The SDK of your project and the SDK of Expo Go **must match**.

### 3️⃣ Development builds: "your own Expo Go" 🛠️
A **development build** is a version of Expo Go built specifically for *your* app, including any native libraries you choose. It's what professionals use day to day. We start with Expo Go, and we'll introduce development builds when a lesson needs something Expo Go can't do.

### 4️⃣ EAS: Expo Application Services ☁️
Cloud services for taking an app to the stores:

- **EAS Build:** builds your Android (`.apk` / `.aab`) and iOS (`.ipa`) app files in the cloud.
- **EAS Submit:** uploads your app to Google Play or the App Store.
- **EAS Update:** sends JavaScript updates to installed apps without a new store release.

👉 We won't use EAS yet, but it's what powers Expo apps in production.

---

## 🖥️ What Runs Where? (OS Compatibility)

| Your computer | Run on your **Android phone** | Run on your **iPhone** | **Android Emulator** | **iOS Simulator** |
|---------------|:---:|:---:|:---:|:---:|
| **Windows** | ✅ Expo Go | ✅ Expo Go | ✅ (Android Studio) | ❌ Apple only allows it on a Mac |
| **macOS** | ✅ Expo Go | ✅ Expo Go | ✅ (Android Studio) | ✅ (Xcode) |
| **Linux** | ✅ Expo Go | ✅ Expo Go | ✅ (Android Studio) | ❌ Apple only allows it on a Mac |

The key takeaway is that **a Windows or Linux computer can still develop for iPhone**, because Expo Go on a real iPhone only needs your computer to run the development server. You do **not** need a Mac to follow this course.

### 🧭 Which path should I choose?

| What I have | My path | Backup |
|-------------|---------|--------|
| **Any computer + any phone** (Android or iPhone) | **Path A:** Expo Go on my phone ⭐ (fastest, recommended) | Path D |
| **Mac, no phone** | **Path B2:** iOS Simulator | Android Emulator |
| **Windows / Linux, no phone** | **Path B1:** Android Emulator | Path D |
| **Can't install software** (school lab PC, Chromebook) | **Path D:** Snack in the browser | Pair up with a classmate |

> [!TIP]
> If you have both a phone *and* want an emulator, **start with your phone**. Real devices are faster to set up and show exactly what users will see. Emulators are optional extras.

---

## 🛠️ Setup Guide

### ✅ Step 0: Create a free Expo account
Go to **[expo.dev/signup](https://expo.dev/signup)** and create an account. Remember your username and password.

> [!IMPORTANT]
> Expo Go on an **iPhone** now requires you to be **signed in to the same Expo account** in both the app *and* your terminal. Android will follow, so everyone should sign up today.

---


### ✅ Step 1: Install Expo Go on your phone

- 🍎 **iPhone:** [Expo Go on the App Store](https://apps.apple.com/app/expo-go/id982107779)
- 🤖 **Android:** [Expo Go on Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

Open Expo Go, tap the **account icon** (top-right of the Home tab) and **sign in** with your Expo account.

---

### ✅ Step 2: Create your first project

In your terminal, go to the folder where you keep your course work, then run:

```bash
npx create-expo-app@latest MyFirstApp --template blank@sdk-57
cd MyFirstApp
npx expo start
```

What each part means:

| Part | Meaning |
|------|---------|
| `npx` | Runs a tool without installing it globally |
| `create-expo-app@latest` | Always uses the newest version of the *project-creation tool* |
| `MyFirstApp` | Your project's folder name (no spaces) |
| `--template blank@sdk-57` | The **JavaScript-only** starter project, **pinned to SDK 57** so it matches Expo Go |
| `cd MyFirstApp` | Move into the new folder |
| `npx expo start` | Start the development server |

> [!NOTE]
> **Why `blank`?** If you leave out `--template`, you get the *default* template, which is written in **TypeScript**. `blank` is plain JavaScript with one `App.js` file.

**A quick tour of your new project:**

| File / folder | What it is |
|---------------|------------|
| `App.js` | ⭐ **Your app.** This is the file we edit. |
| `index.js` | The entry point. It registers `App` as the root component. You won't touch it. |
| `app.json` | App settings: name, icon, splash screen, orientation… |
| `package.json` | Your dependencies and scripts, just like any React project |
| `assets/` | Icons and images |
| `node_modules/` | Installed packages (never edit, never share) |

When the server starts, you'll see a **QR code in your terminal**. (There is no browser dashboard any more. Everything happens in the terminal.)

---

### ✅ Step 3: Open the app

**Path A: on your phone (same Wi-Fi as your computer)**

| Phone | How to open |
|-------|-------------|
| 🍎 **iPhone** | Open the normal **Camera** app → point it at the QR code → tap the banner → it opens in Expo Go |
| 🤖 **Android** | Open the **Expo Go** app → tap **Scan QR code** → scan the QR code in your terminal |

The first load takes a little longer. After that, you should see **"Open up App.js to start working on your app!"** 🎉

**Keyboard shortcuts** (type these in the terminal where Expo is running):

| Key | Action |
|-----|--------|
| `a` | Open on the Android emulator |
| `i` | Open on the iOS Simulator (Mac only) |
| `r` | Reload the app |
| `m` | Open the developer menu on the device |
| `j` | Open **React Native DevTools** (debugger) |
| `Ctrl + C` | Stop the server |

> [!TIP]
> **QR code not working?** Make sure your phone and computer are on the **same Wi-Fi**. School and public Wi-Fi often blocks devices from talking to each other. In that case, run `npx expo start --tunnel`, or connect your computer to your **phone's hotspot**.

**Path B1: Android Emulator** *(Windows / macOS / Linux, optional)*

1. Install **[Android Studio](https://developer.android.com/studio)** and complete its first-run setup (choose the *Standard* option).
2. Open **More Actions → Virtual Device Manager → Create Device**, pick a recent **Pixel** phone and a recommended system image, then start it.
3. Set up the `ANDROID_HOME` environment variable by following Expo's guide for your OS: **[docs.expo.dev → Set up your environment → Android Emulator](https://docs.expo.dev/get-started/set-up-your-environment/)**.
4. With the emulator running and `npx expo start` active, press **`a`**.

**Path B2: iOS Simulator** *(macOS only, optional)*

1. Install **Xcode** from the Mac App Store (it's a large download), open it once, and accept the license.
2. Install the command line tools: `xcode-select --install`
3. If Xcode asks you to install an iOS simulator runtime, accept.
4. With `npx expo start` running, press **`i`**. Expo installs Expo Go into the simulator for you.

**Path D: no installation (Snack)**

Go to **[snack.expo.dev](https://snack.expo.dev)** to edit and run React Native code **in your browser**, and preview it in a web simulator or on your phone with Expo Go. It's a great backup for today, but it's not a replacement for a real project.

---

### ✅ Step 4: Make your first change ✏️

Open the `MyFirstApp` folder in VS Code (`File → Open Folder`), then open **`App.js`**. Replace its contents with:

```jsx
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, React Native! 👋</Text>
      <Text style={styles.count}>You tapped {count} times</Text>

      <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Tap me</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  title: { fontSize: 24, fontWeight: 'bold' },
  count: { fontSize: 18 },
  button: {
    backgroundColor: '#4f46e5',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: { color: '#fff', fontSize: 16 },
});
```

**Save the file.** Your phone updates **instantly**. This is **Fast Refresh**. 

**🎯 Try this challenges:**

1. Change the title text and the button colour.


---

### ✅ Step 5: Debugging basics 🐞

- **`console.log()`** output appears in the **terminal** where `npx expo start` is running.
- Press **`j`** in the terminal to open **React Native DevTools** (console, component inspector, network).
- Red or yellow **error screens** on the phone are your friends: read the first line, it usually tells you exactly what's wrong.
- **Developer menu:** shake your phone, or press **`m`** in the terminal.

---


## 🩺 Troubleshooting

| Problem | What to try |
|---------|-------------|
| **`npx` / `npm` "cannot be loaded because running scripts is disabled"** (Windows PowerShell) | Run once: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`, then reopen PowerShell. |
| **`node` / `npx` not found** | Close and reopen your terminal after installing Node. Still failing? Reinstall Node LTS. |
| **"Project is incompatible with this version of Expo Go"** | The project's SDK and the Expo Go app's SDK don't match. Check you used `--template blank@sdk-57`, update Expo Go from the store, and **ask your instructor**. Don't install workarounds on your own. |
| **"You need to be signed in to Expo Go and Expo CLI"** (iPhone) | Run `npx expo login` in the terminal **and** sign in to Expo Go with the **same account**. Then tap **Try Again**. Check with `npx expo whoami`. |
| **QR code scans but the app never loads** | Same Wi-Fi? Try `npx expo start --tunnel` or your phone's hotspot. Temporarily check your computer's firewall. |
| **"Port 8081 is being used by another process"** | Press **Y** to use another port, or close the other Expo/Metro terminal. |
| **Red screen after installing a library** | Stop the server, then run `npx expo-doctor` and `npx expo start --clear`. Always install libraries with `npx expo install <name>`. |
| **Android Emulator not detected** | Start the emulator *first*, then press `a`. Check that `ANDROID_HOME` is set (Step 4, Path B1). |
| **Changes don't appear** | Press **`r`** in the terminal. If still stuck: stop the server and run `npx expo start --clear`. |

---

## 📚 Further Reading

- [React Native docs](https://reactnative.dev/docs/getting-started)
- [Expo docs: Get started](https://docs.expo.dev/get-started/set-up-your-environment/)
- [Expo Go vs. development builds](https://expo.dev/blog/expo-go-vs-development-builds)
- [Snack: try React Native in your browser](https://snack.expo.dev)
