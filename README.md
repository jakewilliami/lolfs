# lolfs - Living Off The Land File Sharing

`lolfs` is a collection of **Living Off The Land (LOTL) file-sharing techniques**, leveraging built-in system tools to transfer files without requiring third-party software. Inspired by projects like [LOLRMM](https://LOLRMM.io) and [LOLBAS](https://lolbas-project.github.io), `lolfs` provides a categorized reference of methods attackers and defenders can use to move files stealthily within an environment.

NOTE: As this is a project I work on in my spare time, the information could be incorrect and/or missing. I welcome you to contribute to make this into a better detection list.

## 🔥 Features
- **OS-native techniques** – Uses built-in Windows, Linux, and macOS utilities.
- **Stealthy operations** – Evades traditional security detections by avoiding external binaries.
- **Red Team & Blue Team use cases** – Useful for both adversaries and defenders to understand potential risks and mitigations.
- **Categorized by OS & technique** – Methods are grouped based on their platform and approach.

## 🛡️ Detection & Mitigation
Defenders can mitigate these techniques through:
- **Endpoint monitoring** – Detect suspicious command-line activity.
- **Network logging** – Monitor abnormal file transfers.
- **Application whitelisting** – Restrict misuse of built-in utilities.
- **SIEM alerts** – Correlate events for anomaly detection.

## 📜 Disclaimer
This project is for educational and security research purposes only. The authors are not responsible for misuse.

## 🔗 Resources
- [LOLBAS Project](https://lolbas-project.github.io/)
- [Living Off The Land RMM](https://github.com/LOLRMM)
- [LOLOL Farm](https://lolol.farm/)

## 🤝 Contributing
Contributions should be made using the `lolfs.json` file, following the current format. Please ensure that new entries maintain consistency with the existing structure. Submit a pull request with your changes.

## 📄 License
MIT License - see `LICENSE` for details.
