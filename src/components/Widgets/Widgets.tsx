import React from "react";
import "./Widgets.scss";

const Widgets = () => {
  return (
    <div className="widgets">
      {/*<iframe*/}
      {/*  src="https://www.facebook.com/plugins/page.php?href=https%3A%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"*/}
      {/*  frameBorder="0"*/}
      {/*  width="340"*/}
      {/*  height="100%"*/}
      {/*  style={{ border: "none", overflow: "hidden" }}*/}
      {/*  scrolling="no"*/}
      {/*  allowTransparency={true}*/}
      {/*  allow="encrypted-media"*/}
      {/*/>*/}
      <div
        className="fb-page"
        data-href="https://www.facebook.com/facebook"
        data-width="380"
        data-hide-cover="false"
        data-show-facepile="false"
        style={{ width: 340, height: "100%" }}
      />
    </div>
  );
};

export default Widgets;
