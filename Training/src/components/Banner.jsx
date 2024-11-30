import React from "react";

function Banner() {
  return (
    <div
      className="h-[40vh] md:h-[80vh] bg-no-repeat bg-center bg-cover flex items-end"
      style={{
        backgroundImage: `url(https://th.bing.com/th/id/R.d55909d7f15b10996f7e18b07508be82?rik=b47rWCManbXfyQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-er83M4qkNqc%2fTm4KU-En-sI%2fAAAAAAAAC8I%2fryCGpkgeTw4%2fs1600%2fBen_10_Ultimate_Alien_HD_Wallpaper_www.Vvallpaper.Net_2.jpg&ehk=e7vXNtB0QZ2IshIqw0jepzGPiHZjaAr%2fZSOYK9xL58Q%3d&risl=&pid=ImgRaw&r=0)`,
      }}
    >
      <div className="bg-gray-900/90 text-center w-full text-white text-xl p-3">Ben 10</div>
    </div>
  );
}

export default Banner;
