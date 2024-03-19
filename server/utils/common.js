export const getUploadFileUrl = (type = "media") => {
    const date = new Date();
    return `uploads/${type}/${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}`;
  };