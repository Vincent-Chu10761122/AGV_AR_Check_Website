const express = require("express");
const app = express();
const path = require("path");

// 設置靜態檔案目錄
app.use(express.static(__dirname));

// 路由設置
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 監聽端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
