import React from "react";

class Imageupload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: "",
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
    data.append("filename", this.fileName.value);
    data.append("user_id", this.props.profileId);
    fetch("http://127.0.0.1:5000/uploadimage", {
      method: "PATCH",
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        console.log(body.file);
      });
    });
    this.props.backtoprof();
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input
            ref={(ref) => {
              this.uploadInput = ref;
            }}
            type="file"
          />
        </div>
        <div>
          <input
            ref={(ref) => {
              this.fileName = ref;
            }}
            type="text"
            placeholder="Enter the desired name of file"
          />
        </div>
        <br />
        <div>
          <button onClick={this.handleUploadImage}>Upload</button>
        </div>
        {/* <img src={this.state.imageURL} alt="img" /> */}
      </form>
    );
  }
}

export default Imageupload;
