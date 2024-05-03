import React, { useContext } from "react";
import { postListContext } from "../store/Postlist-store";
import { MdDelete } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { TbShare3 } from "react-icons/tb";

function Post({ items }) {
  const { deletePost } = useContext(postListContext);
  return (
    <div className="card" style={{ width: "15rem", margin: "5px 10px" }}>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => deletePost(items.id)}
      >
        <MdDelete />
        <span className="visually-hidden">unread messages</span>
      </span>
      <div className="card-body">
        <h5 className="card-title">{items.title}</h5>
        <p className="card-text" style={{ marginBottom: "-3px" }}>
          {items.body}
        </p>
        <div className="row " style={{ marginBottom: "3px" }}>
          <div className="col-2 text-primary" style={{ fontSize: "25px" }}>
            <SlLike />
          </div>

          <div className="col-2" style={{ fontSize: "25px" }}>
            <FaRegComment />
          </div>
          <div className="col-2" style={{ fontSize: "25px" }}>
            <TbShare3 />
          </div>
        </div>
        <p style={{ marginBottom: "3px" }}> {items.reaction} Likes</p>
        <span style={{ color: "black", fontWeight: "600" }}>
          {items.userId}
        </span>
        <div>
          {items.tags.map((tag) => (
            <span key={tag} style={{ margin: "5px", color: "blue" }}>
              <a href="#">{`#${tag}`}</a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
