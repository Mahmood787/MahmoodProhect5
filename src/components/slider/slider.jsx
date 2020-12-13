import React, { useState } from "react";
// import Slide from "react-swipeable-views";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";


 
const AutoRotatingCarouselModal = () => {
    const [handleOpen, setHandleOpen] = useState({ open: true });
    const isMobile = useMediaQuery("(max-width:600px)");
  return (   
    <div>
      <AutoRotatingCarousel
        label="Get started"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: true })}
        autoplay={true}
        mobile={isMobile}
        style={{backgroundColor:blue[600] }} 
        carouselContainer={{backgroundColor:blue[600]}}
        carouselStyle={{backgroundColor:green[600]}}
        carouselWrapperStyle={{backgroundColor:blue}}
        contentStyle={{backgroundColor:blue}}
      >
        <Slide
          media={ 
            <img  alt="" src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
          }
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title="This is a very cool feature"
          subtitle="Just using this will blow your mind."
        />
        <Slide
          media={
            <img  alt="" src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
          }
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title="Ever wanted to be popular?"
          subtitle="Well just mix two colors and your are good to go!"
        />
        <Slide
          media={
            <img  alt="" src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title="May the force be with you"
          subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
        />
      </AutoRotatingCarousel>
    </div>
  );
};

export default AutoRotatingCarouselModal;
