

const UploadedFiles = (state = [], action) => {
    switch (action.type) {
      case 'UPLOAD_FILE':
      debugger;
        return action.files;
      default:
        return state
    }
  }
  
  export default UploadedFiles