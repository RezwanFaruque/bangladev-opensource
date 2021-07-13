import cpoststyles from "../../styles/createpost.module.scss";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CreatePost = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data.posttitle);
  };
  return (
    <div className={cpoststyles.create_post}>
      <div className={cpoststyles.pagetitle}>Create Your Post</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cpoststyles.title}>
          <input
            type="text"
            className="form-control"
            placeholder="Post Title"
            {...register("posttitle", { required: true })}
          ></input>
        </div>

        <div className={cpoststyles.coverimage}>
          <input
            type="file"
            className="form-control"
            {...register("postimage", { required: true })}
          ></input>
        </div>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default CreatePost;
