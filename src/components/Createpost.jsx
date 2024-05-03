import { Form, redirect } from "react-router-dom";
import style from "../components/Createpost.module.css";
import { postListContext } from "../store/Postlist-store";
import { useContext } from "react";
const Createpost = () => {
    
  return (
    <>
      <div className={`container text-center ${style.formBox}`}>
        <Form method="POST" className="form ">
          <h1>Create Post</h1>
          <input
            type="text"
            name="title"
            id=""
            placeholder="Enter post title"
          />

          <br />
          <textarea
            type="text"
            name="body"
            id="textarea"
            placeholder="Enter post Description"
            rows={2}
          />
          <br />
          <input type="userId" name="userId" id="" placeholder="Enter userName" />
          <br />
          <input
            type="text"
            name="reaction"
            id=""
            placeholder="Enter reactions"
          />
          <br />
          <input type="text" name="tags" id="" placeholder="Enter tags" />
          <br />
          <input
            type="submit"
            value="Create post"
            className={`${style.craetePostBtn}`}
          />
        </Form>
      </div>
    </>
  );
};
export async function Createpostdata(data) {



  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
     console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  }).then((res) =>
    res.json().then((post) => {
      addPost(post);
    })
  );
  return redirect("/");
}

export default Createpost;
