import { useEffect, VFC } from "react";
import Slider from "react-slick";

type Props = {
  ImageUrls: string[];
};

const MySlider: VFC<Props> = ({ ImageUrls }) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img src={ImageUrls[i]} className="pagingThumbnail"/>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    console.log(images);
  }, []);

  const images = ImageUrls.map((value: string) => (
    <div>
      <img src={value} />
    </div>
  ));

  return (
    <div>
      <h2>ページングのテスト</h2>
      <Slider {...settings}>
        {ImageUrls.map((value: string) => (
          <div>
            <img src={value} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
