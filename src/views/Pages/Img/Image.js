import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Alert } from 'reactstrap';
import fire from '../../../config/Fire'
import FileUploader from "react-firebase-file-uploader"

class Image extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            avatar: "",
            isUploading: false,
            progress: 0,
            avatarURL: ""
        };
    }

    handleChangeUsername = event => this.setState({ username: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };

    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        fire
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => {
                this.setState({
                    avatarURL: url
                })
                var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/dpurl`)
                dbref.set(url)
            }
            );
    };

    render() {
        return (
            <div>
                <form>
                    {/* <label>{fire.auth().currentUser.uid}</label> */}
                    {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                    <FileUploader
                        accept="image/*"
                        name="avatar"
                        filename={fire.auth().currentUser.uid}
                        maxHeight="400"
                        maxWidth="400"
                        // randomizeFilename
                        storageRef={fire.storage().ref("images")}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    />
                    {this.state.avatarURL && <img src={this.state.avatarURL} width="100px" />}
                    {/* <img src={this.state.user.dpurl?this.state.user.dpurl:'assets/img/avatars/0.png'} className="img-avatar" alt="" /> */}
                    {/* <label>{this.state.avatarURL}</label> */}
                </form>
            </div>
        );
    }
}

export default Image;
