const CreateJson = (fileName, jsonObject) => {
  const blob = new Blob([JSON.stringify(jsonObject, '', '  ')], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
};

export default class FileUtils {
  static CreateJson(fileName, jsonObject) { CreateJson(fileName, jsonObject); }
}
