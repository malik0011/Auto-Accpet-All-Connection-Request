<div align="center">
  <h1>🚀 LinkedIn Auto Accept</h1>
  <p>Supercharge your LinkedIn networking with one-click connection acceptance</p>

  ![License](https://img.shields.io/badge/license-MIT-blue)
  ![Version](https://img.shields.io/badge/version-1.0-green)
  ![LinkedIn](https://img.shields.io/badge/LinkedIn-Compatible-0A66C2)
</div>

---

## 🌟 Features

- **One-Click Automation**: Accept all pending LinkedIn connection requests instantly
- **Smart Processing**: Natural delay between actions to mimic human behavior
- **Visual Feedback**: Real-time progress tracking with elegant UI
- **Error Handling**: Robust error management and user feedback
- **Privacy Focused**: Works locally in your browser with no data collection

## 🚀 Quick Start

1. **Installation**
   - Download from Chrome Web Store (coming soon)
   - Or load unpacked extension:
     ```bash
     git clone https://github.com/yourusername/linkedin-auto-accept
     ```
   - Open Chrome → Extensions → Enable Developer Mode
   - Click "Load unpacked" → Select the extension directory

2. **Usage**
   - Navigate to [LinkedIn My Network](https://www.linkedin.com/mynetwork/)
   - Click the extension icon
   - Hit "Accept All" and watch the magic happen! ✨

## 🛠️ Technical Architecture

The extension is built with modern web technologies and follows Chrome Extension Manifest V3 guidelines:

- **Background Service Worker**: Handles extension lifecycle and messaging
- **Content Scripts**: Manages DOM interactions and connection acceptance
- **Popup Interface**: Sleek, responsive UI with real-time status updates
- **Event-Driven Architecture**: Asynchronous message passing between components

## 💻 Development

### Prerequisites
- Chrome Browser
- Basic knowledge of JavaScript
- Node.js (for development)

### Local Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run build` to build the extension
4. Run `npm run start` to start the extension

### Build for Production

1. Run `npm run build` to build the extension
2. Create a zip file of the `dist` directory
3. Upload to Chrome Web Store


## 🔒 Security

- No data collection or external API calls
- Works entirely client-side
- Requires minimal permissions:
  - `activeTab`: For current page interaction
  - `scripting`: For content script injection
  - `storage`: For future feature support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with love by Ayan
- Inspired by the LinkedIn community
- Special thanks to all contributors

---

<div align="center">
  <p>Made with ♥️ for the LinkedIn Community</p>
  <p>Copyright © 2024 Ayan</p>
</div>
