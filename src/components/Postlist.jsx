import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { postListContext } from "../store/Postlist-store";
import Welcomemsg from "./Welcomemsg";
import LoadingSpinner from "./LoadingSpinner";

const Postlist = () => {
  const { postData, fetching } = useContext(postListContext);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postData.length === 0 && <Welcomemsg />}

      <div className="container postList">
        {!fetching &&
          postData.map((item) => <Post items={item} key={item.id} />)}
      </div>
    </>
  );
};
export default Postlist;
