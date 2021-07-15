import cpoststyles from "../../styles/createpost.module.scss";
// import { useForm } from "react-hook-form";
import Ckeditor from "../../Components/CKEditor.js";
import React from "react";
import Select from "react-select";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posttile: "",
      postimage: "",
      postbody: "",
      selectedoptions: [],
      options: [
        { id: 1, value: "Web Developement", label: "Web Developement" },
        { id: 2, value: "Front End", label: "Front End" },
        { id: 3, value: "Back End ", label: "Back End" },
      ],
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handeInputChange = this.handeInputChange.bind(this);
  }

  handleImageChange(event) {
    let imagefile = event.target.files[0];
    if (imagefile) {
      let reader = new FileReader();
      reader.onload = () => {
        this.setState({
          postimage: reader.result,
        });
      };

      reader.readAsDataURL(imagefile);
    }
  }

  getEditorData(data) {
    this.setState({
        postbody: data,
    })
  }

  handeInputChange(event){
    this.setState({
        posttile: event.target.value
    })
  }

  handleMultiSelect= (values)=>{
      
        values.forEach(element => {
            this.setState({
                selectedoptions: [...this.state.selectedoptions, element.value]
            })
        });
  }

  removeDuplicate= (value)=>{
   
    
  }

//   handle form submit
handelSubmit=(event)=>{
    event.preventDefault()
    console.log(this.state)
}

  render() {
    const ImagePreview = () => {
      if (this.state.postimage != "") {
        return (
          <img
            className={cpoststyles.postimage}
            src={this.state.postimage}
            alt="Post Image"
          />
        );
      } else {
        return <div>Please Select Image</div>;
      }
    };

    return (
      <div className={cpoststyles.create_post}>
        <div className={cpoststyles.pagetitle}>Create Your Post</div>
        <form onSubmit={this.handelSubmit}>
          <div className={cpoststyles.title}>
            <span>Post Title</span>
            <input
              type="text"
              className="form-control"
              placeholder="Post Title"
              onChange={this.handeInputChange}
              value={this.state.posttile}
            ></input>
          </div>

          <div className={cpoststyles.coverimage}>
            <span>Post Image</span>

            <input
             
              onChange={this.handleImageChange}
              type="file"
              className="form-control"
            ></input>
            <ImagePreview />
          </div>
          <div className={cpoststyles.postbody}>
            <span>Post Body</span>
            <Ckeditor
              className={cpoststyles.ckeditor}
              editordata={(data) => this.getEditorData(data)}
            />
          </div>

          <div className={cpoststyles.posttags}>
            <span>Post Tags</span>
            <Select
            
            //   value={this.state.selectedoptions}
              closeMenuOnSelect={false}
              isMulti
              options={this.state.options}
              defaultValue="Select Tags"
              onChange={value => this.handleMultiSelect(value)}
              onInputChange = {value => this.removeDuplicate(value)}

            />
          </div>

          <div className={cpoststyles.submitbutton}>
            <button type="submit" className={cpoststyles.submit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePost;
