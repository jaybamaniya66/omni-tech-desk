import { dirname } from 'path';
import { fileURLToPath } from 'url';
import FtpDeploy from "ftp-deploy";
import path from "path";
const ftpDeploy = new FtpDeploy();

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  user: "u110669729.blockrabbits.com",
  password: "S@iram05350535",
  host: "82.25.107.88",
  port: 21,
  localRoot: __dirname + "/dist", // or /build
  remoteRoot: "/public_html/",
  include: ["*", "**/*"],
  deleteRemote: true,
  forcePasv: true,
};

ftpDeploy
  .deploy(config)
  .then(res => console.log("Deployment finished:", res))
  .catch(err => console.error("Deployment error:", err));
