# 📱 Nutralist — React Native (Expo) App

A React Native mobile app built using Expo, EAS, and Google Sign-In with support for native development builds. This project includes preconfigured native modules via `app.json` and `eas.json`, making it easy to clone, install, and continue developing.

## 🚀 Features

- ⚛️ Expo SDK with file-based routing (`expo-router`)
- 🔐 Google Sign-In (native using `@react-native-google-signin/google-signin`)
- 🧪 Development build ready (via EAS)
- 📱 Works on Android + iOS (iOS requires provisioning config)
- 🔧 Preconfigured `app.json` + `eas.json`
- 📦 Lightweight boilerplate template for future React Native projects

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone <repo-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

or

```bash
yarn install
```

### 3. Run the project (Expo Go)

⚠️ **Note:** Google Sign-In will not work inside Expo Go, but basic UI development works.

```bash
npx expo start
```

## ⚙️ Running With Development Build (Required for Google Sign-In)

Because native Google Sign-In requires a custom dev build:

### 1. Configure EAS (only first time)

```bash
npx eas build:configure
```

This generates the `eas.json` file.

### 2. Build your dev client

**Android:**

```bash
eas build -p android --profile development
```

**iOS:**

```bash
eas build -p ios --profile development
```

When the build finishes:
- Download the APK (Android) or install via EAS (iOS)
- Install the dev build on your phone

### 3. Start Metro with dev-client enabled

```bash
npx expo start --dev-client
```

Then open the Nutralist app on your phone.

## 🔐 Google Sign-In Setup

The repo includes:

- `app.json` with the native config plugin:

```json
[
  "@react-native-google-signin/google-signin",
  {
    "iosUrlScheme": "com.googleusercontent.apps.YOUR_IOS_CLIENT_ID"
  }
]
```

- Proper native linking through EAS dev builds

You must provide your own:
- `GOOGLE_CLIENT_ID`
- iOS reversed client ID
- Android SHA-1 and SHA-256 in Google Cloud Console

**Retrieve SHA keys:**

```bash
npx expo fetch:android:hashes
```

or via EAS:

```bash
eas credentials
```

## 📁 Project Structure

```
.
├── app/
│   ├── index.tsx          # Main route / home screen
│   ├── (auth)/            # Login UI or future screens
│   └── ...other screens
│
├── app.json               # Expo config (plugins, scheme, icons)
├── eas.json               # EAS build config (dev, preview, prod)
├── package.json
└── README.md
```

## 📦 Scripts

```bash
npm start         # Expo (Expo Go)
npm run dev       # Dev client (custom EAS build)
npm run android   # Run Android emulator
npm run ios       # Run iOS simulator
npm run reset-project
```

## 🧹 Reset the starter project

To instantly strip the example screens and start fresh:

```bash
npm run reset-project
```

Creates a new blank `app/` directory.

## 🧬 Environment Files

These are optional but recommended:

```
.env
.env.production
.env.development
```

For example:

```env
EXPO_PUBLIC_API_URL=https://your-api.com
EXPO_PUBLIC_GOOGLE_CLIENT_ID=xxxx.apps.googleusercontent.com
```

Inject them in EAS using:

```bash
eas secret:create --name EXPO_PUBLIC_GOOGLE_CLIENT_ID --value xxxx --type string
```

## 🧱 EAS Build Profiles (from eas.json)

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "android": {
        "gradleCommand": ":app:assembleRelease"
      }
    }
  }
}
```

## 🤝 Contributing

Pull requests are welcome!

- Follow Expo + React Native guidelines
- Ensure dev build succeeds before submitting

## 📝 License

MIT License — You can freely use this as your personal or team boilerplate.

## ⭐ Support

If this template saved you time or headaches, consider starring the repo!
