# lolfs - Living Off The Land File Sharing

`lolfs` is a collection of **Living Off The Land (LOTL) file-sharing techniques**, tools used to transfer files. Inspired by projects like [LOLRMM](https://LOLRMM.io) and [LOLBAS](https://lolbas-project.github.io), `lolfs` provides a categorised reference of methods attackers and defenders can use to move files stealthily within an environment.

NOTE: As this is a project I work on in my spare time, the information could be incorrect and/or missing. I welcome you to contribute to make this into a better detection list.

## 🔥 Features
- `lolfs` catalogs file-sharing tools.
- Each entry contains metadata such as supported operating systems, required privileges, detection mechanisms, and known artifacts that can aid in forensic analysis.

### API

In order to access the json file from the api use the following command:

```bash
curl https://www.lolfs.app/api/lolfs.json
```

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
Contributions should be made by adding or editing entries in the `json` folder, following the current format. Please ensure that new entries maintain consistency with the existing structure. Submit a pull request with your changes.

## 📄 License
This project is licensed under the [MIT License](LICENSE).
