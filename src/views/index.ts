const file: { [key: string]: any } = {
  /**
   * fileList         : 當前資料夾檔名陣列
   * removeFileList   : 將要移除的檔案名稱放到陣列
   * allFiles         : 資料夾中的檔案
   */
  fileList: [],
  removeFileList: ['./index.ts'], 
  allFiles: null,

  // 取得當前資料夾下所有檔案
  getCurrFolderFiles() {
    this.allFiles = require.context('./', true, /\.ts$/);
    return this;
  },
  // 移除不想要輸出的檔案
  excludeFiles() {
    if (this.removeFileList.length !== 0) {
      this.fileList = this.allFiles.keys().filter((item: string) => {
        return !this.removeFileList.includes(item);
      });
    }
    return this;
  },
  // 輸出成物件形式
  exportDefaultFiles() {
    const files: { [key: string]: any } = {};
    this.fileList.forEach((path: string) => {
      const name = path.replace(/(index.ts|\.|\/)/g, '').split('/')[0];
      const firstLetter = name.substr(0, 1);
      const otherLetter = name.substr(1);
      const viewName = firstLetter + otherLetter;

      files[viewName] = this.allFiles(path).default;
    });
    return files;
  },
};

const exportFiles = file
  .getCurrFolderFiles()
  .excludeFiles()
  .exportDefaultFiles();

delete exportFiles.index;

export default exportFiles;
